import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [resultMsg, setResultMsg] = React.useState("");
  const [resultIcon, setResultIcon] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.target.reset();

    const templateParams = {
      'name': data.name,
      'email': data.email,
      'subject': data.subject,
      'message': data.message,
    };

    emailjs.send(
      "service_hlfugiw",
      "template_h37weqi",
      templateParams,
      "6o8QJclNxHb58IhrY"
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setResultMsg("Your message has been sent successfully!");
        setResultIcon("fa-check");
        setIsSubmitted(true);
      }, function (error) {
        console.log('FAILED...', error);
        setResultMsg("Your message has not been sent. Please try again later.");
        setResultIcon("fa-times");
        setIsSubmitted(false);
      });
  };

  return (
    <>
      <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="YOUR NAME"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Email is Required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="YOUR SUBJECT"
              />
              {errors.subject && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="YOUR MESSAGE"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 d-flex gap-1 align-items-center">
            <button type="submit" className="button">
              <span className="button-text">Send Message</span>
              <span className="button-icon fa fa-send"></span>
            </button>
            {isSubmitted && (
              <div
                className="alert alert-success mt-3"
                style={{
                  borderRadius: "50px",
                  marginLeft: "80px",
                  paddingBlock: "16px",
                  background: "transparent",
                  color: "#fff",
                  borderColor: "#ffb400"
                }}
              >
                <i style={{color: "#ffb400", marginRight: "12px", fontSize: "18px"}} className={`fa ${resultIcon}`}></i> {resultMsg}
              </div>
            )}
            {resultMsg && !isSubmitted && (
              <div
                className="alert alert-danger mt-4"
                data-aos="fade-top"
                data-aos-duration="1200"
                data-aos-delay="0"
                style={{
                  borderRadius: "50px",
                  marginLeft: "80px"
                }}
              >
                <i className={`fa ${resultIcon}`}></i> {resultMsg}
              </div>
            )}
          </div>
          {/* End .col */}
        </div>

      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
