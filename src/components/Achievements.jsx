import React, { useState } from 'react';
import '../styles/Achievements.css';

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState('men'); // 'men', 'women', 'junior'

  const menAchievements = [
    { title: 'Junior National Championship 2024', detail: '2nd Runner up ' },
    { title: 'Provincial Games 2024', detail: 'Silver Medal' },
    { title: 'Provincial Games 2023', detail: 'Silver Medal' },
    { title: 'Junior National Championship 2023', detail: 'Champions' },
  ];

  const womenAchievements = [
    { title: 'Womens National Championship 2024', detail: 'Champions' },
    { title: 'Provincial Games 2024', detail: 'Silver Medal' },
    { title: 'Junior National Championship 2024', detail: 'Runners-up' },
  ];

  const juniorAchievements = [
    { title: 'National Cambine School Games 2024', detail: '2nd Runner up' },
    { title: 'National Cambine School Games 2022', detail: 'Champions' },
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
              **National Players:** 3 players from Kandy District were selected for the Central Provice Men's Team in 2024.
            </p>
          )}
           {activeCategory === 'women' && (
            <p className="national-players-note">
              **National Players:** 3 players from Kandy District were selected for the National Women's Team in 2025.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Achievements;