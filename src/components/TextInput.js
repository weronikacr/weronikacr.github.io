import React, { Component } from 'react'

class TextInput extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            inputText: null,
        }
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        console.log('submit: ', this.state.inputText)
        if (this.state.inputText) {
            this.props.addText(this.state.inputText)
            this.setState({
                inputText: ''
            })
        }
    }

    componentDidMount(){
        this.nameInput.focus();
     }

    render() {
        return (
            <form className="text-input" ref={this.props.wrapperRef} onSubmit={this.handleSubmit.bind(this)}>
                <input
                    ref={(input) => { this.nameInput = input; }}
                    type="text"
                    placeholder="Confess to nature"
                    value={this.state.inputText}
                    onChange={this.handleChange.bind(this)}
                />
                <input type="submit" value="Submit" />
            </form>
        )
    }

}

export default TextInput
