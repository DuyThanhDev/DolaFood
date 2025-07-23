import type React from "react";
import {
  HomeOutlined,
  BuildOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  IdcardOutlined,
  EnvironmentOutlined,
  UserOutlined,
  EditOutlined,
} from "@ant-design/icons";

import HeaderTop from "../../components/header-top";
import HeaderMain from "../../components/header-main";
import SidebarMenu from "../../components/sidebar-menu";
import HeaderBottom from "../../components/header-bottom";

const Contact: React.FC = () => {
  const scrollToMap = () => {
    const mapSection = document.getElementById("google-map-section");
    if (mapSection) {
      mapSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <HeaderTop />
      <HeaderMain />
      <SidebarMenu />
      <HeaderBottom />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
