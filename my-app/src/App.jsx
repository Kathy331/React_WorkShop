import { useState, useEffect} from 'react'
import './App.css'
import Card from './components/Cards.jsx'
import cardInfo from './components/cardInfo.json';

function App() {
  const [selectedCard, setSelectedCard] = useState(''); // State for the selected card
  const [cardDescription, setCardDescription] = useState('');

  useEffect(() => {
    if (selectedCard) {
      const cardType = selectedCard.split('_')[0]; // Get the type (hearts, diamonds, etc.)
      setCardDescription(`It's a ${cardType}`); // Update the description
    } else {
      setCardDescription(''); // Reset description if no card is selected
    }
  }, [selectedCard]); // Runs when selectedCard changes

  return (
    <>
      <div className="card">

        <h2>{cardDescription}</h2>

        <select className="select" value={selectedCard} onChange={(event) => setSelectedCard(event.target.value)}>
          <option value="">Select a card</option>
          {cardInfo.cards.map((card) => (
            <option key={card.cardName} value={card.cardName}>
              {card.cardName}
            </option>
          ))}
        </select>
        <div className="card-container">
          <Card cardName={selectedCard}/>
          <Card cardName={selectedCard}/>
          <Card cardName={selectedCard}/>
        </div>
      </div>
    </>
  )
}

export default App
