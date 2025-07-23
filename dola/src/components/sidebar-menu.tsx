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
    <div className="bg-green-800 text-white">
      <div className="container mx-auto">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="bg-green-800 text-white border-0"
          style={{
            color: "white",
            backgroundColor: "#166534", // Tailwind green-800
          }}
        >
          <Menu.Item key="home">
            <a href="/">Trang chủ</a>
          </Menu.Item>
          <Menu.Item key="about">
            <a href="/gioi-thieu">Giới thiệu</a>
          </Menu.Item>
          <SubMenu
            key="products"
            title={
              <span className="flex items-center">
                Sản phẩm <DownOutlined className="ml-1" />
              </span>
            }
          >
            <Menu.Item key="pizza">
              <a href="/san-pham/pizza">Pizza</a>
            </Menu.Item>
            <Menu.Item key="khai-vi">
              <a href="/san-pham/khai-vi">Khai vị</a>
            </Menu.Item>
            <Menu.Item key="mi-y">
              <a href="/san-pham/mi-y">Mì Ý</a>
            </Menu.Item>
            <Menu.Item key="salad">
              <a href="/san-pham/salad">Salad</a>
            </Menu.Item>
            <Menu.Item key="thuc-uong">
              <a href="/san-pham/thuc-uong">Thức uống</a>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="news">
            <a href="/tin-tuc">Tin tức</a>
          </Menu.Item>
          <Menu.Item key="contact">
            <a href="/lien-he">Liên hệ</a>
          </Menu.Item>
          <Menu.Item key="faq">
            <a href="/cau-hoi-thuong-gap">Câu hỏi thường gặp</a>
          </Menu.Item>
          <Menu.Item key="stores">
            <a href="/he-thong-cua-hang">Hệ thống cửa hàng</a>
          </Menu.Item>
          <Menu.Item key="booking">
            <a href="/dat-ban">Đặt bàn</a>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}
