import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
// import { Styled404 } from "../components/NotFound/Styled404";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Hoppla</h1>
      <h2>This page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
