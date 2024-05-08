import Form from "../components/Form"
import { useState, useEffect } from "react";

function Login() {
    const [isAuthorized, setIsAuthorized] = useState(null);
    if (isAuthorized === null) {
        return <Form route="/api/token/" method="login" />
    }

    return <Navigate to="/" />;

   
}

export default Login