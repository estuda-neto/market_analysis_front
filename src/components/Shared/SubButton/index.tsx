import clsx from "clsx";
import styles from "./subbuton.module.css";

type SubButtonProps = {
  label: string;
  type?: "reset" | "submit" | "button";
} & React.ComponentProps<"button">;

export const SubButton: React.FC<SubButtonProps> = ({ label, type = "submit", className, ...props}) => {
  return (
    <button type={type} className={clsx(styles.btn, className)} {...props}>
      {label}
    </button>
  );
};
