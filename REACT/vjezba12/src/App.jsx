import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const App = () => {
  const initalValues = { user: "", email: "", pass: "" };
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState(initalValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormReset = () => {
    setFormErrors({});
    setFormValues(initalValues);
    setIsSubmit(false);    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

  if (Object.keys(validate(formValues)).length === 0) {
    emailjs
      .sendForm("service_a841i7q", "template_8t5ue15", form.current, {
        publicKey: "I93k_Bkw1HNRz9VwD",
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log("poruka poslana");
          handleFormReset();
        },
        (error) => {
          console.log("nije uspješno prošlo", error.text);
        }
      );
  }
};

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (v) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!v.user) {
      errors.user = "Ovo polje ne može ostati prazno";
    }
    if (!v.email) {
      errors.email = "Ovo polje ne može ostati prazno";
    } else if (!regex.test(v.email)) {
      errors.email = "Niste unijeli ispravnu e-mail adresu";
    }
    if (!v.pass) {
      errors.pass = "Ovo polje ne može ostati prazno";
    } else if (v.pass.length < 6) {
      errors.pass = "Lozinka mora imati više od 6 znakova";
    }
    return errors;
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={handleSubmit}>
        <h1>Forma</h1>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <p className="ispis">Uspjeh</p>
        ) : (
          <p className="ispis">Ispunite formu</p>
        )}
        <hr />
        <div className="form">
          <div className="field">
            <label htmlFor="user">Username</label>
            <input
              type="text"
              name="user"
              placeholder="Username"
              value={formValues.user}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.user}</p>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="pass"
              placeholder="Password"
              value={formValues.pass}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.pass}</p>
          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
