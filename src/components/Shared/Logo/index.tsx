import clsx from "clsx";
import styles from "./logo.module.css";
import Image from "next/image";

export const Logo: React.FC = () => {
  return (
    <div className={clsx(`${styles.item}`)}>
      <Image src={"/images/logo1.png"} alt={"Logo da aplicação."} width={100} height={100}/>
    </div>
  );
};
