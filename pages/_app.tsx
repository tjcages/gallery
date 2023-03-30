import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styles from "@/styles/_main.module.scss";
import { ogg } from "@/public/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ogg.className} ${styles.main}`}>
      <Component {...pageProps} />
    </main>
  );
}
