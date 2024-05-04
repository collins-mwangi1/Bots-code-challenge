import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.some((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  return (
    <div>
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} />
      <BotCollection bots={bots} setBots={setBots} addToArmy={addToArmy} />
    </div>
  );
}

export default BotsPage;
