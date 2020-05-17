import React from 'react';
import Order from './Order.js'

class Breakfast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        }
    }
    componentDidMount() {
        const recievedName = this.props.location.state.nameclient;
        this.setState ({
            name: recievedName,
        });
    }
    render() {
        return(
            <div className="container pt-5">
                <div className="row pt-3">
                    <div className="col-12">
                        <h4>Breakfast Menu</h4>
                    </div>
                    <div className="col-7 pt-5">
                        <div className="row">
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2">Café Americano</button>
                                <button type="button" className="btn btn-primary btn-lg m-2">Café con Leche</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2">Sándiwch jamón y queso</button>
                                <button type="button" className="btn btn-primary btn-lg m-2">Jugo Natural</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <Order nameclient={this.state.name}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Breakfast;