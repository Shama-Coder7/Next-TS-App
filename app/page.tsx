import Link from "next/link";
import ProductCart from "./components/ProductCart";

export default function Home() {
  return (
    <main className="p-24">
      Hello Shama
      <Link href="/users"><div className="font-bold">Users</div></Link>
      <Link href="/users/new"><div className="font-bold">New</div></Link>
      <Link href="/newusers"><div className="font-bold">New Users</div></Link>


<ProductCart/>
    </main>
  )
}
