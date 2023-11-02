import React, { useState } from "react";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import logo from "./logo.png";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        // rel="noopener noreferrer"
        // href="https://www.antgroup.com"
      >
        HOME
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        // rel="noopener noreferrer"
        // href="https://www.antgroup.com"
      >
        ABOUT
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        // rel="noopener noreferrer"
        // href="https://www.antgroup.com"
      >
        TRAINING
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a
        target="_blank"
        // rel="noopener noreferrer"
        // href="https://www.antgroup.com"
      >
        SOCIAL
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a
        target="_blank"
        // rel="noopener noreferrer"
        // href="https://www.antgroup.com"
      >
        CONTACT
      </a>
    ),
  },
];
function Nav() {
  const [stateMenu, setStateMenu] = useState(false);
  const openMenu = () => {
    setStateMenu(!stateMenu);
  };
  return (
    <div className="w-full flex md:p-10 md:px-[8%] justify-between md:bg-white bg-black p-10">
      <div className="logo flex items-center gap-2">
        <img
          src={logo}
          className="bg-black rounded-[50%] w-[48px] min-w-[48px]"
        />
        {/* <div className="h-[48px] text-xl">VC ISO CONSULT</div> */}
      </div>
      <div className="menu hidden md:flex items-center gap-16">
        <div className="cursor-pointer">HOME</div>
        <div className="cursor-pointer">ABOUT</div>
        <div className="cursor-pointer">TRAINING</div>
        <div className="cursor-pointer">SOCIAL</div>
        <div className="cursor-pointer bg-black text-white flex items-center justify-center w-[150px] h-[50px] rounded-xl transition-transform delay-700 hover:rounded-none">
          CONTACT
        </div>
      </div>
      <div
        className={`md:hidden cursor-pointer ${
          stateMenu === true
            ? `bg-white w-[50px] flex-col items-center justify-center`
            : ``
        }`}
        // onClick={openMenu}
      >
        <Dropdown
          menu={{
            items,
          }}
          overlayStyle={{ width: "300px", height: "150px" }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <div
                className={`md:hidden cursor-pointer ${
                  stateMenu === true
                    ? `bg-white w-[50px] flex-col items-center justify-center`
                    : ``
                }`}
              >
                <div
                  className={`h-[10px]  w-[30px] border-b-2 ${
                    stateMenu === false ? "border-white " : "border-black"
                  }`}
                ></div>
                <div
                  className={`h-[10px]  w-[30px] border-b-2 ${
                    stateMenu === false ? "border-white " : "border-black"
                  }`}
                ></div>
                <div
                  className={`h-[10px]  w-[30px] border-b-2 ${
                    stateMenu === false ? "border-white " : "border-black"
                  }`}
                ></div>
              </div>

              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {/* <div
          className={`h-[10px]  w-[30px] border-b-2 ${
            stateMenu === false ? "border-white " : "border-black"
          }`}
        ></div>
        <div
          className={`h-[10px]  w-[30px] border-b-2 ${
            stateMenu === false ? "border-white " : "border-black"
          }`}
        ></div>
        <div
          className={`h-[10px]  w-[30px] border-b-2 ${
            stateMenu === false ? "border-white " : "border-black"
          }`}
        ></div> */}
      </div>
    </div>
  );
}

export default Nav;
