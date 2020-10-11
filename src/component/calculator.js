import React, { Component } from 'react'
import '../css/style.css'
class Calculator extends Component {
    constructor()
    {
        super();
        this.state={
            result:""
        } 
    }
    clear = () => {
        this.setState({
            result: ""
        })
    };
    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };
    HandleClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };
    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };
    render() {
        return (
            <div className="calculator">
                <h1>calculator</h1>
                <div className="output">
                <h2>{this.state.result}</h2>
                </div>
                <div className="keypad">
                    <button value="(" onClick={(e)=>this.HandleClick(e.target.value)}>(</button>
                    <button value="CE" onClick={this.backspace}>CE</button>
                    <button value=")" onClick={(e)=>this.HandleClick(e.target.value)}>)</button>
                    <button value="C" onClick={this.clear}>C</button>
                    <button value="1" onClick={(e)=>this.HandleClick(e.target.value)}>1</button>
                    <button value="2" onClick={(e)=>this.HandleClick(e.target.value)}>2</button>
                    <button value="3" onClick={(e)=>this.HandleClick(e.target.value)}>3</button>
                    <button value="+" onClick={(e)=>this.HandleClick(e.target.value)}>+</button>
                    <button value="4" onClick={(e)=>this.HandleClick(e.target.value)}>4</button>
                    <button value="5" onClick={(e)=>this.HandleClick(e.target.value)}>5</button>
                    <button value="6" onClick={(e)=>this.HandleClick(e.target.value)}>6</button>
                    <button value="-" onClick={(e)=>this.HandleClick(e.target.value)}>-</button>
                    <button value="7" onClick={(e)=>this.HandleClick(e.target.value)}>7</button>
                    <button value="8" onClick={(e)=>this.HandleClick(e.target.value)}>8</button>
                    <button value="9" onClick={(e)=>this.HandleClick(e.target.value)}>9</button>
                    <button value="*" onClick={(e)=>this.HandleClick(e.target.value)}>*</button>
                    <button value="." onClick={(e)=>this.HandleClick(e.target.value)}>.</button>
                    <button value="0" onClick={(e)=>this.HandleClick(e.target.value)}>0</button>
                    <button value="=" onClick={(e)=>this.HandleClick(e.target.value)}>=</button>
                    <button value="/" onClick={(e)=>this.HandleClick(e.target.value)}>/</button>
                </div>
            </div>
        )
    }
}
export default Calculator;