import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <Styled404>
      <h1>Hoppla</h1>
      <h2>This page cannot be found.</h2>
      <p>
        Go back to the <Link href="/">Home</Link>
      </p>
    </Styled404>
  );
};

export default NotFound;

const Styled404 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 20px;
  text-align: center;
  h1 {
    margin: 0.5rem 1rem;
  }
  h2 {
    margin: 0.5rem 1rem;
  }

  p {
    margin: 0.5rem 1rem;
  }

  Link {
    color: #4979ff;
    text-decoration: underline;
  }
`;
