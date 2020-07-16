import React, { Component } from "react"
import Welcome from "../../components/Welcome"
import FormInput from "../../components/FormInput"
import RadioGroup from "../../components/RadioGroup"
import { Button, FormContainer } from "./styles"

class Form extends Component {
  // TODO: Add constructor and establish state with all the fields you want
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      gender: "",
      pronoun: "",
      pairedGenderPronoun: true,
      hometown: "",
      foods: ["", "", ""],
      birthday: "",
      valid: false,
      submitted: false,
    };
  }

  genders  = ["Male",       "Female"      ];
  pronouns = ["He/him/his", "She/her/hers"];

  updateField = fieldName => value => this.setState({[fieldName]: value});

  updateGender = (gender, index) => this.setState(
    state => state.pairedGenderPronoun && index !== -1
      ? {gender, pronoun: this.pronouns[index]}
      : {gender, pairedGenderPronoun: false}
  );

  updatePronoun = (pronoun, index) => this.setState(
    state => state.pairedGenderPronoun && index !== -1
      ? {pronoun, gender: this.genders[index]}
      : {pronoun, pairedGenderPronoun: false}
  );

  updateFood = index => food => this.setState(({foods}) => ({
    foods: [...foods.slice(0, index), food, ...foods.slice(index+1)]
  }));

  checkValidity = () => {
    this.setState({valid: this.isValid()});
  }

  isValid = () => {
    const {pairedGenderPronoun, submitted, foods, valid, ...state} = this.state;
    for (const i of Object.values(state))
      if (!i) return false;
    for (const i of foods)
      if (!i) return false;
    return true;
  }

  handleSubmit = event => {
    if (this.isValid())
      this.setState({submitted: true});
  };

  render() {
    return (
      <FormContainer>
        <Welcome name={this.state.name} />
        <FormInput type="text" update={this.updateField("name")} disabled={this.state.submitted}>
          Hi! What's your name?
        </FormInput>
        <RadioGroup
          type="text"
          name="Gender"
          items={this.genders}
          other="Other: "
          update={this.updateGender}
          value={this.state.gender}
          disabled={this.state.submitted}>
          Your gender?
        </RadioGroup>
        <RadioGroup
          type="text"
          name="Pronoun"
          items={this.pronouns}
          other="Other: "
          update={this.updatePronoun}
          value={this.state.pronoun}
          disabled={this.state.submitted}>
          Your pronoun?
        </RadioGroup>
        <FormInput type="text" update={this.updateField("hometown")} disabled={this.state.submitted}>
          Where are you from?
        </FormInput>
        <FormInput type="date" update={this.updateField("birthday")} disabled={this.state.submitted}>
          When's your birthday?
        </FormInput>
        <FormInput type="text" update={this.updateFood(0)} disabled={this.state.submitted}>
          How about your favorite food?
        </FormInput>
        <FormInput type="text" update={this.updateFood(1)} disabled={this.state.submitted}>
          Your second favorite food?
        </FormInput>
        <FormInput type="text" update={this.updateFood(2)} disabled={this.state.submitted}>
          Your third favorite food?
        </FormInput>
        <Button
          type="button"
          onClick={this.handleSubmit}
          disabled={!this.isValid()||this.state.submitted}>
          {this.isValid() ? "Submit" : "Fill all fields before submitting."}
        </Button>
        {this.state.submitted && (
          <>
            User's name is {this.state.name}, and{" "}
            {this.state.pronoun.split("/")[0].toLowerCase()}{" "}
            {this.pronouns.includes(this.state.pronoun) ? "is" : "are"} from{" "}
            {this.state.hometown}. {this.state.pronoun.split("/")[0]}{" "}
            {this.pronouns.includes(this.state.pronoun) ? "was" : "were"} born on{" "}
            {this.state.birthday}, and{" "}
            {this.state.pronoun.split("/").slice(-1)[0].toLowerCase()} favorite
            foods are {this.state.foods[0]}, {this.state.foods[1]}, and{" "}
            {this.state.foods[2]}.
          </>
        )}
      </FormContainer>
    );
  }
}

export default Form;
