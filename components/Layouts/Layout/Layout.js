import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <div className="h-screen bg-gradient-to-b from-pink-100 ">
      <Header />
      <main className="container mx-auto px-6">{children}</main>
    </div>
  );
};

export default Layout;
