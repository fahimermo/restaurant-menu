import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link } from 'react-router-dom';
import Breakfast from './Breakfast.js';
import Regular from './Regular.js';

class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            nameclient: '',
            breakfastMenu: false,
            regularMenu: false,
        }
        this.handleChangeName = this.handleChangeName.bind(this);
    }
    handleChangeName (event) {
        this.setState({nameclient: event.target.value});
        console.log(this.state)
    }
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-light bg-light">
                            <a className="navbar-brand" href="#">Burger Queen</a>
                        </nav>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-6 offset-3">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Client</span>
                            </div>
                            <input nameclient={this.state.nameclient} onChange={this.handleChangeName} type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-6 text-center">
                        {/* <Link to={{pathname:"/breakfast", state: { nameclient: this.state.nameclient }}}><button type="button" className="btn btn-primary btn-lg">Breakfast Menu</button></Link> */}
                        
                    </div>
                    <div className="col-6 text-center">
                        <Link to={{pathname:"/regular", state: { nameclient: this.state.nameclient }}}><button type="button" className="btn btn-primary btn-lg">Regular Menu</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;