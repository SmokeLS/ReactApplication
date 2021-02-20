import React from "react";
import { Form, Field } from "react-final-form";
import {
  mustBeANumber,
  required,
  validateIncorrectValue,
} from "../../utils/validator";

export default function AddForm({
  setUsers,
  users,
  setSavedUsers,
  setDisplayAddForm,
  savedUsers,
}) {
  return (
    <div>
      <button
        className="btn btn-primary mb-2 mt-2"
        onClick={() => setDisplayAddForm(false)}
      >
        Скрыть
      </button>
      <Form
        onSubmit={(values) => {
          const newUsers = [values, ...users];
          const newUsersSaved = [values, ...savedUsers];
          setUsers(newUsers);
          setSavedUsers(newUsersSaved);
          setDisplayAddForm(false);
        }}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group ">
              <Field name="id" validate={(required, mustBeANumber)}>
                {({ input, meta }) => (
                  <div>
                    <label>Id</label>
                    <input
                      type="number"
                      className="form-control"
                      {...input}
                      placeholder="Id"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div className="form-group ">
              <Field name="firstName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>First name</label>
                    <input
                      type="text"
                      {...input}
                      className="form-control"
                      placeholder="First name"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div className="form-group ">
              <Field name="lastName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label>Last name</label>
                    <input
                      type="text"
                      {...input}
                      className="form-control"
                      placeholder="Last name"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div className="form-group ">
              <Field
                name="email"
                validate={validateIncorrectValue(/.+@.+\..+/)}
              >
                {({ input, meta }) => (
                  <div>
                    <label>email</label>
                    <input
                      className="form-control"
                      type="text"
                      {...input}
                      placeholder="email"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div className="form-group ">
              <Field
                name="phone"
                validate={validateIncorrectValue(/^\(\d{3}\)\d{3}-\d{4}$/)}
              >
                {({ input, meta }) => (
                  <div>
                    <label>Phone</label>
                    <input
                      className="form-control"
                      type="text"
                      {...input}
                      placeholder="Phone"
                    />
                    {meta.touched && meta.error && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <button type="submit" className="btn btn-success mb-2">
              Submit
            </button>
          </form>
        )}
      />
    </div>
  );
}
