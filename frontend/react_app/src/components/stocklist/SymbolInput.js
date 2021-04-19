import React, { Component } from "react";
import { Input } from "@progress/kendo-react-inputs";

export default class SymbolInput extends Component {
  render() {
    const { value } = this.props;
    return (
      <form className="k-form">
        <Input name="symbol"
               label="Company's symbol"
               pattern={"[A-Za-z-]+"}
               minLength={1}
               required={true}
               value={value}
               onChange={this.handleChange} />
      </form>
    );
  }
}

export default class SymbolInput extends Component {
    handleChange(evt) {
      const { onChange } = this.props;
      const symbol = evt.target.value;
      onChange(symbol);
    }
  }