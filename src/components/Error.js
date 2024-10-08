import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const error = useRouteError();
    console.log(error);
    return(
    <div className="error ">
        <h1>404 Error</h1>
    </div>
    );
}
export default Error