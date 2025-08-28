import clsx from "clsx";
import styles from "./styles.module.css";

type TypeProps = { children: React.ReactNode[] };
export const Content: React.FC<TypeProps> = ({ children }) => {
  return <section className={clsx(`${styles.content}`)}>{children}</section>;
};
