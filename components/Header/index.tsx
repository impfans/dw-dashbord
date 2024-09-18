import React from "react";
import MenuList from "./index.client";

/**
 * h5页面底部导航菜单
 */
const HeaderMenu = () => {
  return (
    <div className="h-16 w-full bg-white fixed bottom-0">
      <MenuList />
    </div>
  );
};

export default HeaderMenu;
