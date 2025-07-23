import { useState, useEffect } from "react";
import { Input, Badge, Button, Dropdown, Menu } from "antd";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, HeartOutlined, LoginOutlined, UserAddOutlined } from "@ant-design/icons";

// HeaderMain: Thanh header chính với logo, tìm kiếm, thông tin giao hàng, tài khoản, giỏ hàng
export default function HeaderMain() {
  const searchSuggestions = [
    "Bạn muốn tìm gì?",
    "Pizza",
    "Salad",
    "Mì Ý",
    "Thức uống",
    "Khai vị",
  ];

  const [currentSuggestion, setCurrentSuggestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSuggestion((prevIndex) => (prevIndex + 1) % searchSuggestions.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Menu popup cho account
  const accountMenu = (
    <Menu className="min-w-[180px]">
      <Menu.Item key="login" icon={<LoginOutlined className="text-[#116d36]" />}>
        <a href="/login" className="text-[#116d36] font-semibold">Đăng nhập</a>
      </Menu.Item>
      <Menu.Item key="register" icon={<UserAddOutlined className="text-[#116d36]" />}>
        <a href="/register" className="text-[#116d36] font-semibold">Đăng ký</a>
      </Menu.Item>
      <Menu.Item key="wishlist" icon={<HeartOutlined className="text-[#116d36]" />}>
        <a href="/wishlist" className="text-[#116d36] font-semibold">Danh sách yêu thích <Badge count={3} style={{ backgroundColor: '#116d36' }} /></a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <a href="/">
          <img src="https://bizweb.dktcdn.net/100/510/571/themes/941527/assets/logo.png?1727255430829" alt="Dola Food" width={200} height={60} className="object-contain" />
        </a>
      </div>
      {/* Search */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <Input placeholder={searchSuggestions[currentSuggestion]} suffix={<SearchOutlined />} className="rounded-md text-base" />
      </div>
      {/* Delivery, Account, Cart */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="flex items-center">
          <div className="mr-2">
            <img src="https://bizweb.dktcdn.net/100/510/571/themes/941527/assets/delivery.png?1727255430829" alt="Giao hàng" width={40} height={40} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-[#116d36]">Giao hàng tận nơi</span>
            <span className="text-red-500 font-bold text-lg">1900 6750</span>
          </div>
        </div>
        <Dropdown overlay={accountMenu} placement="bottomRight" trigger={["hover"]} arrow>
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full cursor-pointer hover:ring-2 hover:ring-[#116d36] transition">
            <UserOutlined style={{ fontSize: "20px", color: "#116d36" }} />
          </div>
        </Dropdown>
        <a href="/cart">
          <Badge count={0} showZero>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            </div>
          </Badge>
        </a>
        <div className="hidden md:flex space-x-2">
          <Button type="primary" danger className="rounded-full px-5 font-semibold bg-red-600 text-white border-0 hover:bg-[#116d36] hover:text-white transition">
            Đặt món online
          </Button>
          <Button danger className="rounded-full px-5 font-semibold bg-red-600 text-white border-0 hover:bg-[#116d36] hover:text-white transition">
            Đặt bàn
          </Button>
        </div>
      </div>
    </div>
  );
}
