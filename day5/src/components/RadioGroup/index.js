import React, { Component } from "react"
import FormInput from "../FormInput"
import { RadioContainer } from "./styles"

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherValue: null,
    };
  }

  handleChange = value => {
    this.props.update(this.props.items[value], +value);
  };

  handleSelectOther = () => {
    this.props.update(this.state.otherValue, -1);
  };

  handleOther = value => {
    this.setState({otherValue: value});
    this.props.update(value, -1);
  };

  render() {
    const {children, items, name, other, value, ...props} = this.props;
    return (
      <RadioContainer>
        {children}
        {items.map((e, i) => (
          <FormInput
            {...props}
            type="radio"
            after={e}
            name={name}
            value={i}
            key={i}
            update={this.handleChange}
            checked={value === e}
          />
        ))}
        {other && (
          <FormInput
            {...props}
            type="radio"
            after={<>
              {other} <FormInput type="text" update={this.handleOther} disabled={props.disabled} />
            </>}
            name={name}
            update={this.handleSelectOther}
            checked={value === this.state.otherValue}
          />
        )}
      </RadioContainer>
    );
  }
}

export default RadioGroup;
