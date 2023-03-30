import clsx from "clsx";
import styles from "@/styles/ui/footer.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function _({ children, className }: Props) {
  const style = clsx(styles.main, className && className);

  return <footer className={style}>{children}</footer>;
}
