"use client";
import Link from "next/link";
import styles from "./aside.module.css";
import { useState } from "react";
import { AlignJustifyIcon, BadgeQuestionMarkIcon, ChartNoAxesCombinedIcon, HouseIcon, LockIcon, LogOutIcon, MessageCircleIcon, SettingsIcon, UserIcon} from "lucide-react";

export const MenuAside: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const navItems = [
    { icon: <ChartNoAxesCombinedIcon size={28} />, title: "Market Analysis" },
    { icon: <HouseIcon size={28} />, title: "Dashboard" },
    { icon: <UserIcon size={28} />, title: "Customers" },
    { icon: <MessageCircleIcon size={28} />, title: "Messages" },
    { icon: <BadgeQuestionMarkIcon size={28} />, title: "Help" },
    { icon: <SettingsIcon size={28} />, title: "Settings" },
    { icon: <LockIcon size={28} />, title: "Password" },
    { icon: <LogOutIcon size={28} />, title: "Sign Out" },
  ];
  
  const handleConvertToSnakeCase = (str: string) => str.trim().toLowerCase().replace(/[\s\-]+/g, "_");

  return (
    <div className={`${styles.navigation} ${menuActive ? styles.active : ""}`}>
      <button type="button" className={styles.toggle} onClick={() => setMenuActive(!menuActive)}>
        <AlignJustifyIcon size={28} />
      </button>
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className={hoveredIndex === index ? styles.hovered : ""} onMouseOver={() => setHoveredIndex(index)}>
            <Link href={handleConvertToSnakeCase(item.title)}>
              <span className={styles.icon}>{item.icon}</span>
              <span className={styles.title}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
