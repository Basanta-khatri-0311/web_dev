import React, { useReducer } from "react";

const FormValidationWithReducer = () => {
  const initialValues = {
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    isFormValid: false,
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case "NAMEVALUE":
        return {
          ...state,
          name: {
            ...state.name,
            value: action.payload,
            error: action.payload.trim() === "" ? "Name is required" : "",
          }
        };

      case "PASSWORDVALUE":
        return {
          ...state,
          password: {
            ...state.password,
            value: action.payload,
            error:
              action.payload.trim().length < 6
                ? "Password must be minimun of 6 characters"
                : "",
          },
        };

      case "EMAILVALUE":
        return {
          ...state,
          email: {
            ...state.email,
            value: action.payload,
            error: action.payload.trim().includes("@")
              ? ""
              : "Email is incorrect",
          },
        };

      default:
        return state;
    }
  };

  const onNameChange = (e) => {
    const nameValue = e.target.value;
    dispatchFormValidation({ type: "NAMEVALUE", payload: nameValue });
  };

  const onEmailChange = (e) => {
    const emailValue = e.target.value;
    dispatchFormValidation({ type: "EMAILVALUE", payload: emailValue });
  };

  const onPasswordChange = (e) => {
    const passwordValue = e.target.value;
    dispatchFormValidation({ type: "PASSWORDVALUE", payload: passwordValue });
  };

  const [formValues, dispatchFormValidation] = useReducer(
    formReducer,
    initialValues
  );
  return (
    <div>
      <div>
        <p>{formValues.name.error}</p>
        <label htmlFor="">Name:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your name..."
          onChange={onNameChange}
          value={formValues.name.value}
        />
      </div>

      <div>
        <p>{formValues.email.error}</p>
        <label htmlFor="">Email:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your Email..."
          onChange={onEmailChange}
          value={formValues.email.value}
        />
      </div>

      <div>
        <p>{formValues.password.error}</p>
        <label htmlFor="">Password:</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your password..."
          onChange={onPasswordChange}
          value={formValues.password.value}
        />
      </div>
    </div>
  );
};

export default FormValidationWithReducer;
