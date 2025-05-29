import { createContext } from "react";
const UserContextData = createContext({
  LoggedInUser: {
    name: "Default User",
  },
});

export default UserContextData;
