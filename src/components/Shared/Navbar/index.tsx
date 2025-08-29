import clsx from "clsx";
import styles from "./navbar.module.css";
import Link from "next/link";

type NavBarProps = {
  isMobile?: boolean;
  onLinkClick?: () => void;
};

export const NavBar: React.FC<NavBarProps> = ({ isMobile, onLinkClick }) => {
  const items = [{ label: "About", href: "/about" }];

  return (
    <ul className={clsx(styles.navLinks, isMobile && styles.mobileNavLinks)}>
      {items.map((item) => (
        <li key={item.href} className={styles.navItem}>
          <Link href={item.href} onClick={() => onLinkClick?.()}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
