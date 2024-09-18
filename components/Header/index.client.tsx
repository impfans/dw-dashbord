"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const menuList = [
  {
    key: "home",
    title: "首页",
    icon: require("@images/home.png"),
    selectIcon: require("@images/home-white.png"),
    path: "/",
  },
  {
    key: "tools",
    title: "发现",
    icon: require("@images/edit-tools.png"),
    selectIcon: require("@images/edit-tools-white.png"),
    path: "/tools",
  },
  {
    key: "calendar",
    title: "日历",
    icon: require("@images/calendar.png"),
    selectIcon: require("@images/calendar-white.png"),
    path: "/calendar",
  },

  {
    key: "place",
    title: "位置",
    icon: require("@images/place.png"),
    selectIcon: require("@images/place-white.png"),
    path: "/place",
  },
  {
    key: "profile",
    title: "我的",
    icon: require("@images/profile.png"),
    selectIcon: require("@images/profile-white.png"),
    path: "/profile",
  },
];

const MenuList = () => {
  const [currentSelectMenu, setCurrentSelectMenu] = useState("home");

  return (
    <div className="flex items-center h-full p-8">
      <div className="flex items-center space-x-12">
        {menuList.map((item) => (
          <div
            key={item.key}
            className="cursor-pointer"
            onClick={() => setCurrentSelectMenu(item.key)}
          >
            {item.key === currentSelectMenu ? (
              <div className=" relative bottom-8 w-14 h-14 bg-gray-100 rounded-full flex justify-center">
                <div className=" bg-orange-300 rounded-full w-12 h-12 flex items-center justify-center">
                  <Image
                    src={item.selectIcon}
                    alt={item.title}
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            ) : (
              <Link href={item.path}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
