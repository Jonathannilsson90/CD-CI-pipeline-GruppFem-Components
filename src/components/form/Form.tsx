import React from "react";
import "./form.css";
import Button from "../button/Button";

interface FormProps {
    URL: string;
}


const initialFormState = {
    nameOfActivity: "",
    week: 0,
    day: "Monday",
    comment: "",
}

const Form = ({URL}:FormProps) => {
  const [formData, setFormData] = React.useState(initialFormState);


  const [formError, setFormError] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormError(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Data:", formData);
    if (formData.nameOfActivity.trim() === "") {
      setFormError(true);
    }

    try {
      const response = await fetch(
        `${URL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFormData(initialFormState)
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <div className="input-text-1">Activity:</div>
          {formError && <div className="error-msg">Activity is required!</div>}
          <input
            className="input-field-1"
            type="text"
            name="nameOfActivity"
            value={formData.nameOfActivity}
            onChange={handleChange}
          />
          <div className="input-text-2">Week:</div>
          <input
            className="input-field-2"
            min="1"
            max="52"
            type="number"
            name="week"
            value={formData.week}
            onChange={handleChange}
          />
          <div className="label-wrapper">
            <div className="input-text-3">Day:</div>
            <select
              id="days"
              name="day"
              value={formData.day}
              onChange={handleChange}
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="input-text-4">Comment (optional):</div>
          <input
            className="input-field-1"
            type="text"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>
        <div className="btn-wrapper">
          <Button type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
