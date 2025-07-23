import type React from "react";
import HeaderTop from "../../components/header-top";
import HeaderMain from "../../components/header-main";
import SidebarMenu from "../../components/sidebar-menu";
import HeaderBottom from "../../components/header-bottom";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderTop />
      <HeaderMain />
      <SidebarMenu />
      <HeaderBottom />
      {/* ...nội dung trang liên hệ ở đây nếu có... */}
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
