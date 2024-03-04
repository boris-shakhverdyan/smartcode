import { ucfirst } from "../../../utils/helpers";

const FormInputText = ({ defaultValue, ...props }) => (
    <input
        type="text"
        autoComplete="off"
        defaultValue={defaultValue || null}
        placeholder={props.placeholder || ucfirst(props.name)}
        {...props}
    />
);

export default FormInputText;
