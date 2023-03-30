import Image from "next/image";
import styles from "@/styles/components/item.module.scss";

interface Props {
  item: {
    id: number;
    name: string;
    description: string;
    image?: string;
  };
}

export default function _({ item }: Props) {
  return (
    <div className={styles.main}>
      {item.image && (
        <Image src={item.image} alt={item.name} width={200} height={200} />
      )}
      <div className={styles.info}>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
