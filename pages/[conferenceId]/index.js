import Conference from "../../components/Conference/Conference";
import Layout from "../../components/Layouts/Layout/Layout";
import { resetServerContext } from "react-beautiful-dnd";

const index = ({ data }) => {
  return <Layout children={<Conference data={data} />} />;
};

const endpoint = "https://api.react-finland.fi/graphql/";

export const getServerSideProps = async (ctx) => {
  resetServerContext();
  const { conferenceId } = ctx.query;
  const QUERY = `
{
  conference(id: "${conferenceId}") {
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
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: QUERY }),
  });
  const data = await res.json();
  return {
    props: {
      data: data?.data?.conference,
    },
  };
};

export default index;
