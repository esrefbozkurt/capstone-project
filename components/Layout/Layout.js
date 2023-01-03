import Nav from "../Footer/Nav";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
};

export default Layout;
