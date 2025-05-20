import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="userCard">
      <span>Count is {count}</span>
      <span> Count1 is {count1}</span>
      <h1>Name: {name}</h1>
      <h2>Location: {location}</h2>
    </div>
  );
};

export default User;
