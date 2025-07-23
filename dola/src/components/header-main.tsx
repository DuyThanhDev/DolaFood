import { useState, useEffect } from "react";
import { Badge, Dropdown, Menu } from "antd";
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
    <div className="bg-white w-full">
      <div className="container mx-auto px-32">
        <div className="flex items-center justify-between w-full py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center" style={{ minWidth: 180 }}>
            <a href="/">
              <img src="https://bizweb.dktcdn.net/100/510/571/themes/941527/assets/logo.png?1727255430829" alt="Dola Food" width={172} height={50} className="object-contain" />
            </a>
          </div>
          {/* Search */}
          <div className="flex-1 flex justify-center px-4">
            <form className="w-full max-w-lg">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder={searchSuggestions[currentSuggestion]}
                  className="h-12 w-full rounded-l-2xl bg-[#e1e1e1] text-base px-4 focus:outline-none placeholder-gray-500"
                  style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                />
                <button
                  type="submit"
                  className="h-12 w-12 flex items-center justify-center rounded-r-2xl bg-red-600"
                  style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                  tabIndex={-1}
                >
                  <SearchOutlined style={{ fontSize: 22, color: '#fff' }} />
                </button>
              </div>
            </form>
          </div>
          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Giao hàng tận nơi */}
            <div className="flex items-center gap-2">
              <img src="https://bizweb.dktcdn.net/100/510/571/themes/941527/assets/delivery.png?1727255430829" alt="Giao hàng" width={32} height={32} className="object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="text-base font-bold text-black">Giao hàng tận nơi</span>
                <span className="text-red-500 font-bold text-lg">1900 6750</span>
              </div>
            </div>
            {/* Account */}
            <Dropdown overlay={accountMenu} placement="bottomRight" trigger={["hover"]} arrow>
              <div className="flex items-center justify-center w-11 h-11 bg-gray-200 rounded-full cursor-pointer hover:ring-2 hover:ring-[#116d36] transition">
                <UserOutlined style={{ fontSize: "22px", color: "#116d36" }} />
              </div>
            </Dropdown>
            {/* Cart */}
            <a href="/cart">
              <Badge count={0} showZero>
                <div className="flex items-center justify-center w-11 h-11 bg-gray-200 rounded-full">
                  <ShoppingCartOutlined style={{ fontSize: "22px", color: "#116d36" }} />
                </div>
              </Badge>
            </a>
            {/* Buttons */}
            <a href="/collections/all">
              <button
                className="rounded-2xl px-7 font-semibold border-none shadow-sm transition-colors duration-200 bg-red-600 text-white h-12 hover:bg-[#116d36]"
                style={{ borderRadius: '18px', border: 'none' }}
                type="button"
              >
                Đặt món online
              </button>
            </a>
            <a href="/dat-ban">
              <button
                className="rounded-2xl px-7 font-semibold border-none shadow-sm transition-colors duration-200 bg-red-600 text-white h-12 hover:bg-[#116d36]"
                style={{ borderRadius: '18px', border: 'none' }}
                type="button"
              >
                Đặt bàn
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
