import clsx from "clsx";
import styles from "./main.module.css";
import type { ReactNode } from "react";

type TypeProps = { children: ReactNode[] };

export const MainLayout = ({ children }: TypeProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  if (childrenArray.length > 4) throw new Error("MainLayout só aceita no máximo 4 elementos filhos: header, toast, main e footer.");

  return (
    <div className={clsx(styles.layout)}>
      <header className={styles.header}>{childrenArray[0]}</header>
      <div className={styles.toast}>{childrenArray[1]}</div>
      <main className={styles.main}>{childrenArray[2]}</main>
      <footer className={styles.footer}>{childrenArray[3]}</footer>
    </div>
  );
};
