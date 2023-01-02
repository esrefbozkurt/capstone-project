import Nav from "../Footer/Nav";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Nav />
    </div>
  );
};

export default Layout;
