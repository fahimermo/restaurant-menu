import React from 'react';
import Order from './Order.js'
import { interfaceDeclaration } from '@babel/types';
import { log } from 'util';

class Regular extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            burgers:[],
            burgerIngredient: '',
            burgerPrice: null,
            total: 0,
            productName: '',
            burgerType: ''

        }
    }
    componentDidMount() {
        const recievedName = this.props.location.state.nameclient;
        this.setState ({
            name: recievedName,
        });
    }
    handleBurgerType(ingredient){
        this.setState({productName: 'Burger'});
        this.setState({burgerIngredient: ingredient});
    }
    handleBurgerPrice(price, type){
        this.setState({burgerPrice: price});
        this.setState({burgerType: type});
        let burger = {productName: this.state.productName ,ingredient: this.state.burgerIngredient,type:this.state.burgerType, price: this.state.burgerPrice};
        burger.price = price;
        burger.type = type;
        this.state.burgers.push(burger);
        this.handleTotal(this.state.burgers)
    }
 
    handleTotal(list){
        this.state.total = 0;
        
        list.map((item)=>{
           this.state.total += item.price;
        })
    }

    render() {
        return(
            <div className="container pt-5">
                <div className="row pt-3">
                    <div className="col-12">
                        <h4>Regular Menu</h4>
                        <p>{this.state.name}</p>
                    </div>
                    <div className="col-7 pt-5">
                        <div className="row">
                            <div className="col-12">
                                <h5>Hamburguesas</h5>
                            </div>
                            <div className="col-12">
                                <button onClick={() => this.handleBurgerType('Res')} type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#simpleOrDobble">
                                Res
                                </button>
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#simpleOrDobble">
                                Pollo
                                </button>
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#simpleOrDobble">
                                Vegetariana
                                </button>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <h5>Extras</h5>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2">Queso</button>
                                <button type="button" className="btn btn-primary btn-lg m-2">Huevo</button>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <h5>Acompañamientos</h5>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2">Papas fritas</button>
                                <button type="button" className="btn btn-primary btn-lg m-2">Oniong Rings</button>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-12">
                                <h5>Bebidas</h5>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#mililitros">
                                Agua
                                </button>
                                <button type="button" className="btn btn-primary btn-lg m-2" data-toggle="modal" data-target="#mililitros">
                                Refresco
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <Order nameclient={this.state.name} burgers={this.state.burgers} totalprice={this.state.total} />
                    </div>
                </div>
                <div className="modal fade" id="simpleOrDobble" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <button onClick={() => this.handleBurgerPrice(10, 'Simple')}  type="button" data-dismiss="modal" className="btn btn-primary btn-lg m-2">Simple</button>
                            <button onClick={() => this.handleBurgerPrice(15, 'Dobble')}type="button" data-dismiss="modal" className="btn btn-primary btn-lg m-2">Doble</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="mililitros" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="mililitrosLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <button type="button" className="btn btn-primary btn-lg m-2">500ml</button>
                            <button type="button" className="btn btn-primary btn-lg m-2">750ml</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Regular;