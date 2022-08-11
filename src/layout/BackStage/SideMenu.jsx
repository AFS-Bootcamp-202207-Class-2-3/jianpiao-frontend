import React from 'react';
import { AppstoreOutlined, ShopOutlined, PicLeftOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
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

const SideMenu = () => {   

    const items = [
        getItem(<Link to="/back-stage/cinema">影院管理</Link>, "cinema", <ShopOutlined />),
        getItem(<Link to="/back-stage/hall">影厅管理</Link>, "hall", <EnvironmentOutlined />),
        getItem(<Link to="/back-stage/film">电影管理</Link>, "film", <AppstoreOutlined />),
        getItem(<Link to="/back-stage/session">场次管理</Link>, "session", <PicLeftOutlined />),
      ];

      const onClick = (e) => {
        // console.log('click ', e);
      };

    return (
        <Menu
            onClick={onClick}
            style={{
                width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
            />
    );
}


export default SideMenu;