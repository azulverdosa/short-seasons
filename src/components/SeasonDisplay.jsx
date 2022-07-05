import React from 'react';

import './SeasonDisplay.css';

// deployment link: https://seasons-eight-sable.vercel.app

const seasonConfig = {
  summer: {
    text: 'Time for the beach, bitches!',
    iconName: 'sun',
  },
  winter: {
    text: "Burrr it's cold outside!",
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`${season} season-display`}>
      <i className={`${iconName} icon massive icon-left`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon massive icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
