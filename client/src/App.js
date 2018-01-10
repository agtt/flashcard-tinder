import React, { Component } from 'react';
import { FlashCard } from './containers/FlashPage';
import DrawButton from './components/FlashcardButton';
import { FixedMenu } from './containers/Landing';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [
        {front: "includes()", back: "includes() determines whether an array includes a certain element. returns TRUE or FALSE."}, {front: "indexOf()", back: "indexOf() returns the first index at which a given element can be found in the array. Returns -1 if it is not found."},
        {front: "slice()", back:"slice() returns a shallow COPY of a portion of an array into a new array object selected from BEGIN (Inclusive) to END (Non-Inclusive). ORIGINAL ARRAY NOT MUTATED."},
        {front: "splice()", back: "splice() changes the contents of an array by removing existing elements and/or adding new elements."},
        {front: "every()", back: "every() tests whether ALL ELEMENTS in the array pass the test implemented by the provided function."},
        {front: "charAt()", back: "charAt() returns the specified character from a string. If no index is provided, charAt() will use index-0. Will return and empty string if index is out of range."},
        {front: "concat()", back: "concat() combines the text of one or more strings and returns a NEW String. ORIGINAL STRING NOT MUTATED."},
        {front: "substr()", back: "substr() returns the characters in a string beginning at the specified location (index) through the specified number (length) of characters (inclusive)."},
        {front: "substring()", back: "substring() returns a subset of a string between one index START (inclusive) and another END (Non-Inclusive), or through the end of the string (if indexEnd is omitted)."},
        {front: "template", back: "an HTML template must include..."},
      ],
      currentCard: {},
      response: ''
    }
    this.updateCard = this.updateCard.bind(this);
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  getRandomCard(currentCards) {
    const card = currentCards[Math.floor(Math.random() * currentCards.length)]
    return(card);
  }

  updateCard() {
    const currentCards = this.state.cards;
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
  }

  render() {
    return (
      <div className="App">
        <FixedMenu inverted />
        <div className='cardRow'>
          <FlashCard front={this.state.currentCard.front}
                     back={this.state.currentCard.back} 
          />
        </div>
        <div className='buttonRow'>
          <DrawButton drawCard={this.updateCard} />
        </div>
        <div className="littleServer">{this.state.response}</div>
      </div>
    );
  }
}

export default App;
