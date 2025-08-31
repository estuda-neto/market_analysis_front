import styles from "./mainmini.module.css";

type MainMiniLayoutProps = {
  children: React.ReactNode;
};

export const MainMiniLayout: React.FC<MainMiniLayoutProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
