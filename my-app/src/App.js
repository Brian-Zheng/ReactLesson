import React, { Component } from 'react'


class Test {
    setName(name) {
        this.name = name
    }
    say() {
        console.log(this)
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

    // handleClick() {
    //     this.setState({
    //         counter: this.state.counter + 1
    //     })
    // }

    handleClick = () => {
        const t = new Test()
        t.setName('hey')
        t.say()
        const func = t.say;
        func()

        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1 onClick={this.handleClick}>{this.state.title}</h1>
                <div>{this.state.counter}</div>
            </div >
        )
    }
}

export default App