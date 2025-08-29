"use client";
import styles from "./manager.module.css";
import { useState } from "react";
import { AlignJustifyIcon, AppleIcon, BadgeQuestionMarkIcon, BanknoteIcon, EyeIcon, HouseIcon, LockIcon, LogOutIcon, MessageCircleIcon, MessageCircleMoreIcon, SearchIcon, SettingsIcon, ShoppingCartIcon, UserIcon} from "lucide-react";
import Image from "next/image";

export default function Manager() {
  const [menuActive, setMenuActive] = useState(false); // controla se o menu está ativo
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // controla qual item está "hovered"

  const navItems = [
    { icon: <AppleIcon size={24} />, title: "Brand Name" },
    { icon: <HouseIcon size={24} />, title: "Dashboard" },
    { icon: <UserIcon size={24} />, title: "Customers" },
    { icon: <MessageCircleIcon size={24} />, title: "Messages" },
    { icon: <BadgeQuestionMarkIcon size={24} />, title: "Help" },
    { icon: <SettingsIcon size={24} />, title: "Settings" },
    { icon: <LockIcon size={24} />, title: "Password" },
    { icon: <LogOutIcon size={24} />, title: "Sign Out" },
  ];

  return (
    <div className={styles.container}>
      {/* ================== Navigation ================== */}
       <div className={`navigation ${menuActive ? "active" : ""}`}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}  className={hoveredIndex === index ? "hovered" : ""} onMouseOver={() => setHoveredIndex(index)}>
              <a href="#">
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.title}>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ================== Main ================== */}
       <div className={`main ${menuActive ? "active" : ""}`}>
        <div className={styles.topbar}>
          <div className="toggle" onClick={() => setMenuActive(!menuActive)}>
            <AlignJustifyIcon size={24} />
          </div>

          <div className={styles.search}>
            <label>
              <input type="text" placeholder="Search here" />
              <SearchIcon size={24} />
            </label>
          </div>

          <div className={styles.user}>
            <Image src="/assets/imgs/customer01.jpg" alt="user" width={40} height={40} />
          </div>
        </div>

        {/* ================== Cards ================== */}
        <div className={styles.cardBox}>
          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>1,504</div>
              <div className={styles.cardName}>Daily Views</div>
            </div>
            <div className={styles.iconBx}>
              <EyeIcon size={24} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>80</div>
              <div className={styles.cardName}>Sales</div>
            </div>
            <div className={styles.iconBx}>
              <ShoppingCartIcon size={24} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>284</div>
              <div className={styles.cardName}>Comments</div>
            </div>
            <div className={styles.iconBx}>
              <MessageCircleMoreIcon size={24} />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <div className={styles.numbers}>$7,842</div>
              <div className={styles.cardName}>Earning</div>
            </div>
            <div className={styles.iconBx}>
              <BanknoteIcon size={24} />
            </div>
          </div>
        </div>

        {/* aqui continua com sua tabela e clientes */}
        <div className={styles.recentCustomers}>
          <div className={styles.cardHeader}>
            <h2>Recent Customers</h2>
          </div>

          <table>
            <tr>
              <td width="60px">
                <div className={styles.imgBx}>
                  <Image src="assets/imgs/customer02.jpg" fill alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className={styles.imgBx}>
                  <Image src="assets/imgs/customer01.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className={styles.imgBx}>
                  <Image src="assets/imgs/customer02.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className={styles.imgBx}>
                  <Image src="assets/imgs/customer01.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className={styles.imgBx}>
                  <Image src="assets/imgs/customer02.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className={styles.imgBx}>
                  <Image src="assets/imgs/customer01.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className={styles.imgBx}>
                  <Image src="assets/imgs/customer01.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  David <br /> <span>Italy</span>
                </h4>
              </td>
            </tr>

            <tr>
              <td width="60px">
                <div className={styles.imgBx}>
                  <Image src="assets/imgs/customer02.jpg" alt="" />
                </div>
              </td>
              <td>
                <h4>
                  Amit <br /> <span>India</span>
                </h4>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
