import { useForm } from "react-hook-form";
import { useState } from "react";

function Form() {
  const [resultMessage, setResultMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setResultMessage(JSON.stringify(data));
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Validation Form</h1>
        <div className="col">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input id="firstName"
            {...register("firstName", {required: true, minLength: 2, maxLength: 25})}
            type="text"
            class="form-control"
          />
          {errors.firstName && errors.firstName.type === "required" && <span role="alert">First name is required</span>}
          {errors.firstName && errors.firstName.type === "minLength" && <span>Min length must be 2</span> }
          {errors.firstName && errors.firstName.type === "maxLength" && <span>Max length exceeded</span> }
        </div>
        <div className="col">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input id="lastName"
            {...register("lastName", {required: true, minLength: 2, maxLength: 25})}
            type="text"
            class="form-control"
          />
          {errors.lastName && errors.lastName.type === "required" && <span>Last name is required</span>}
          {errors.lastName && errors.lastName.type === "minLength" && <span>Min length must be 2</span> }
          {errors.lastName && errors.lastName.type === "maxLength" && <span>Max length exceeded</span> }
        </div>
        <div className="col">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input id="email"
            {...register("email", {required: true, maxLength: 35})}
            type="email"
            class="form-control"
          />
          {errors.email && errors.email.type === "required" && <span>Email address is required</span>}
          {errors.email && errors.email.type === "maxLength" && <span>Max length exceeded</span> }
        </div>
        <div className="col">
          <label htmlFor="phoneNumber" className="form-label">
            Phone Number
          </label>
          <input id="phoneNumber"
            {...register("phoneNumber",{required: true, minLength:7, maxLength: 10})}
            type="number"
            class="form-control"
          />
          {errors.phoneNumber && errors.phoneNumber.type === "required" && <span>Phone number is required</span>}
          {errors.phoneNumber && errors.phoneNumber.type === "minLength" && <span>Wrong Phone number</span> }
          {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && <span>Wrong Phone number</span> }
        </div>
        <div className="col">
          <label htmlFor="Age" className="form-label">
            Age
          </label>
          <input id="age"
            {...register("age", {required: true, min: 18, max: 99})}
            type="number"
            class="form-control"
          />
          {errors.age && errors.age.type === "required" && <span>Age is required</span>}
          {errors.age && errors.age.type === "min" && <span>Age out of range</span> }
          {errors.age && errors.age.type === "max" && <span>Age out of range</span> }
        </div>
        <div className="col">
          <label htmlFor="field" className="form-label">
            Choose your field
          </label>
          <select id="field"
            {...register("field", {required: true})}
            type="field"
            class="form-select"
            defaultValue=""
          >
          <option value="" selected>Choose...</option>
          <option value="Front-end">Front-End</option>
          <option value="Back-End">Back-End</option>
          <option value="Full-Stack">Full-Stack</option>
          </select>
          {errors.field && errors.field.type === "required" && <span>Choose your field is required</span>}
        </div>
        <div className="btn-space">
          <button type="submit" className="btn-p">
            SUBMIT
          </button>
        </div>
        <div className="result-message">
          <span>{resultMessage}</span>
        </div>
      </form>
    </div>
  );
}

export default Form;
