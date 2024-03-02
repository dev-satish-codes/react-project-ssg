import React, { useEffect, useState } from "react";

export function ThambolaGame() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [pickedNumbers, setPickedNumbers] = useState([]);
  const [remainingNumbers, setRemainingNumbers] = useState([]);

  function generateNumbers() {
    const numbers = [];
    for (let i = 1; i <= 90; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  function pickNumber() {
    if (remainingNumbers.length === 0) {
      alert("Game Over");
      window.location.reload();
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingNumbers.length);
    const randomNumber = remainingNumbers[randomIndex];
    setPickedNumber(randomNumber);

    const updatedPickedNumbers = [...pickedNumbers, randomNumber];
    setPickedNumbers(updatedPickedNumbers);

    const updatedRemainingNumbers = remainingNumbers.filter(num => num !== randomNumber);
    setRemainingNumbers(updatedRemainingNumbers);
  }

  function resetGame() {
    setPickedNumber(null);
    setPickedNumbers([]);
    setRemainingNumbers(generateNumbers());
  }

  useEffect(() => {
    setRemainingNumbers(generateNumbers());
    resetGame();
  }, []);

  const getColor = (number) => {
    if (pickedNumbers.includes(number)) {
      return 'yellow';
    } else {
      return '';
    }
  };

  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        <h1>Tambola Coin Picker</h1>
      </div>
      <button onClick={pickNumber} className="btn btn-primary">Pick a number</button>
      <p>Selected Number: {pickedNumber}</p>

      <div className="selected-numbers-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {pickedNumbers.map((number, index) => (
          <div key={index} style={{ border: '1px solid black', borderRadius: '20px', padding: '1px', margin: '1px' }}>{number}</div>
        ))}
      </div>



      <div style={{ textAlign: 'center', marginTop: '5px' }}>
        <table style={{ margin: '0 auto'}} class="table table-bordered">
          <tbody>
            {[...Array(9)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                {[...Array(10)].map((_, columnIndex) => {
                  const number = rowIndex * 10 + columnIndex + 1;
                  return (
                    <td
                      key={columnIndex}
                      style={{ background: getColor(number), padding: '5px' }}
                    >
                      {number}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


