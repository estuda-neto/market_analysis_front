import Link from "next/link";

type NavBarProps = { isMobile?: boolean; onLinkClick?: () => void;};

export const NavBar: React.FC<NavBarProps> = ({ isMobile, onLinkClick }) => {
  const items = [{ label: "About", href: "/about" }];

  return (
    <ul className={isMobile? "flex flex-col gap-4": "flex items-center gap-6"}>
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} onClick={() => onLinkClick?.()} className="font-medium px-2 py-1 rounded-md hover:bg-black/5 transition">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
