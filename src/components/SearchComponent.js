import React from "react";
import { Component } from "react/cjs/react.production.min";
import { Form, Input, Label, Button } from "reactstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log(this.search.value);
    this.props.onClickSearch(this.search.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="pt-2 ml-auto">
        <Form inline onSubmit={this.handleSubmit}>
          <Label htmlFor="search" />
          <Input
            type="text"
            size="30"
            placeholder="Tìm tên nhân viên"
            id="search"
            name="search"
            innerRef={(input) => (this.search = input)}
          />
          <Button className="m-2" type="submit" value="submit" color="primary">
            Search
          </Button>
        </Form>
      </div>
    );
  }
}
export default Search;
