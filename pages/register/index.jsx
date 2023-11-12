import { DefaultLayout } from "../../layouts";
import { useContext, useState } from "react";
import { DataContext } from "../../stores/GlobalState";
import { postData } from "../../utils/fetchData";
import { useRouter } from "next/router";
import valid from "../../utils/validForm";
const Register = (props) => {
  const initialState = {
    fullName: "",
    IDVNL: "",
    passWord: "",
    cfPassWord: "",
    phoneNumber: "",
    email: "",
  };

  const [userData, setUserData] = useState(initialState);
  const { fullName, IDVNL, passWord, cfPassWord, phoneNumber, email } =
    userData;
  const { state, dispatch } = useContext(DataContext);
  const router = useRouter();
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errMsg = valid(
      fullName,
      IDVNL,
      passWord,
      cfPassWord,
      phoneNumber,
      email
    );
    if (errMsg) return dispatch({ type: "NOFITY", payload: { error: errMsg } });
    dispatch({ type: "NOFITY", payload: { loading: true } });
    const res = await postData("auth/register", userData);
    if (res.err)
      return dispatch({ type: "NOFITY", payload: { error: res.err } });
    return dispatch({ type: "NOFITY", payload: { success: res.msg } });
  };
  return (
    <>
      <DefaultLayout showBreakcrumb={true} breakcrumb={props.breakcrumb}>
        <section className="lpg-s-register">
          <div className="lpg-container">
            <div className="lpg-b-header">
              <button type="button" className="lpg-btn-active lpg-btn-login">
                Đăng Ký
              </button>
            </div>
            <div className="lpg-b-body">
              <form onSubmit={handleSubmit}>
                <div className="lpg-form-group">
                  <label>Họ Và Tên:</label>
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="lpg-form-group">
                  <label>ID VNL:</label>
                  <input
                    type="text"
                    name="IDVNL"
                    value={IDVNL}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="lpg-form-group">
                  {" "}
                  <label>Số Điện Thoại:</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="lpg-form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="lpg-form-group">
                  <label>Password:</label>
                  <input
                    type="text"
                    name="passWord"
                    value={passWord}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="lpg-form-group">
                  <label>confirm Password:</label>
                  <input
                    type="text"
                    name="cfPassWord"
                    value={cfPassWord}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="lpg-form-group">
                  <button type="submit" className="lpg-btn-submit">
                    Đăng Ký
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      breakcrumb: {
        title: "Đăng Ký",
        link: "/register",
      },
    },
  };
}
export default Register;
