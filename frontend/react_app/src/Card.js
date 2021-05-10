
function setColorStyle(text) {
    if (text.includes("↑")) {
      return 'green'
    } else if (text.includes("↓")) {
      return 'red';
    } else {
      return 'grey';
    }

  }

const Card = ({stock, symbol, price, score}) => {
    const priceStyle = {color : setColorStyle(price)};
    const sentimentStyle = {color : setColorStyle(score)};
    return (
      <div className="CardWrapper">
        <div className="ColDetail">
          <div className="Header">
            <div className="stock">
              {stock}
            </div>
          </div>
          <div className="symbol">{symbol}</div>
          <div className="score">Sentiment:</div>
          </div>
        <div className="largePrice">
          <div className="price" style = {priceStyle}>{price} <div className ="scoreNumber" style = {sentimentStyle}>{score}</div></div>
        </div>
      </div>
    );
  };

  export default Card;