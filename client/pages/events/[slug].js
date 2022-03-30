import { useRouter } from "next/Router";
import Layout from "@components/Layout";

export default function EventDetail() {
  const router = useRouter();
  //   console.log(router);
  return (
    <Layout>
      <h1>Event Detail</h1>
      <p>{router.query.slug}</p>
      {/* <p>{router.asPath}</p>
      <p>{router.pathname}</p>
      <p>{router.route}</p> */}
    </Layout>
  );
}
