import { useEffect, useState } from "react";
import Typography from "antd/lib/typography";

const { Text } = Typography;

export default function HeaderTop() {
  const messages = [
    "Chào mừng bạn đến với Dola Food!",
    "Đặt ngay món ăn yêu thích của bạn",
    "Nhiều ưu đãi dành cho bạn",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-green-800 text-white py-2 text-center">
      <Text className="text-white font-medium">{messages[currentMessageIndex]}</Text>
    </div>
  );
}
