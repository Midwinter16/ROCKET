import chengshifuwu from "@/assets/chengshifuwu.svg";
import jieqianIcon from "@/assets/jieqian.svg";
import jinbizhuanchuIcon from "@/assets/jinbizhuanchu.svg";
import licaichanpinIcon from "@/assets/licaichanpin.svg";
import qiandaiIcon from "@/assets/qiandai.svg";
import quanbuIcon from "@/assets/quanbu.svg";
import remenhuodongIcon from "@/assets/remenhuodong.svg";
import renminbiIcon from "@/assets/renminbi.svg";
import shenqingxinyongkaIcon from "@/assets/shenqingxinyongka.svg";
import tahangkazhuanruIcon from "@/assets/tahangkazhuanru.svg";
import tuijianyouliIcon from "@/assets/tuijianyouli.svg";
import yanglaojinrongIcon from "@/assets/yanglaojinrong.svg";
import yingpiaoIcon from "@/assets/yingpiao.svg";
import zonglanIcon from "@/assets/zonglan.svg";
import { SIconProps } from "@/components/SIcon";

export const MainBusiness: Omit<SIconProps[], "count"> = [
  {
    title: "朝朝宝",
    size: "large",
    icon: qiandaiIcon,
  },
  {
    title: "收支明细",
    size: "large",
    icon: renminbiIcon,
  },
  {
    title: "转账",
    size: "large",
    icon: jinbizhuanchuIcon,
  },
  {
    title: "账户总览",
    size: "large",
    icon: zonglanIcon,
  },
];

export const TopSubBusiness: Omit<SIconProps[], "count"> = [
  {
    title: "申请信用卡",
    size: "middle",
    icon: shenqingxinyongkaIcon,
  },
  {
    title: "他行卡转入",
    size: "middle",
    icon: tahangkazhuanruIcon,
  },
  {
    title: "借钱",
    size: "middle",
    icon: jieqianIcon,
  },
  {
    title: "城市服务",
    size: "middle",
    icon: chengshifuwu,
  },
  {
    title: "热门活动",
    size: "middle",
    icon: remenhuodongIcon,
  },
];

export const BottomSubBusiness: Omit<SIconProps[], "count"> = [
  {
    title: "养老金融",
    size: "middle",
    icon: yanglaojinrongIcon,
  },
  {
    title: "推荐有礼",
    size: "middle",
    icon: tuijianyouliIcon,
  },
  {
    title: "影票",
    size: "middle",
    icon: yingpiaoIcon,
  },
  {
    title: "理财产品",
    size: "middle",
    icon: licaichanpinIcon,
  },
  {
    title: "全部",
    size: "middle",
    icon: quanbuIcon,
  },
];
