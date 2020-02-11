import React from "react";
import "./style.css";

function Header(props) {
    return <div className="jumbotron text-center">
        <div className="row">
            <div className="col-md-4">
                <h1>Click Click Boom</h1>
            </div>

            <div className="col-md-4">
                <button onClick={() => props.restartGame()} type="button" className="btn btn-warning">Restart Game</button>
            </div>

            <div className="col-md-4">
                <h2>Score: {props.score} | Top Score: {props.topScore}</h2>
            </div>
        </div>
    </div>
}

export default Header;