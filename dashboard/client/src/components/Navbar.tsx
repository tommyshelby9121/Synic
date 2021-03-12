import { Component } from "react";
import "../styles/components/Navbar.scss";

class Navbar extends Component<any> {
    render(): JSX.Element {
        const login = (e:any) => {
            e.preventDefault();
            window.location.href = "http://localhost:5000/api/auth";
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">S Y N I C</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/commands">Commands</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/support">Support Server</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/premium">Premium</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/invite">Add to Server</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active btn btn-primary red w-100" href="/auth" onClick={login}>Login with Discord</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
