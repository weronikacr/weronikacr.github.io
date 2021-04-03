import React, { Component } from 'react'
import WordItem from './WordItem'
import TextInput from './TextInput'

class WordCloud extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          texts: ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit"],
          inputShown: true
        }
        this.wrapperRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

    }
    
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener("keydown", this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown(event) {
        // on esc key hide input
        if (event.keyCode == 27) {
            this.hideInput()
        } else if (!this.state.inputShown ) {
            // on other key show input
            this.showInput()
        } 
    }

    handleClickOutside(event) {
        // on click show input if hidden
        if (!this.state.inputShown) {
            this.showInput()
        }
        // hide input on click outside
        else if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.hideInput()
        }
    }

    addText(text) {
        // add text submitted by input
        console.log(this.state.texts)
        this.setState({
            texts: [
                ...this.state.texts.slice(-19), // keep max 20 words
                text
            ]
        })
        this.hideInput()
    }


    hideInput(){
        this.setState({
            inputShown: false
        })
    }

    showInput(){
        this.setState({
            inputShown: true
        })
    }


  render() {
      return (
        <div className="word-cloud">
              { 
              this.state.inputShown ? 
                <TextInput wrapperRef={this.wrapperRef} addText={this.addText.bind(this)}/> : null }
              <ul>
                  {
                      this.state.texts.map((text) => {
                          return <WordItem text={text} />
                      })
                  }
              </ul>
        </div>
    )
  }

}

export default WordCloud