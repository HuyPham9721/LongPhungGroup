import { Header, Footer, Breakcrumb, ModalHeader } from "../../components";
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
      <ModalHeader></ModalHeader>
    </>
  );
};
export default DefaultLayout;
