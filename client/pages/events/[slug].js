import { useRouter } from "next/Router";

export default function EventDetail() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Event Detail</h1>
      <p>{router.query.slug}</p>
      <p>{router.asPath}</p>
      <p>{router.pathname}</p>
      <p>{router.route}</p>
    </div>
  );
}
