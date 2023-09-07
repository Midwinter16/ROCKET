import chengshifuwu from "@icons/chengshifuwu.svg";
import jieqianIcon from "@icons/jieqian.svg";
import jinbizhuanchuIcon from "@icons/jinbizhuanchu.svg";
import licaichanpinIcon from "@icons/licaichanpin.svg";
import qiandaiIcon from "@icons/qiandai.svg";
import quanbuIcon from "@icons/quanbu.svg";
import remenhuodongIcon from "@icons/remenhuodong.svg";
import renminbiIcon from "@icons/renminbi.svg";
import shenqingxinyongkaIcon from "@icons/shenqingxinyongka.svg";
import tahangkazhuanruIcon from "@icons/tahangkazhuanru.svg";
import tuijianyouliIcon from "@icons/tuijianyouli.svg";
import yanglaojinrongIcon from "@icons/yanglaojinrong.svg";
import yingpiaoIcon from "@icons/yingpiao.svg";
import zonglanIcon from "@icons/zonglan.svg";
import { SIconProps } from "@/components/SIcon";

export const ScreenProtectTime = 2000;

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
