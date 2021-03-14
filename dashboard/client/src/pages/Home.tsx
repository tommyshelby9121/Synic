import { Component } from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../components/Navbar";

class Home extends Component<any> {
    render(): JSX.Element {
        return (
            <>
                <Helmet>
                    <title>Home - Synic</title>
                </Helmet>
                <Navbar />
            </>
        );
    }
}

export default Home
