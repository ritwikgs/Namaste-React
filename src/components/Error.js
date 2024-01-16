import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error, "error");
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>
      <div>
        <p>
          {error.status} - {error.statusText}
        </p>
      </div>
      <div>
        <p>{error.data}</p>
      </div>
    </div>
  );
};

export default Error;
