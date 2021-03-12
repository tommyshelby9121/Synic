import { Component } from "react";
import { Helmet } from "react-helmet";
import "../styles/pages/Error404.scss";

class Error404 extends Component<any> {
    render(): JSX.Element {
        return (
            <>
                <Helmet>
                    <title>Error 404: This page cannot be found</title>
                </Helmet>
                <div className="errorBox">
                    <div>
                        <h1 className="errorType">404</h1>
                        <div className="errorTextBox">
                            <h2 className="errorText">This page could not be found.</h2>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Error404;
