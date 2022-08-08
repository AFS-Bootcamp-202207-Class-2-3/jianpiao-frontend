import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const routes = [
  getItem(<Link to="/">首页</Link>, "homepage", <HomeOutlined />),
  getItem(<Link to="/film">电影</Link>, "film", <AppstoreOutlined />),
  getItem(<Link to="/cinema">影院</Link>, "cinema", <SettingOutlined />),
];

const userMenu = [
  getItem(<Link to="/userinfo">个人信息</Link>, "userinfo", <HomeOutlined />),
  getItem(
    <Link to="/myorders">我的订单</Link>,
    "myorders",
    <AppstoreOutlined />
  ),
];

export { routes, userMenu };
