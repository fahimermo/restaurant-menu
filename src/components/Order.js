import React from 'react';

class Order extends React.Component {

    
    handleRemoveProduct = e => {
        console.log('hola');
    };

    render(){
        return (
          <div className="card">

              <div className="card-header">
                  Order {this.props.burgers}
              </div>
              <div className="card-body">
                  <h5 className="card-title">Client: <strong>{this.props.nameclient}</strong></h5>
                  <ul className="list-group">
                  {this.props.burgers.map(function(burger, i){
                      return (<li key={i} className="list-group-item">
                      <div className="row">
                          <div className="col-8">
                              {burger.type} {burger.ingredient} {burger.productName}
                          </div>
                          <div className="col-2">
                              {burger.price}
                          </div>
                          <div className="col-2">
                          <button type="button" className="close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                          {/* <button type="button" className="btn btn-link">x</button> */}
                          </div>
                      </div>
                  </li>)
                  })}
                  </ul>
                  <div className="text-right pt-4">
                      <p>Total: <strong>${this.props.totalprice}</strong></p>
                  </div>
              </div>
              <div className="card-footer text-right">
                  <a href="#" className="btn btn-primary">Save</a>
              </div>
              
          </div>
        );
    }
      }


export default Order;