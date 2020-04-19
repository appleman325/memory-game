import React, { Component } from 'react';
import Card from './Card.js';
import data from './cards.json';

class AppBody extends Component {

  state = {
    cards : data,
    reviewedCardCount : 0,
    reviewedCardName : null,
    reviewedCardId : null,
    totalClicks : 0
  };

  handleClick = (cardId) => {
    const cards = [...this.state.cards];
    cards.map((card) => {
      if (card.id === cardId) {
        if (!card.isFound && card.id !== this.state.reviewedCardId) {
          card.isDisplay = !card.isDisplay;
          let reviewedCardCount = this.state.reviewedCardCount;
          if (this.state.reviewedCardCount < 2) {
            if (this.state.reviewedCardCount === 0) {
              this.setState({
                reviewedCardName: card.name,
                reviewedCardId: card.id
              });
            } else {
              if (this.state.reviewedCardName === card.name) {
                let matchedCards = this.state.cards.filter(c => c.name === card.name);
                matchedCards.map(matchedCard => {
                  matchedCard.isFound = true;
                });
                this.setState({
                  cards: matchedCards
               });
              }
              this.setState({
                reviewedCardName: null,
                reviewedCardId: null
              });
            }
            reviewedCardCount++;
            this.setState({ reviewedCardCount });
          } else {
            reviewedCardCount = 1;
            let foldedCards = this.state.cards.filter(c => (c.id !== cardId && !c.isFound));
            foldedCards.map(foldedCard => {
              foldedCard.isDisplay = false;
            });
            this.setState({
              cards: foldedCards,
              reviewedCardCount: reviewedCardCount,
              reviewedCardName: card.name,
              reviewedCardId: card.id
           });
          }
          let totalClicks = this.state.totalClicks;
          totalClicks++;
          this.setState({ totalClicks });
        }
      }
    });
    this.setState({ cards });
  }

  handleReset = () => {
    const cards = [...this.state.cards];
    cards.map(card => {
      card.isDisplay = false;
      card.isFound = false;
    });
    this.setState({
      cards: cards,
      reviewedCardId: null,
      reviewedCardName: null,
      reviewedCardCount: 0,
      totalClicks: 0
    });
  };

  render() {
    return (
      <div className="container">
        <div className="pb-3 text-center">
          <p>Your Clicks: <span>{this.state.totalClicks}</span></p>
          <button className="btn btn-secondary" onClick={this.handleReset}>Reset</button>
        </div>
        <div className="row">
          {this.state.cards.map((card) => (
            <div className="col-md-3 col-sm-6 mt-3" key={card.id}>
              <Card
                name={card.name}
                cardId={card.id}
                key={card.id}
                handleClick={this.handleClick}
                isDisplay={card.isDisplay}
              />
            </div>
          ))}
        </div>
        <br />
      </div>
    );
  }

}

export default AppBody;
