import { useRequest } from "ahooks";

/**
 *
 * @param api 查询接口
 * @param form 筛选表单数据
 * @returns onChange
 */
export const useFilterSearch = (api: any, form: any) => {
  const initSearchParams = {
    page: 1,
    pageSize: 10,
  };

  const {
    data,
    runAsync: runSearch,
    loading,
  } = useRequest(api, {
    defaultParams: [initSearchParams],
  });

  const onChange = (page: number = 1, pageSize: number = 10) => {
    const data = {
      ...form.getFieldsValue(),
      page,
      pageSize,
    };

    runSearch(data);
  };

  return {
    data,
    onChange,
    loading,
  };
};
