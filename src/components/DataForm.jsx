import React, { useState } from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { FormFieldHeader } from "./FormFieldHeader";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Chart } from "./Chart";

export const DataForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState("");

  const onSubmit = (data) => {
    setFormData({ data });
  };

  return (
    <div className="main">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Field>
          <label>Current savings</label>
          <input
            type="number"
            placeholder="Curring savings"
            {...register("savings", {
              required: true,
            })}
          />
        </Form.Field>
        <Form.Field>
          <label>My household income per month</label>
          <input
            type="number"
            placeholder="Household income per month (after tax)"
            {...register("income", {
              required: true,
            })}
          />
        </Form.Field>
        <Form.Field>
          <label>Income growth %</label>
          <input
            type="number"
            placeholder="Income grwoth %"
            {...register("growth", {
              required: true,
              min: 0,
              max: 100,
            })}
          />
        </Form.Field>
        <Form.Field>
          <label>My expense per month</label>
          <input
            type="number"
            placeholder="Expense per month"
            {...register("expense", { required: true })}
          />
        </Form.Field>
        <Form.Field>
          <label>First deposit</label>
          <input
            type="number"
            placeholder="First deposit planned to put in"
            {...register("deposit", {
              required: true,
            })}
          />
        </Form.Field>
        <Form.Field>
          <label>Target price</label>
          <input
            type="number"
            placeholder="Dream house cost"
            {...register("cost", {
              required: true,
            })}
          />
        </Form.Field>
        <Form.Field>
          <label>Inflation %</label>
          <input
            type="number"
            placeholder="Inflation"
            {...register("inflation", {
              required: true,
              min: 0,
              max: 100,
            })}
          />
        </Form.Field>
        {/* <Form.Field>
        <select {...register("Title", { required: true })}>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>
      </Form.Field> */}
        <Button type="submit">Submit</Button>
      </Form>
      <Chart data={formData} />
    </div>
  );
};
