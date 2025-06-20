import React from 'react';
import '../styles/Clubs.css';
import clubLogoyoungStar from '../assets/youngstar.png'; 
import clubLogokhandfc from '../assets/khandfc.png';
import clubLogokhsc from '../assets/hindu.png';
import clubLogoPeradeniya from '../assets/pera.png';
import clubLogowonderers from '../assets/wonderers.png';
import clubLogoasgiriya from '../assets/asgiriya.png';
import clubLogoylvestrian from '../assets/sylvesters.png';
import clubLogoanthonys from '../assets/hockey-logo.png';
import clubLogorajans from '../assets/rajans.png';
import clubLogovidyartha from '../assets/vidyartha.png';
import clubLogokingswood from '../assets/kings.png';

const clubsData = [
  {
    name: "Youngstar SC",
    founded: 1975,
    description: "The oldest club in the district with a rich history of producing national players.",
    logo: clubLogoyoungStar, 
  },
  {
    name: "KH & FC",
    founded: 1981,
    description: "The oldest club in the district with a rich history of producing national players.",
    logo: clubLogokhandfc, 
  },
  {
    name: "Kandy Hindu SC",
    founded: 1982,
    description: "Known for their strong youth development program and competitive women's team.",
    logo: clubLogokhsc,
  },
  {
    name: "Peradeniya University",
    founded: 1985,
    description: "University team with a focus on academic excellence alongside sporting achievements.",
    logo: clubLogoPeradeniya,
  },
  {
    name: "Kandy Wanderers",
    founded: 1990,
    description: "A dynamic club with strong emphasis on junior development and coaching, fostering new talent.",
    logo: clubLogowonderers,
  },
  {
    name: "Asgiriya SC",
    founded: 1995,
    description: "A premier club known for its strong men's hockey program and multiple national team players.",
    logo: clubLogoasgiriya,
  },
  {
    name: "Old Sylvestrian HC",
    founded: 2000,
    description: "Dedicated to developing young talent and providing pathways to elite hockey through structured programs.",
    logo: clubLogoylvestrian,
  },
  {
    name: "Old Rajans HC",
    founded: 1980,
    description: "Prominent school team with a strong legacy in inter-school competitions.",
    logo: clubLogorajans,
  },
  {
    name: "Old Vidyartha HC", 
    founded: 1992,
    description: "Leading men's' school hockey club with a focus on fundamental skill development.",
    logo: clubLogovidyartha,
  },
  {
    name: "Old Kingswoodian HC", 
    founded: 1988,
    description: "A competitive club known for its discipline and tactical play in tournaments.",
    logo: clubLogokingswood,
  },
  {
    name: "Old Anthonian HC",
    founded: 1978,
    description: "A historical school club contributing significantly to local hockey talent.",
    logo: clubLogoanthonys,
  },
];

const Clubs = () => {
  return (
    <section id="clubs" className="clubs-section">
      <div className="container">
        <h2 className="section-heading">Registered Clubs</h2>
        <div className="clubs-grid">
          {clubsData.map((club, index) => (
            <div className="club-card" key={index}>
              <div className="club-logo-container"> {/* New container for logo and name */}
                <img src={club.logo} alt={`${club.name} Logo`} className="club-logo" />
                <h3 className="club-name-under-logo">{club.name}</h3> {/* Club name moved here */}
              </div>
              <div className="club-card-body">
                <p>Founded: {club.founded}</p>
                <p className="club-description">{club.description}</p>
                {/* Removed championships: <p className="club-championships">{club.championships}</p> */}
                <a href={`/clubs/${club.name.toLowerCase().replace(/\s|\./g, '-')}`} className="view-details-link">View Details</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clubs;