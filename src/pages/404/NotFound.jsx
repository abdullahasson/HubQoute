
import {Link} from "react-router-dom"
import sadface from "./assets/sadface.gif"
import "./NotFound.css"

const NotFound = () => {


    return (
        <div className="not-found">
            <div className="container">
                <div className="txt">
                    <h1>Oops!</h1>
                    <h2>
                        We can't seem to find the page you're looking for
                    </h2>

                    <h6>
                        Error code: 404
                    </h6>

                    <ul className="list-unstyled">
                        <li>Here are some helpful links instead :</li>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                    </ul>
                </div>
                <div className="image">
                    <img src={sadface} alt="" />
                </div>
            </div>
        </div>
    )

}

export default NotFound