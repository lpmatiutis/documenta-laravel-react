import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Dutylist extends Component {
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Welcome to Resident Evil 4</div>
                            <div className="card-body">Hi! I'm a react component! =)</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
if(document.getElementById('dutylist')){
    ReactDOM.render(<Dutylist/>, document.getElementById('dutylist'));
}