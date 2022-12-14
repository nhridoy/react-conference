import Conference from "../../components/Conference/Conference";
import Layout from "../../components/Layouts/Layout/Layout";
import { resetServerContext } from "react-beautiful-dnd";
import client from "../../utils/apollo-client";
import { gql } from "@apollo/client";

const index = ({ data }) => {
  return (
    <Layout title={data?.name}>
      <Conference data={data} />
    </Layout>
  );
};

const endpoint = "https://api.react-finland.fi/graphql/";

export const getServerSideProps = async (ctx) => {
  const { conferenceId } = ctx.query;
  const QUERY = gql`
{
  conference(id: "${conferenceId}") {
    name
    organizers {
      about
      company
      firstName
      lastName
      name
      image {
        url
      }
    }
    speakers {
      about
      company
      firstName
      lastName
      name
      image {
        url
      }
    }
    locations {
      name
      about
      image {
        url
      }
      city
      country{
        name
      }
      address
    }
    schedules {
      day
      location {
        name
        about
        city
        address
      }
      description
    }
    sponsors {
      about
      company
      firstName
      lastName
      name
      image {
        url
      }
    }
  }
}
`;
  const { data } = await client.query({ query: QUERY });
  resetServerContext();
  return {
    props: {
      data: data?.conference,
    },
  };
};

export default index;
