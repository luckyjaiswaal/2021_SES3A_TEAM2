import React, { Component } from "react";
import { Button, ButtonGroup } from "@progress/kendo-react-buttons";

export default class RangeButtonGroup extends Component {
  render() {
    const { value } = this.props;
    return (
      <div className="RangeButtonGroup">
        <ButtonGroup>
          <Button title="1 month"
                  togglable={true}
                  selected={value === "1m"}
                  onClick={this.handleClickOneMonth}>
            1M
          </Button>
          <Button title="3 months"
                  togglable={true}
                  selected={value === "3m"}
                  onClick={this.handleClickThreeMonths}>
            3M
          </Button>
          {/* etc */}
        </ButtonGroup>
      </div>
    );
  }
}

export default class RangeButtonGroup extends Component {
    constructor(props) {
      super(props);
      this.handleClickOneMonth = this.handleClick.bind(this, "1m");
      this.handleClickThreeMonths = this.handleClick.bind(this, "3m");
      this.handleClickSixMonths = this.handleClick.bind(this, "6m");
      this.handleClickOneYear = this.handleClick.bind(this, "1y");
      this.handleClickTwoYears = this.handleClick.bind(this, "2y");
      this.handleClickFiveYears = this.handleClick.bind(this, "5y");
    }
  
    handleClick(range) {
      const { onClick } = this.props;
      onClick(range);
    }
  }