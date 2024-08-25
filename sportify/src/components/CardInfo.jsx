const CardInfo = ({ iconPath, avg, text }) => {
    return (
      <div className="sportsee__card">
        <img src={iconPath} alt={text} />
        
        <div className="sportsee__card__content">
          <h2 className="sportsee__card__title">{avg}</h2>
          <span className="sportsee__card__text">{text}</span>
        </div>
      </div>
    );
  };
  
  export default CardInfo;