// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY

var Card = React.createClass({
  render: function() {
    return(
      <div className="col-sm-2">
        <h1><img className="img-responsive" src={"http://golearntocode.com/images/cards/" + this.props.value  + ".png"} /></h1>
      </div>
    )
  }
})


var App = React.createClass({

Deal: function() {
var Deck = window.getDeck().shuffle()
this.setState({
  hand: [Deck]
}) //Can't figure out how to make it understand that hand is a state that stores the string of cards from my variable Deck.
},

  getInitialState: function(){
    return {
      beginDeck: ["face_down", "face_down", "face_down", "face_down", "face_down"]
    }
},

  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <Card value={this.state.beginDeck[0]}/> // If I could figure out how to pull the strings from my Deck then I would change this state to hand.
        <Card value={this.state.beginDeck[1]}/>
        <Card value={this.state.beginDeck[2]}/>
        <Card value={this.state.beginDeck[3]}/>
        <Card value={this.state.beginDeck[4]}/>

          <div className="col-sm-2">
            <h1><a href="#" className="btn btn-success" onClick={this.Deal}>Deal</a></h1>

        </div>
      </div>
    )
  }
})


ReactDOM.render(<App />, document.getElementById("app"))
