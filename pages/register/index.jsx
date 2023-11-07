import { Form, Field } from "react-final-form";
import { DefaultLayout } from "../../layouts";
import { useState } from "react";
const Register = () => {
  const onSubmit = () => {};
  return (
    <>
      <DefaultLayout showBreakcrumb="true">
        <section className="lpg-s-register">
          <div className="lpg-container">
            <div className="lpg-b-header">
              <button type="button" className="lpg-btn-active lpg-btn-login">
                Đăng Ký
              </button>
            </div>
            <div className="lpg-b-body">
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
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};
export default Register;
