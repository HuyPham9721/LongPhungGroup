import { Form, Field } from "react-final-form";
import { DefaultLayout } from "../../layouts";
import { useState } from "react";
const Register = () => {
  const [ClickHead, setClickHead] = useState(0);
  const onSubmit = () => {};
  return (
    <>
      <DefaultLayout>
        <section className="lpg-s-register">
          <div className="lpg-container">
            <div className="lpg-b-header">
              {(() => {
                if (ClickHead === 0) {
                  return (
                    <button
                      type="button"
                      className="lpg-btn-active"
                      onClick={() => {
                        setClickHead(0);
                      }}
                    >
                      Đăng Ký
                    </button>
                  );
                } else {
                  return (
                    <button
                      type="button"
                      onClick={() => {
                        setClickHead(0);
                      }}
                    >
                      Đăng Ký
                    </button>
                  );
                }
              })()}
              {(() => {
                if (ClickHead === 1) {
                  return (
                    <button
                      type="button"
                      className="lpg-btn-active"
                      onClick={() => {
                        setClickHead(1);
                      }}
                    >
                      Đăng Ký Khóa Học
                    </button>
                  );
                } else {
                  return (
                    <button
                      type="button"
                      onClick={() => {
                        setClickHead(1);
                      }}
                    >
                      Đăng Ký Khóa Học
                    </button>
                  );
                }
              })()}
            </div>
            <div className="lpg-b-body">
              {(() => {
                if (ClickHead === 0) {
                  return (
                    <Form
                      onSubmit={onSubmit}
                      initialValues={{ firstname: "", lastname: "" }}
                      render={({ handleSubmit, form, values }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="lpg-form-group">
                            <label>First Name</label>
                            <Field
                              name="firstName"
                              component="input"
                              type="text"
                              placeholder="First Name"
                            />
                          </div>
                          <div className="lpg-form-group">
                            <label>Last Name</label>
                            <Field
                              name="lastName"
                              component="input"
                              type="text"
                              placeholder="Last Name"
                            />
                          </div>

                          <div className="buttons lpg-form-group">
                            <button type="submit" className="lpg-btn-submit">
                              Đăng Ký
                            </button>
                          </div>
                        </form>
                      )}
                    />
                  );
                } else {
                  return (
                    <Form
                      onSubmit={onSubmit}
                      initialValues={{ firstname: "", lastname: "" }}
                      render={({ handleSubmit, form, values }) => (
                        <form onSubmit={handleSubmit}>
                          <div className="lpg-form-group">
                            <label>First Name 1</label>
                            <Field
                              name="firstName 1"
                              component="input"
                              type="text"
                              placeholder="First Name 1"
                            />
                          </div>
                          <div className="lpg-form-group">
                            <label>Last Name 1</label>
                            <Field
                              name="lastName 1"
                              component="input"
                              type="text"
                              placeholder="Last Name 1"
                            />
                          </div>

                          <div className="buttons lpg-form-group">
                            <button type="submit" className="lpg-btn-submit">
                              Đăng Ký
                            </button>
                          </div>
                        </form>
                      )}
                    />
                  );
                }
              })()}
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};
export default Register;
