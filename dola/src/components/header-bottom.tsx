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
  const pathname = usePathname();

  const breadcrumbItems = useMemo(() => {
    const paths = pathname.split("/").filter(Boolean);
    // Luôn bắt đầu với Trang chủ
    const items = [
      {
        title: <a href="/">Trang chủ</a>,
      },
    ];
    // Thêm các path tiếp theo
    if (paths.length > 0) {
      let currentPath = "";
      paths.forEach((path, index) => {
        currentPath += `/${path}`;
        const formattedPath = path
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        if (index === paths.length - 1) {
          items.push({ title: <span>{formattedPath}</span> });
        } else {
          items.push({ title: <a href={currentPath}>{formattedPath}</a> });
        }
      });
    }
    return items;
  }, [pathname]);

  return (
    <div className="container mx-auto py-4 px-4 bg-gray-100">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}
