import { useState } from "react";
import { Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

// SidebarMenu: Menu điều hướng chính, hỗ trợ dropdown cho nhóm sản phẩm
export default function SidebarMenu() {
  const [current, setCurrent] = useState("home");

  // Xử lý chọn menu
  const onClick = (e: any) => {
    setCurrent(e.key);
  };

  return (
    <div className="bg-[#116d36] text-white">
      <div className="container mx-auto px-6">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="bg-[#116d36] text-white border-0 text-lg font-semibold"
          style={{ color: "white", backgroundColor: "#116d36" }}
        >
          <Menu.Item key="home" className="hover:border-b-2 hover:border-red-500">
            <a href="/" className="text-white">Trang chủ</a>
          </Menu.Item>
          <Menu.Item key="about" className="hover:border-b-2 hover:border-red-500">
            <a href="/gioi-thieu" className="text-white">Giới thiệu</a>
          </Menu.Item>
          <SubMenu
            key="products"
            title={
              <span className="flex items-center text-white">
                Sản phẩm <DownOutlined className="ml-1" />
              </span>
            }
            popupClassName="bg-white border border-red-500 rounded-md"
          >
            <Menu.Item key="pizza" className="hover:bg-red-100">
              <a href="/san-pham/pizza" className="text-black">Pizza</a>
            </Menu.Item>
            <Menu.Item key="khai-vi" className="hover:bg-red-100">
              <a href="/san-pham/khai-vi" className="text-black">Khai vị</a>
            </Menu.Item>
            <Menu.Item key="mi-y" className="hover:bg-red-100">
              <a href="/san-pham/mi-y" className="text-black">Mì Ý</a>
            </Menu.Item>
            <Menu.Item key="salad" className="hover:bg-red-100">
              <a href="/san-pham/salad" className="text-black">Salad</a>
            </Menu.Item>
            <Menu.Item key="thuc-uong" className="hover:bg-red-100">
              <a href="/san-pham/thuc-uong" className="text-black">Thức uống</a>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="news" className="hover:border-b-2 hover:border-red-500">
            <a href="/tin-tuc" className="text-white">Tin tức</a>
          </Menu.Item>
          <Menu.Item key="contact" className="hover:border-b-2 hover:border-red-500">
            <a href="/lien-he" className="text-white">Liên hệ</a>
          </Menu.Item>
          <Menu.Item key="faq" className="hover:border-b-2 hover:border-red-500">
            <a href="/cau-hoi-thuong-gap" className="text-white">Câu hỏi thường gặp</a>
          </Menu.Item>
          <Menu.Item key="stores" className="hover:border-b-2 hover:border-red-500">
            <a href="/he-thong-cua-hang" className="text-white">Hệ thống cửa hàng</a>
          </Menu.Item>
          <Menu.Item key="booking" className="hover:border-b-2 hover:border-red-500">
            <a href="/dat-ban" className="text-white">Đặt bàn</a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
