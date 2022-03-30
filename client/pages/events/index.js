import Link from "next/link";
import Layout from "../../components/Layout";

export default function EventsPage() {
  return (
    <Layout title="The Events">
      <h1>Events Page</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
}
