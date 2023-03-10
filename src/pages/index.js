import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Login from "@/components/form/Login";
import styled from "styled-components";
import Text from "@/components/Typography/Text";
export default function Home() {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Div>
        <Text variant="h2">hmm, How did you get here?</Text>
      </Div>
    </>
  );
}
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
