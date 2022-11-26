import Header from "../header/Header";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen bg-gradient-to-b from-pink-100 ">
        <Header />
        <main className="container mx-auto px-6">{children}</main>
      </div>
    </>
  );
};

export default Layout;
