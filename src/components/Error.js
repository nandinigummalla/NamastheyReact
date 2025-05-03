import { useRouteError } from "react-router";
export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> OOPS.......</h1>
      <h2>Something went wrong</h2>
      <h3>{err?.data}</h3>
      <h4>
        {err?.status}: {err?.statusText}
      </h4>
    </div>
  );
};

export default Error;

// We can do both named and default export for one component and we can import in any way its possible
