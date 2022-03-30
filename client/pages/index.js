import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/members">Members</Link>
      <Link href="/events">Events</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
