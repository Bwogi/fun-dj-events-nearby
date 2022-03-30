import Layout from "@components/Layout";
import Link from "next/link";
import styles from "@styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";
import { FcExpired } from "react-icons/fc";

export default function NotFoundPage() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <h1>
          <FcExpired /> 404
        </h1>
        <h4>Oops! Wrong turn!</h4>
        <Link href="/">Go back to Home</Link>
      </div>
    </Layout>
  );
}
