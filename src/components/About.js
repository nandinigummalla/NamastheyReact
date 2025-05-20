import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }

  componentDidMount() {
    console.log(" parent componentdimount called");
  }
  render() {
    console.log("Parent render called");
    return (
      <div className="about">
        <h1>About Us</h1>
        <i>Nothing is impossible, the word itself says ‘I’m possible.</i>
        <UserClass name={"Nandini from class first"} location={"Proddatur"} />
        {/* <UserClass name={"Nandini from class second"} location={"Proddatur"} /> */}
      </div>
    );
  }
}

export default About;
