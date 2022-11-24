import Conference from "../../components/Conference/Conference";
import Layout from "../../components/Layouts/Layout/Layout";

const index = ({ data }) => {
  return <Layout children={<Conference data={data} />} />;
};

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default index;
