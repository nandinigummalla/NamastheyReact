import React from "react";
import UserContextData from "../utils/UserContextData";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetail: {
        name: "Dummy",
        followers: 0,
      },
      //   count: 0,
      //   count1: 1,
    };
    // console.log("child constructor called", this.props.name);
  }

  // we can make async while calling apis
  async componentDidMount() {
    //usually api calls are done here
    // console.log("child component didmount called", this.props.name);
    const resp = await fetch("https://api.github.com/users/nandinigummalla");
    const json = await resp.json();
    this.setState({
      userDetail: json,
    });
  }

  render() {
    // console.log("child render called", this.props.name);
    // const { name, location } = this.props;
    // const { count, count1 } = this.state;

    const { name, repos_url, avatar_url, followers } = this.state.userDetail;
    return (
      <div className="shadow-lg hover:shadow-2xl">
        {/* <span>Count is {count} </span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button> */}
        <h1>{name}</h1>
        <img className="m-5" src={avatar_url} />
        <UserContextData.Consumer>
          {({ LoggedInUser }) => <h3>{LoggedInUser?.name}</h3>}
        </UserContextData.Consumer>
        <h3>
          <a href={repos_url}>Repositories</a>
        </h3>
        <h3>Followers: {followers}</h3>
      </div>
    );
  }
}

export default UserClass;
