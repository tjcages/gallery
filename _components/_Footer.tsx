import Image from "next/image";
import styles from "@/styles/components/footer.module.scss";
import { Footer } from "@/_ui";

export default function _() {
  return (
    <Footer className={styles.main}>
      <Image src="/common/logo.png" alt="logo" width={100} height={50} />
      <h5>[ Gallery ]</h5>
    </Footer>
  );
}
