import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals'
import React, { Component } from 'react'
import styled from 'styled-components'
// import "./style.css"


const Header = styled.h1`
    color: green;
    font-size: 50px;
`

// class component
// class Counter extends Component {
//     render() {
//         // return <div>{this.props.number}</div>
//         return <div>{this.props.number}</div>
//     }
// }

//functional component
function Counter(props) {
    const { number } = props
    return (
        <div>{'i am funtional Component ' + number}</div>
    )
}


const Title = (props) => {
    return (
        <Header onClick={() => {
            props.changerCounter(Math.random())
        }}>{props.text}</Header>
    )
}
// class Title extends Component {
//     render() {
//         return <h2>{this.props.title}</h2>
//     }
// }

class App extends Component {

    constructor() {
        super()
        this.state = {
            title: 'hello',
            counter: 1
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    changerCounter = (number) => {
        this.setState({
            counter: number
        })
    }

    render() {
        return (
            <div>
                <Title changerCounter={this.changerCounter} text={this.state.title}></Title>
                <h1 onClick={this.handleClick}>{this.state.title}</h1>
                <Counter number={this.state.counter} />
            </div >
        )
    }
}

export default App