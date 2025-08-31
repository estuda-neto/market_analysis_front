"use client";

import styles from "./manager.module.css";
import { useState } from "react";
import { AlignJustifyIcon, BadgeQuestionMarkIcon, BanknoteIcon, ChartNetworkIcon, ChartNoAxesColumnIcon, ChartNoAxesCombinedIcon, EyeIcon, HouseIcon, LockIcon, LogOutIcon, MessageCircleIcon, MessageCircleMoreIcon, SearchIcon, SettingsIcon, ShoppingCartIcon, UserIcon} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Manager() {
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

  const customers = [
    { name: "David", country: "Italy" },
    { name: "Amit", country: "India" },
    { name: "David", country: "Italy" },
    { name: "Amit", country: "India" },
    { name: "David", country: "Italy" },
    { name: "Amit", country: "India" },
    { name: "David", country: "Italy" },
    { name: "Amit", country: "India" },
  ];

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <div className={`${styles.navigation} ${menuActive ? styles.active : ""}`}>
        <ul>
          {navItems.map((item, index) => (
            <li  key={index} className={hoveredIndex === index ? styles.hovered : ""}  onMouseOver={() => setHoveredIndex(index)}>
              <Link href={"#"}>
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.title}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main */}
      <div className={`${styles.main} ${menuActive ? styles.active : ""}`}>
        <div className={styles.topbar}>
          <div className={styles.toggle} onClick={() => setMenuActive(!menuActive)}>
            <AlignJustifyIcon size={28} />
          </div>

          <div className={styles.search}>
            <label>
              <input type="text" placeholder="Search here" />
              <SearchIcon size={28} className={styles.ioncon}/>
            </label>
          </div>

          <div className={styles.user}>
            <Image  src="/images/man.jpg"   width={40}  height={40}  alt="user" />
          </div>
        </div>

        {/* Cards */}
        <div className={styles.cardBox}>
          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>1,504</div>
              <div className={styles.cardName}>Daily Views</div>
            </div>
            <div className={styles.iconBx}>
              <EyeIcon size={28} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>80</div>
              <div className={styles.cardName}>Sales</div>
            </div>
            <div className={styles.iconBx}>
              <ShoppingCartIcon size={28} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>284</div>
              <div className={styles.cardName}>Comments</div>
            </div>
            <div className={styles.iconBx}>
              <MessageCircleMoreIcon size={28} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>$7,842</div>
              <div className={styles.cardName}>Earning</div>
            </div>
            <div className={styles.iconBx}>
              <BanknoteIcon size={28} />
            </div>
          </div>
        </div>

        {/* Recent Customers */}
        <div className={styles.recentCustomers}>
          <div className={styles.cardHeader}>
            <h2>Recent Customers</h2>
          </div>

          <table>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td width="60px">
                    <div className={styles.imgBx}>
                      <Image src="/images/man.jpg"  width={50} height={50} alt="" />
                    </div>
                  </td>
                  <td>
                    <h4>
                      {customer.name} <br /> <span>{customer.country}</span>
                    </h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
