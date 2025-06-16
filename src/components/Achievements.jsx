import React, { useState } from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('men'); // 'men', 'women', 'junior'

  const menAchievements = [
    { title: 'National Championship 2023', detail: 'Silver Medal' },
    { title: 'Provincial Games 2022', detail: 'Gold Medal' },
    { title: 'All Island Tournament 2023', detail: 'Champions' },
    { title: 'National League 2022', detail: '3rd Place' },
  ];

  const womenAchievements = [
    { title: 'National Championship 2023', detail: 'Gold Medal' },
    { title: 'Provincial Games 2022', detail: 'Silver Medal' },
    { title: 'All Island Tournament 2023', detail: 'Runners-up' },
  ];

  const juniorAchievements = [
    { title: 'U19 National Championship 2023', detail: 'Bronze Medal' },
    { title: 'School Games 2022', detail: 'Champions' },
  ];

  const getAchievementsForCategory = (category) => {
    switch (category) {
      case 'men':
        return menAchievements;
      case 'women':
        return womenAchievements;
      case 'junior':
        return juniorAchievements;
      default:
        return [];
    }
  };

  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <h2 className="section-heading">Recent Achievements</h2>

        <div className="toggle-buttons">
          <button
            className={`button ${activeCategory === 'men' ? 'button-primary' : 'button-secondary-outline'}`}
            onClick={() => setActiveCategory('men')}
          >
            Men's
          </button>
          <button
            className={`button ${activeCategory === 'women' ? 'button-primary' : 'button-secondary-outline'}`}
            onClick={() => setActiveCategory('women')}
          >
            Women's
          </button>
          <button
            className={`button ${activeCategory === 'junior' ? 'button-primary' : 'button-secondary-outline'}`}
            onClick={() => setActiveCategory('junior')}
          >
            Junior
          </button>
        </div>

        <div className="achievements-card">
          <h3>{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}'s National Achievements</h3>
          <div className="achievements-list-grid">
            {getAchievementsForCategory(activeCategory).map((achievement, index) => (
              <div key={index} className="achievement-item">
                <h4>{achievement.title}</h4>
                <p>{achievement.detail}</p>
              </div>
            ))}
          </div>

          {activeCategory === 'men' && (
            <p className="national-players-note">
              **National Players:** 5 players from Kandy District were selected for the National Men's Team in 2023.
            </p>
          )}
           {activeCategory === 'women' && (
            <p className="national-players-note">
              **National Players:** 3 players from Kandy District were selected for the National Women's Team in 2023.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;