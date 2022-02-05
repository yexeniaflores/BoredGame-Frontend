import React, { useEffect, useState } from 'react';
import Counter from '../components/Counter';
import Combat from '../components/Dice/Combat';
import PlayerCard from '../components/PlayerCard';
import PlayerNumSelect from '../components/PlayerNumSelect';
import Setup from '../components/Setup';

export default function Game() {
  const [toggle, setToggle] = useState(false);
<<<<<<< HEAD
=======
  const [playerNum, setPlayerNum] = useState({ playerNum: 2 });
  const [troopNum1, setTroopNum1] = useState(8);
  const [troopNum2, setTroopNum2] = useState(6);
>>>>>>> 39d423a249dbed12fc438c68ea24e6d8d957ac45

  // Number of players:
  const [playerNum, setPlayerNum] = useState(2);

  // An array with player card elements eqaul to the number of players:
  const [players, setPlayers] = useState([]);

  // The starting troop allottment per player:
  const [startingTroops, setStartingTroops] = useState(0);
  
  // When the toggle is fired, make an array of playyers.
  useEffect(() => {
    makePlayerArr();
  }, [toggle])

  // Player num is an integer, so we need to push components into an array and return the array in the return statement.
  const makePlayerArr = () => {
    let playerArr = [];
    for (let i = 1; i <= playerNum; i++) {
      playerArr.push(
        <PlayerCard
          key = {i}
          num={i}
          troops={startingTroops}
        />
      );
    }
    setPlayers(playerArr)
  };
  
  if (toggle) {
    return (
      <div className="flex flex-col items-center">
          <img className='w-screen' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
          <div className="counters">
            <div>
              <h2>Player 1 </h2>
              <Counter />
            </div>
            <div>
              <h2>Player 2 </h2>
              <Counter />
            </div>
          </div>
          <div className='flex p-5'>
            <Combat 
            troopNum1={troopNum1} 
            troopNum2={troopNum2}
            setTroopNum1 ={setTroopNum1}
            setTroopNum2={setTroopNum2}
            />
            <Setup/>
          </div>
          <div className='absolute bg-red-800 h-screen right-0'>
            <h3>Player Stats</h3>
            {players}
          </div>
      </div>
    );  
  } else {
    return (
      <PlayerNumSelect
        setToggle = {setToggle}
        setPlayerNum = {setPlayerNum}
        setStartingTroops = {setStartingTroops}
        makePlayerArr = {makePlayerArr}
      />
    )
  }
}



