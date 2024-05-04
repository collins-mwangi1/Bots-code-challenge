import React from "react";

function YourBotArmy({ army, removeFromArmy }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army.map((bot) => (
            <div className="column" key={bot.id}>
              <div className="ui card">
                <div className="content">
                  <div className="header">{bot.name}</div>
                  <img
                    alt="oh no!"
                    src={bot.avatar_url}
                    onError={(e) => e.target.src = 'http://localhost:8002/bots'}
                  />
                </div>
                <div className="extra content">
                  <button
                    className="ui mini red button"
                    onClick={() => removeFromArmy(bot)}
                  >
                    Release
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
