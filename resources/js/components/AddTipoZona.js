import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TipoZona } from "./TipoZona";

export default class AddTipoZona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTipoZona: {
                idtipozona: 0,
                descripcion: "",
                codigo: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput = (key, e) => {
        var state = Object.assign({}, this.state.newTipoZona);
        state[key] = e.target.value;
        console.log("handleInput");
        this.setState({ newTipoZona: state });
    };
    handleSubmit = e => {
        console.log("handleSubmit2");
        e.preventDefault();
        console.log("handleSubmit3");
        this.props.onAdd(this.state.newTipoZona);
        console.log("handleSubmit4");
    };

    render() {
        return (
            <div>
                <h2> Add new Product </h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label className="label"> ID: </label>{" "}
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                onChange={e =>
                                    this.handleInput("idtipozona", e)
                                }
                            />{" "}
                        </div>
                    </div>{" "}
                    <div className="field">
                        <label className="label"> Descripcion: </label>{" "}
                        <div className="control">
                            <input
                                class="input"
                                type="text"
                                onChange={e =>
                                    this.handleInput("descripcion", e)
                                }
                            />{" "}
                        </div>{" "}
                    </div>{" "}
                    <div className="field">
                        <label className="label"> Codigo: </label>{" "}
                        <div className="control">
                            <input
                                class="input"
                                type="text"
                                onChange={e => this.handleInput("codigo", e)}
                            />{" "}
                        </div>{" "}
                    </div>{" "}
                    <div class="field is-grouped">
                        <div class="control">
                            <button class="button is-link"> Submit </button>{" "}
                        </div>{" "}
                        <div class="control">
                            <button class="button is-link is-light">
                                {" "}
                                Cancel{" "}
                            </button>{" "}
                        </div>{" "}
                    </div>
                </form>{" "}
            </div>
        );
    }
}
