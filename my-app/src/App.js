import React, { Component } from 'react'

class Text extends Component {
    render() {
        return <p>text</p>
    }
}
class Title extends Component {
    render() {
        const t = 'HiHi'

        return <h1 onClick={() => { 
          alert('hi')
        }}>{t}</h1>
    }
}

class App extends Component {
    render() {
        const name = 'yoyo'
        const style = {
            color: 'red'
        }
        return (
            <div className={name + '111'} style={style}>
                <Title />
                <Text />
            </div>
        )
    }
}

export default App