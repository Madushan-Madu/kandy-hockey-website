import React from 'react';
import '../styles/Officials.css';
// import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // If you install react-icons
import placeholderAvatar from '../assets/president.jpg';
import placeholderAvatar1 from '../assets/avatar-placeholder.png';
import placeholderAvatar2 from '../assets/avatar-placeholder.png';


const currentOfficials = [
  {
    name: "Dr. R. Maheswaran",
    designation: "President",
    description: "Former national player with over 30 years of experience in hockey administration.",
    twitter: "#", linkedin: "#"
  },
  {
    name: "Mr. Mohommed Ashraf",
    designation: "Secretary",
    description: "Former captain of the district team and dedicated administrator since 2010.",
    twitter: "#", linkedin: "#"
  },
  {
    name: "Mr. Dhanushka Herath",
    designation: "Treasurer",
    description: "Chartered accountant with a passion for hockey and 15 years of financial management experience.",
    twitter: "#", linkedin: "#"
  },
];

const executiveCommittee = [
  { name: "Mr. Saman Gunawardena", designation: "Vice President" },
  { name: "Ms. Dilini Ratnayake", designation: "Assistant Secretary" },
  { name: "Mr. Nimal Perera", designation: "Tournament Secretary" },
  { name: "Ms. Chamari Atapattu", designation: "Women's Coordinator" },
  { name: "Mr. Lasith Malinga", designation: "Youth Development Officer" },
  { name: "Dr. Ajith Fernando", designation: "Medical Officer" },
];

const Officials = () => {
  return (
    <section id="officials" className="officials-section">
      <div className="container">
        <h2 className="section-heading">Current Officials</h2>
        <div className="current-officials-grid">
          {currentOfficials.map((official, index) => (
            <div className="official-card" key={index}>
              <div className="official-avatar">
                {/* Replace with actual image if available, or keep placeholder */}
                <img src={placeholderAvatar} alt={official.name} />
              </div>
              <h4>{official.name}</h4>
              <p className="official-designation">{official.designation}</p>
              <p className="official-description">{official.description}</p>
              <div className="official-social">
                {/* <a href={official.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href={official.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a> */}
                {/* Placeholder for social links if react-icons not used */}
                <a href={official.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href={official.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-heading executive-committee-heading">Executive Committee</h2>
        <div className="executive-committee-grid">
          {executiveCommittee.map((member, index) => (
            <div className="executive-member-card" key={index}>
              <h4>{member.name}</h4>
              <p className="executive-member-designation">{member.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Officials;