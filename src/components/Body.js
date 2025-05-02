import resArray from "../utils/mockData";
import ResCard from "./ResCard";
// passing props to component is passing arguments to function
const Body = () => {
  return (
    <div className="res-container">
      {resArray?.map((rest) => (
        <ResCard key={rest?.info?.id} resData={rest} />
      ))}
    </div>
  );
};
export default Body;
