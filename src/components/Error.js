import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>An Error Occurred</h2>
            <h3>{err.data}</h3>
        </div>
    );
};

export default Error;