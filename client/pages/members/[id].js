import Layout from "@components/Layout";
import { useRouter } from "next/router";

export default function MemberDetail() {
  const router = useRouter();
  return (
    <Layout>
      <h1>Member Details</h1>
      <p>{router.query.id}</p>
    </Layout>
  );
}
