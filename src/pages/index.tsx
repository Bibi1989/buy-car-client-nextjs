import Link from "next/link";
import Nav from "../components/Nav";

function IndexPage() {
  return (
    <div>
      <Link href='/details'>
        <a>Go To Details</a>
      </Link>
      <br />
    </div>
  );
}

export default IndexPage;
