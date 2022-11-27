import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Scheduler from "../components/Scheduler/Scheduler";
import Header from "../components/Layouts/header/Header";
import Layout from "../components/Layouts/Layout/Layout";
import { gql } from "@apollo/client";
import client from "../utils/apollo-client";

export default function Home({ conferences }) {
  return (
    <div>
      <Layout title={"React Conference"}>
        <Hero />
      </Layout>
      <Scheduler conferences={conferences} />
    </div>
  );
}

const QUERY = gql`
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
  const { data } = await client.query({ query: QUERY });
  return {
    props: {
      conferences: data?.conferences,
    },
  };
};
