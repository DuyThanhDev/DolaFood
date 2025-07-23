import { useState, useEffect } from "react";
import { Input, Badge, Button } from "antd";
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

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

  return (
    <div className="container mx-auto py-4 px-4 flex flex-col md:flex-row items-center justify-between">
      {/* Logo */}
      <div className="mb-4 md:mb-0">
        <a href="/">
          <img src="https://bizweb.dktcdn.net/100/510/571/themes/941527/assets/logo.png?1727255430829" alt="Dola Food" width={200} height={60} className="object-contain" />
        </a>
      </div>
      {/* Search */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <Input placeholder={searchSuggestions[currentSuggestion]} suffix={<SearchOutlined />} className="rounded-md" />
      </div>
      {/* Delivery, Account, Cart */}
      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="flex items-center">
          <div className="mr-2">
            <img src="https://bizweb.dktcdn.net/100/510/571/themes/941527/assets/delivery.png?1727255430829" alt="Giao hàng" width={40} height={40} className="object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm">Giao hàng tận nơi</span>
            <span className="text-red-500 font-bold">1900 6750</span>
          </div>
        </div>
        <a href="/account">
          <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
            <UserOutlined style={{ fontSize: "20px" }} />
          </div>
        </a>
        <a href="/cart">
          <Badge count={0} showZero>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
              <ShoppingCartOutlined style={{ fontSize: "20px" }} />
            </div>
          </Badge>
        </a>
        <div className="hidden md:flex space-x-2">
          <Button type="primary" danger className="rounded-md">
            Đặt món online
          </Button>
          <Button danger className="rounded-md">
            Đặt bàn
          </Button>
        </div>
      </div>
    </div>
  );
}
