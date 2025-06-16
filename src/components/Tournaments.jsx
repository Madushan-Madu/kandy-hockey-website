import React from 'react';
import '../styles/Tournaments.css';

const tournamentsData = [
  {
    title: "Annual League",
    description: "The premier competition in the Kandy district hockey calendar, featuring all registered clubs competing in a league format over several months.",
    winners: [
      { year: 2023, men: "Kandy Hockey Club (Men)", women: "Kandy Ladies HC (Women)" },
      { year: 2022, men: "Central Hockey Club (Men)", women: "Kandy Ladies HC (Women)" },
      { year: 2021, men: "Kandy Hockey Club (Men)", women: "Hillwood College HC (Women)" },
    ],
  },
  {
    title: "Knockout Tournament",
    description: "An exciting elimination tournament held annually, providing thrilling matches and unexpected results as clubs battle for the prestigious knockout trophy.",
    winners: [
      { year: 2023, men: "Peradeniya University HC (Men)", women: "Kandy Ladies HC (Women)" },
      { year: 2022, men: "Kandy Hockey Club (Men)", women: "Hillwood College HC (Women)" },
      { year: 2021, men: "Central Hockey Club (Men)", women: "Kandy Ladies HC (Women)" },
    ],
  },
  {
    title: "7-a-side Tournament",
    description: "A fast-paced tournament featuring 7-player teams, showcasing speed, skill, and tactical awareness in a condensed format.",
    winners: [
      { year: 2023, men: "Kandy Youth HC (Men)", women: "Central Hockey Club (Women)" },
      { year: 2022, men: "Trinity College HC (Men)", women: "Kandy Hockey Club (Women)" },
    ],
  },
  {
    title: "Independence Cup 6-a-side Tournament",
    description: "Held annually to commemorate Independence Day, this prestigious 6-a-side tournament attracts teams from across the region for a day of high-intensity hockey.",
    winners: [
      { year: 2023, men: "Kandy Hockey Club (Men)", women: "Kandy Ladies HC (Women)" },
    ],
  },
];

const Tournaments = () => {
  return (
    <section id="tournaments" className="tournaments-section">
      <div className="container">
        <h2 className="section-heading">Tournaments</h2>
        <div className="tournaments-grid">
          {tournamentsData.map((tournament, index) => (
            <div className="tournament-card" key={index}>
              <div className="tournament-card-header">
                <h3>{tournament.title}</h3>
              </div>
              <div className="tournament-card-body">
                <p className="tournament-description">{tournament.description}</p>
                <p className="recent-winners-heading">Recent Winners</p>
                <ul className="recent-winners-list">
                  {tournament.winners.map((winner, idx) => (
                    <li key={idx}>
                      <strong>{winner.year}</strong>: {winner.men} / {winner.women}
                    </li>
                  ))}
                </ul>
                <a href={`/tournaments/${tournament.title.toLowerCase().replace(/\s/g, '-')}`} className="button button-yellow view-full-history-button">View Full History</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;