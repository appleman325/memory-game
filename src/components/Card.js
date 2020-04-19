import React, { Component } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { handleClick, name, cardId, isDisplay } = this.props;

    const cardImgUrl = '/images/' + name + '.png';

    const imgClass = 'card_image ' + (isDisplay ? 'd-show' : 'd-hide');

    const cardBackClass = (isDisplay ? '' : 'card_back');

    const cardWrapperClass = 'card_wrapper text-center ' + (isDisplay ? 'card_wrapper_bk_show' : 'card_wrapper_bk_red');

    return (
      <div className={cardWrapperClass}>
        <img className={imgClass}  src={cardImgUrl} onClick={() => handleClick(cardId)} />
        <div className={cardBackClass}></div>
      </div>
    );
  }

}

export default Card;
