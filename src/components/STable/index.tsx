import { Table, TableProps } from "antd";
import { delay, throttle } from "lodash";
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";

type IProps = TableProps<any> & {
  wrapperHeightOffset: number;
};

/**
 * 不适合用在 Tabs 中，只适合用在不同路由下的表格
 * Tabs 初始化时不会加载其余的 Tabs，而且在同一个路由下，重复名称会导致只有第一个选中的元素被执行渲染，且其他未渲染的 tabs 也会出现 bug
 */

const InnerTable: React.ForwardRefRenderFunction<any, IProps> = (
  props,
  ref,
) => {
  const [tableHeight, setTableHeight] = useState<number>(0);

  const { pagination = {}, wrapperHeightOffset, scroll } = props;

  const defaultPagination = {
    showSizeChanger: true,
    pageSizeOptions: ["20", "50", "100"],
    defaultPageSize: 20,
  };

  const wrapperRef = useRef<any>();

  const getOffset = () => {
    // 离底部4px + 表头55px
    let _offset = 4 + 55;
    if (pagination) {
      _offset += 56;
    } else {
      // 不显示分页时, 增加底部距离4px
      _offset += 4;
    }
    if (props.title) {
      _offset += 45; // title高45px
    }
    return _offset;
  };
  const offset = getOffset();

  const throttleWindowResize = useMemo(() => {
    // 获取到实际的距离顶部的像素，如果存在父元素，则将父元素距离顶部的像素也纳入到计算结果中
    function getAbsTop(node: any) {
      let _node = node;
      let top = _node.offsetTop;
      while (_node.offsetParent !== null) {
        _node = _node.offsetParent;
        top += _node.offsetTop;
      }
      return top;
    }
    // 设置
    function onWindowResize() {
      if (wrapperRef.current) {
        const el = document.body || document.documentElement; // 获取视窗高度
        const top = getAbsTop(wrapperRef.current) || 0; // 获取 table 距离顶部高度
        let wrapperHeight = el.clientHeight - top + (wrapperHeightOffset || 0); // 获取 table 实际高度
        setTableHeight(wrapperHeight);
        wrapperRef.current.style.height = wrapperHeight + "px";
        const tableBody = document.querySelector(`.ant-table-body`) as any;
        tableBody.style.height = wrapperHeight - offset + "px"; // 当数据量过少的时候，设置 tablebody 的高度为视窗内最高
      }
    }
    // 节流
    return throttle(onWindowResize, 100);
  }, [offset, wrapperHeightOffset]);

  useEffect(() => {
    // delay 100 ms 防止路由跳转时未加载
    delay(throttleWindowResize, 100);
    window.addEventListener("resize", throttleWindowResize);
    return function cleanup() {
      window.removeEventListener("resize", throttleWindowResize);
    };
  }, [throttleWindowResize]);

  // 导出 resize 方法，外部高度变化时触发 resize
  useImperativeHandle(
    ref,
    () => ({
      resize: throttleWindowResize,
    }),
    [throttleWindowResize],
  );

  return (
    <div ref={wrapperRef}>
      <Table
        {...props}
        className="adjustTable"
        scroll={
          scroll
            ? { x: scroll.x, y: tableHeight - offset }
            : { y: tableHeight - offset }
        }
        pagination={defaultPagination}
      ></Table>
    </div>
  );
};

const STable = React.forwardRef<any, IProps>(InnerTable);

export default STable;
