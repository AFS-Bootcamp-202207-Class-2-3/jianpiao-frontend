import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import {JPApi} from "../api/http";

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
  getItem(<Link to="/films">电影</Link>, "films", <AppstoreOutlined />),
  getItem(<Link to="/cinemas">影院</Link>, "cinemas", <SettingOutlined />),
];

const logout = () =>{
  JPApi("/user/logout", "post", {})
}

const userMenu = [
  getItem(
    <Link to="/personal" state={{ activedKey: "1" }}>
      个人信息
    </Link>,
    "userinfo",
    <HomeOutlined />
  ),
  getItem(
    <Link to="/personal" state={{ activedKey: "2" }}>
      我的订单
    </Link>,
    "myorders",
    <AppstoreOutlined />
  ),
  getItem(
      <span onClick={logout} >
        退出登录
      </span>,
      "logout",
      <AppstoreOutlined />
  ),
];

export { routes, userMenu };
