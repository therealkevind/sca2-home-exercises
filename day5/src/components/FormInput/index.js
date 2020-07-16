import React from "react"
import { Input, Label } from "./styles"

const FormInput = ({after, children, update, ...args}) => (
  <Label>
    {children}{" "}
    <Input {...args} onChange={event => update(event.target.value)} />
    {after}
  </Label>
);

export default FormInput;
