import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Scheduler from "../components/Scheduler/Scheduler";
import Header from "../components/Layouts/header/Header";
import Layout from "../components/Layouts/Layout/Layout";
import axios from "axios";

export default function Home({ conferences }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        children={
          <>
            <Hero />
            <Scheduler conferences={conferences} />
          </>
        }
      />
    </div>
  );
}
const endpoint = "https://api.react-finland.fi/graphql/";
const FILMS_QUERY = `
{
  conferences {
    id
    name
    year
    startDate
    locations {
      city
    }
  }
}
`;

export const getServerSideProps = async (ctx) => {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: FILMS_QUERY }),
  });
  const data = await res.json();
  return {
    props: {
      conferences: data?.data?.conferences,
    },
  };
};
