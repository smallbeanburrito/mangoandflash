import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import "./options.css"

export default class Options extends Component {
    render() {
        return (
            <div className="options">
                <ul>
                    <li>
                        <Link to="/" className="link"><button className="button-24">One Picture</button></Link>
                    </li>
                    <li>
                        <Link to="/grid" className="link"><button className="button-24">Grid</button></Link>
                    </li>
                </ul>
            </div>
        )
    }
}