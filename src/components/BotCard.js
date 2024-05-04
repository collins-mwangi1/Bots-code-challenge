import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, handleEnlist }) {
  return (
    <div className="ui column">
      <div className="ui card">
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} onError={(e) => e.target.src = ''} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>
          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button className="ui mini green button" onClick={() => handleEnlist(bot)}>
                Enlist
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;