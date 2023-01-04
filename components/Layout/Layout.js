import Nav from "../Footer/Nav";
import Header from "../Header/Header";
import { StyledLayout } from "./StyledLayout";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
      <Nav />
    </StyledLayout>
  );
};

export default Layout;
