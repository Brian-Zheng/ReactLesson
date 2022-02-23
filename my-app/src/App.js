import { proposalPlugins } from '@babel/preset-env/data/shipped-proposals'
import React, { Component } from 'react'

// class component
// class Counter extends Component {
//     render() {
//         // return <div>{this.props.number}</div>
//         return <div>{this.props.number}</div>
//     }
// }

//functional component
function Counter(props) {
    const {number} = props
    return (
        <div>{'i am funtional Component ' + number}</div>
    )
}

class Title extends Component {
    render() {
        return <h2>{this.props.children}</h2>
    }
}

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

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>{this.state.title}</h1>
                {/* <Title>
                    <a href='https:google.com.tw'>
                    {'hello, i am title'}
                    </a>
                </Title> */}
                <Counter number={this.state.counter}/>
            </div >
        )
    }
}

export default App