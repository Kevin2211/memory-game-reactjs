import MemoryCard from './components/MemoryCard';
import './App.css';
import { useState, useEffect } from 'react'

function generateDeck (){
  const symbols = ["∆","ß","£","§","•", '$', '+', 'ø']
  const deck = []
  for(let i = 0; i < 16; i++){
    deck.push({
      isFlipped: false,
      symbol: symbols[i % 8]
    })
  }
  return shuffle(deck)
}
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

function App() {
  const [deck, setDeck] = useState([])
  const [pickedCards, setPickedCards] = useState([])


  useEffect (() =>{

    setDeck(generateDeck())
    
    } ,[]
  )
  const cardsJSX = deck.map((card, index) => {

    return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index}/>
  })

  const pickCard = (cardIndex) => {
    if(this.state.deck[cardIndex]){
      return
    }
    const cardToFlip = {...this.state.deck[cardIndex]}
    cardToFlip.isFlipped = true

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h3>Match cards to win</h3>
      </header>
      <div>
      {cardsJSX.slice(0,4)}
      </div>
      <div>
      {cardsJSX.slice(4,8)}
      </div>
      <div>
      {cardsJSX.slice(8,12)}
      </div>
      <div>
      {cardsJSX.slice(12,16)}
      </div>

    </div>
  );
}

export default App;
