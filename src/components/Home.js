import { Link } from "react-router-dom";

import './Home.css';

const Home = () => {
    return(
        <div>
            <h1>React JS Hiring Assessment</h1>
            <div className="button-type">
                <Link to="pageone">
                    <button type="button">
                        Page One
                    </button>
                </Link>
            </div>
            <div className="button-type">
                <Link to="pagetwo">
                    <button type="button">
                        Page Two
                    </button>
                </Link>
            </div>
            <div className="button-type">
                <Link to="pagethree">
                    <button type="button">
                        Page Three
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
