import { Header, Footer, Breakcrumb } from "../../components";
const DefaultLayout = ({
  children,
  breakcrumb = {},
  showBreakcrumb = false,
}) => {
  return (
    <>
      <Header></Header>
      {showBreakcrumb && <Breakcrumb breakcrumb={breakcrumb}></Breakcrumb>}
      {children}
      <Footer></Footer>
    </>
  );
};
export default DefaultLayout;
