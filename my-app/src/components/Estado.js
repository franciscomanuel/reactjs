import React, { Component } from 'react';
import ComponenteFuncional from './ComponenteFuncional';

class Estado extends Component {

    constructor(props){
        super(props);
        this.state = {
            contador: 0
        }  
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            })
        }, 1000)
    }

    render() {
        return(
            <div>
                <h2>State</h2>
                <p>{this.state.contador}</p>
                <hr />
                <ComponenteFuncional msg={this.state.contador}/>
            </div>
        )
    }
}

export default Estado;