import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, setBots, addToArmy }) {
  const handleEnlist = (bot) => {
    addToArmy(bot);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleEnlist={handleEnlist} />
        ))}
      </div>
    </div>
  );
}


export default BotCollection;
