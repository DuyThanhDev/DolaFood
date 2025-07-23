import { Breadcrumb } from "antd";
import { useMemo } from "react";

// Hook lấy pathname từ window.location (thay thế usePathname của Next.js)
function usePathname() {
  if (typeof window !== "undefined") {
    return window.location.pathname;
  }
  return "/";
}

// HeaderBottom: Breadcrumb điều hướng
export default function HeaderBottom() {
  // Breadcrumb cố định cho trang liên hệ
  const breadcrumbItems = [
    {
      title: <span className="text-[#116d36] font-semibold">Trang chủ</span>,
    },
    {
      title: <span className="text-red-500 font-semibold text-lg">Liên hệ</span>,
    },
  ];

  return (
    <div className="container mx-auto py-4 px-6 bg-gray-100">
      <Breadcrumb
        items={breadcrumbItems}
        className="text-base md:text-lg"
        separator={<span className="text-gray-400"> &gt; </span>}
      />
    </div>
  );
}
