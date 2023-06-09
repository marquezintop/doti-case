import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import useAuthStore from '../stores/auth';

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const App = () => {

const usuario = useAuthStore((state) => state.usuario);
    
const navigate = useNavigate();

function getItem(label, key, nav = false,path , icon, children, type) {
    return {
    key,
    icon,
    children,
    label,
    type,
    onClick: nav ? ()=> navigate(`./../../${path}`) : ()=> {}
  };
}
const items = [
    getItem('', 'menu', false, "", <AppstoreOutlined />, [
        getItem(`Ola ${usuario.nome.slice(0, 10)}`, '0', true, "", <UserOutlined />),
        getItem('Home', '1', true, ""),
        getItem('Blog', '2', true, "blog"),
        getItem('Produtos', '3', true,"produtos"),
    ]),
];

  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Menu
      mode="horizontal"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "#000000",
        color: "white"
      }}
      items={items}
      theme={"dark"}
      triggerSubMenuAction='click'
       />
  );
};
export default App;