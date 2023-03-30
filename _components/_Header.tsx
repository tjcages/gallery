import Image from "next/image";
import styles from "@/styles/components/header.module.scss";
import { Header } from "@/_ui";

export default function _() {
  return (
    <Header className={styles.main}>
      <Image src="/common/logo.png" alt="logo" width={100} height={50} />
      <h5>[ Gallery ]</h5>
    </Header>
  );
}
