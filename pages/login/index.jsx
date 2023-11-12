import { DefaultLayout } from "../../layouts";
import { useState } from "react";
const Login = (props) => {
  const [ClickHead, setClickHead] = useState(0);
  const onSubmit = () => {};
  return (
    <>
      <DefaultLayout showBreakcrumb={true} breakcrumb={props.breakcrumb}>
        <section className="lpg-s-register">
          <div className="lpg-container">
            <div className="lpg-b-header">
              <button
                type="button"
                className="lpg-btn-active lpg-btn-login"
                onClick={() => {
                  setClickHead(0);
                }}
              >
                Đăng Nhập
              </button>
            </div>
            <div className="lpg-b-body"></div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};
export default Login;
export async function getServerSideProps() {
  return {
    props: {
      breakcrumb: {
        title: "Đăng Nhập",
        link: "/login",
      },
    },
  };
}
