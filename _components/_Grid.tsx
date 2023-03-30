import styles from "@/styles/components/grid.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function _({ children }: Props) {
  return <div className={styles.main}>{children}</div>;
}
