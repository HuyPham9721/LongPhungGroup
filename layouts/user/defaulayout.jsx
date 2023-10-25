import { Header, Footer, Breakcrumb } from "../../components";
const DefaultLayout = ({ children, showBreakcrumb = false }) => {
  return (
    <>
      <Header></Header>

      {showBreakcrumb && <Breakcrumb></Breakcrumb>}
      {children}
      <Footer></Footer>
    </>
  );
};
export default DefaultLayout;
