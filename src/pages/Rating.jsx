import React, { useState,useContext } from 'react';

const RatingDisplay = ({ rating }) => (
    <p>你给了 {rating} 分</p>
);

const ThemeContext = React.createContext('light');
const RatingStars = ({ onRate }) => {
    const theme = useContext(ThemeContext);
    const starColor = theme === 'dark' ? '#fff' : 'gold';
    return (
      <div>
        {[1,2,3,4,5].map((star) => (
          <span key={star} onClick={() => onRate(star)} style={{ color: starColor }}>
            ★
          </span>
        ))}
      </div>
    );
  };

function App2(){
    const [rating, setRating] = useState(0);

    return(
        <div>
            <RatingStars onRate={setRating} />
            <RatingDisplay rating={rating} />
        </div>
    );
}

export default App2;