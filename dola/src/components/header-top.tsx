import { useEffect, useState } from "react";

export default function HeaderTop() {
  const messages = [
    "Đặt ngay món ăn yêu thích của bạn",
    "Nhiều ưu đãi dành cho bạn",
    "Chào mừng bạn đến với Dola Food!",
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#116d36] text-white py-1 px-6 text-center">
      <span className="text-white text-base md:text-lg tracking-wide">{messages[currentMessageIndex]}</span>
    </div>
  );
}
