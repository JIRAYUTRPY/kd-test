import { SettingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Collapse, Select } from "antd";
const { Option } = Select;
const text1 = (
  <p
    style={{
      paddingLeft: 24,
      fontFamily: "Source Code Pro, monospace",
      color: "white",
      size: "32px",
    }}
  >
    ISO 9001:2015 specifies requirements for a quality management system when an
    organization:
    <br />
    a:needs to demonstrate its ability to consistently provide products and
    services that meet customer and applicable statutory and regulatory
    requirements, and
    <br />
    b: aims to enhance customer satisfaction through the effective application
    of the system, including processes for improvement of the system and the
    assurance of conformity to customer and applicable statutory and regulatory
    requirements.
    <br />
    All the requirements of ISO 9001:2015 are generic and are intended to be
    applicable to any organization, regardless of its type or size, or the
    products and services it provides.
  </p>
);
const header1 = (
  <p
    style={{
      fontFamily: "Source Code Pro, monospace",
    }}
    className="text-white h-[30px] hover:bg-white hover:text-black hover:rounded-xl pl-10 text-xl"
  >
    Document set ISO 9001:2015
  </p>
);
const text2 = (
  <p
    style={{
      paddingLeft: 24,
      fontFamily: "Source Code Pro, monospace",
      color: "white",
      size: "32px",
    }}
  >
    ISO 45001:2018 specifies requirements for an occupational health and safety
    (OH&S) management system, and gives guidance for its use, to enable
    organizations to provide safe and healthy workplaces by preventing
    work-related injury and ill health, as well as by proactively improving its
    OH&S performance.
  </p>
);
const header2 = (
  <p
    style={{
      fontFamily: "Source Code Pro, monospace",
    }}
    className="text-white h-[30px] hover:bg-white hover:text-black hover:rounded-xl pl-10 text-xl"
  >
    Implementation ISO 45001:2018
  </p>
);
const text3 = (
  <p
    style={{
      paddingLeft: 24,
      fontFamily: "Source Code Pro, monospace",
      color: "white",
      size: "32px",
    }}
  >
    ISO 14001:2018 is intended for use by an organization seeking to manage its
    environmental responsibilities in a systematic manner that contributes to
    the environmental pillar of sustainability.
  </p>
);
const header3 = (
  <p
    style={{
      fontFamily: "Source Code Pro, monospace",
    }}
    className="text-white h-[30px] hover:bg-white hover:text-black hover:rounded-xl pl-10 text-xl"
  >
    Implementation ISO 14001:2018
  </p>
);
const items = [
  {
    key: "1",
    label: header1,
    children: text1,
  },
  {
    key: "2",
    label: header2,
    children: text2,
  },
  {
    key: "3",
    label: header3,
    children: text3,
  },
];
function Service() {
  const [expandIconPosition, setExpandIconPosition] = useState("end");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };

  return (
    <div className=" px-[8%] md:grid grid-cols-10 mt-10 pt-10 bg-black flex flex-col justify-center items-center">
      <div className="col-span-1 mt-5 text-white text-xl">Our Service</div>
      <div className="md:col-span-9 mb-10 md:border-l-[10px] md:border-white md:border-t-0 border-t-[10px] border-white mb:mt-0 mt-5">
        <Collapse
          expandIconPosition={"end"}
          ghost
          items={items}
          size="large"
          defaultActiveKey={["1"]}
        />
      </div>
    </div>
  );
}

export default Service;
