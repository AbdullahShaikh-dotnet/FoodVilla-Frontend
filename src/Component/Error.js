import { useRouteError } from "react-router";

const Error = () => {
    const Errors = useRouteError();
    return (
        <>
            <h1>{Errors.status}</h1>
            <p>{Errors.statusText}</p>
        </>
    )
}

export default Error;