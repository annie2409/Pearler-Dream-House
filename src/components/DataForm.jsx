import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { FormFieldHeader } from "./FormFieldHeader";
import { Button, Checkbox, Form } from "semantic-ui-react";

export const DataForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>My household income per month</label>
        <input
          type="text"
          placeholder="Household income per month"
          {...register("Household income per month", {
            required: true,
            maxLength: 80,
          })}
        />
      </Form.Field>
      <Form.Field>
        <label>My expense per month</label>
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
      </Form.Field>
      <Form.Field>
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
      </Form.Field>
      <Form.Field>
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />
      </Form.Field>
      <Form.Field>
        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="Yes"
        />
      </Form.Field>
      <Form.Field>
        <input
          {...register("Developer", { required: true })}
          type="radio"
          value="No"
        />
      </Form.Field>
      <Form.Field>
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
