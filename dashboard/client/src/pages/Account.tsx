import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import {getUserInfo} from "../utils/api";

const Account = (props:any) => {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        getUserInfo()
            .then(({ data }) => {
                setUser(data);
            })
            .catch((err) => {
                props.history.push("/");
            });
    }, []);

    return (
        <>
            <Helmet>
                <title></title>
            </Helmet>
        </>
    );
}

export default Account;
