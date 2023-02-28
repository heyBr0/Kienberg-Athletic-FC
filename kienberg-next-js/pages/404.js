import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  const [count, setCount] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      //router.go(-1)
      router.push("/");
    }, 3000);
  }, []);

  // timer
  useEffect(() => {
    if (count === 0) {
      return;
    }
    setTimeout(() => {
      setCount(count - 1);
    }, 1000);
  }, [count]);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to the
        <Link href="/"> Homepage </Link> in ...{count}
      </p>
    </div>
  );
};

export default NotFound;
