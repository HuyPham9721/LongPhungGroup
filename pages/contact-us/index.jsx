import { DefaultLayout } from "../../layouts";
import { Form, Field } from "react-final-form";
import { useState } from "react";
const ContactUs = () => {
  const onSubmit = () => {};
  return (
    <>
      <DefaultLayout showBreakcrumb="true">
        <section className="lpg-s-contact-us">
          <div className="lpg-container">
            <div className="lpg-contact-info-item">
              <div className="lpg-b-info-item">
                <i className="fa-regular fa-timer"></i>
                <div className="lpg-b-if4">
                  <span>
                    <h2>Open House</h2>
                  </span>
                  <span>Mon – Fri : 8:30 – 18:00 </span>
                  <span>Sat – Sun : 9:00 – 17:00</span>
                </div>
              </div>
              <div className="lpg-b-info-item">
                <i className="fa-regular fa-phone-volume"></i>
                <div className="lpg-b-if4">
                  <span>
                    <h2>Phone number</h2>
                  </span>
                  <span>Mon – Fri : 8:30 – 18:00 </span>
                  <span>Sat – Sun : 9:00 – 17:00</span>
                </div>
              </div>{" "}
              <div className="lpg-b-info-item">
                <i className="fa-regular fa-timer"></i>
                <div className="lpg-b-if4">
                  {" "}
                  <span>
                    <h2>Our email</h2>
                  </span>
                  <span> office@helentheme.com</span>
                  <span>Info@helentheme.com</span>
                </div>
              </div>{" "}
              <div className="lpg-b-info-item">
                <i className="fa-regular fa-location-dot"></i>
                <div className="lpg-b-if4">
                  {" "}
                  <span>
                    <h2>Our location</h2>
                  </span>
                  <span>1102 Helen Estates, Guys Store, San Diego, USA.</span>
                </div>
              </div>
            </div>
            <div className="lpg-b-contact-info">
              <div className="lpg-b-left">
                <h2>Hãy viết thư cho chúng tôi!</h2>
                <div className="lpg-form-send-mail">
                  <Form
                    onSubmit={onSubmit}
                    initialValues={{ firstname: "", lastname: "", title: "" }}
                    render={({ handleSubmit, form, values }) => (
                      <form onSubmit={handleSubmit}>
                        <div className="lpg-form-group-1">
                          <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                          />
                          <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                        <div className="lpg-form-group">
                          <label>Last Name</label>
                          <Field
                            name="title"
                            component="input"
                            type="text"
                            placeholder="Title"
                          />
                        </div>
                        <div className="lpg-form-group">
                          <Field
                            name="bio"
                            render={({ input, meta }) => (
                              <div>
                                <textarea {...input} />
                                {meta.touched && meta.error && (
                                  <span>{meta.error}</span>
                                )}
                              </div>
                            )}
                          />
                        </div>

                        <div className="buttons lpg-form-group">
                          <button type="submit" className="lpg-btn-submit">
                            Send Mail
                          </button>
                        </div>
                      </form>
                    )}
                  />
                </div>
              </div>
              <div className="lpg-b-right">
                <h2>Địa chỉ của chúng tôi</h2>
                <span>
                  Tư thái của người trẻ tuổi khi nỗ lực hướng về một mục tiêu
                  nào đó, là tư thế mạnh mẽ nhất, mới mẻ nhất, tươi đẹp nhất.
                </span>
                <span>
                  44-46 đường số 8 Khu dân cư Cityland, phường 10, quận Gò Vấp,
                  thành phố Hồ Chí Minh
                </span>
                <span>(693) 650-2389</span>
                <span> office@helentheme.com</span>
              </div>
            </div>
          </div>
        </section>
        <section className="lpg-s-map-contact">
          <iframe
            className="lpg-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.7995395914046!2d106.66738310224954!3d10.836309977090416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529063a1b0bcf%3A0x82974b5eebb5d669!2zSOG7kyBCxqFpIGNodW5nIGPGsCBDaXR5bGFuZCBQYXJrIEhpbGxz!5e0!3m2!1svi!2s!4v1698226435954!5m2!1svi!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </DefaultLayout>
    </>
  );
};
export default ContactUs;
