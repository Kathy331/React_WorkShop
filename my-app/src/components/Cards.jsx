import cardInfo from './cardInfo.json'; 

function Card({ cardName }) {
  const selectedCard = cardInfo.cards.find(card => card.cardName === cardName);

  return (
    <div className="card-flip">
      <div className="card-inner">
        {/* Front of the card */}
        <div className="card-front">
          {selectedCard ? (
            <img src={selectedCard.svgPath} alt={selectedCard.cardName} />
          ) : (
            <p>Select a card to see the front</p>
          )}
        </div>
        
        {/* Back of the card */}
        <div className="card-back">
          <img src="/cardBack/red.svg" alt="Card Back" />
        </div>
      </div>
    </div>
  );
}

export default Card;
