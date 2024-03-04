import { ucfirst } from "../../../utils/helpers";

const FormInputNumber = ({ defaultValue, ...props }) => (
    <input
        type="number"
        autoComplete="off"
        defaultValue={defaultValue || null}
        placeholder={props.placeholder || ucfirst(props.name)}
        {...props}
    />
);

export default FormInputNumber;
