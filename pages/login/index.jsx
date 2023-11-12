import { DefaultLayout } from "../../layouts";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../stores/GlobalState";
import { useRouter } from "next/router";
import { postData } from "../../utils/fetchData";
const Login = (props) => {
  const initialState = {
    IDVNL: "",
    passWord: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { IDVNL, passWord } = userData;
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;
  const Router = useRouter();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOFITY", payload: { loading: true } });
    const res = await postData("auth/login", userData);

    if (res.err)
      return dispatch({ type: "NOFITY", payload: { error: res.err } });
    dispatch({ type: "NOFITY", payload: { success: res.msg } });
    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookies.set("refreshToken", res.refresh_token, {
      path: "api/auth/accessToken",
      expires: 7,
    });
    localStorage.setItem("firstLogin", true);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) Router.push("/");
  }, [auth]);

  return (
    <>
      <DefaultLayout showBreakcrumb={true} breakcrumb={props.breakcrumb}>
        <section className="lpg-s-register">
          <div className="lpg-container">
            <div className="lpg-b-header">
              <button type="button" className="lpg-btn-active lpg-btn-login">
                Đăng Nhập
              </button>
            </div>
            <div className="lpg-b-body">
              <form onSubmit={handleSubmit}>
                <div className="lpg-form-group">
                  <label htmlFor="">ID</label>
                  <input
                    type="text"
                    name="IDVNL"
                    value={IDVNL}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="lpg-form-group">
                  <label htmlFor="">Password</label>
                  <input
                    type="text"
                    name="passWord"
                    value={passWord}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="lpg-form-group">
                  <button className="lpg-btn-submit">Đăng Nhập</button>
                </div>
              </form>
            </div>
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
