import React, { Component } from 'react';
import LoginFuncional from './LoginFuncional';
import LogoutFuncional from './LogoutFuncional';

export default class RenderizadoCondicional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: true
        }
    }
    render(props) {
        return(
            <div>
                <h2>Renderizado condicional</h2>
                {this.state.session ? <LoginFuncional /> : <LogoutFuncional />}
            </div>
        )
    }
}