import React from 'react';
import './Teams.css';
import teamMember1 from '../assets/kamran.jpg';
import teamMember2 from '../assets/abrar.jpg';
import teamMember3 from '../assets/zami.jpeg';
import teamMember4 from '../assets/team-member-4.svg';
import { MdSportsEsports } from 'react-icons/md';

const teamsData = [
  {
    id: 1,
    name: 'M S Kamran',
    role: 'Team Lead and Software Developer',
    specialization: 'Full-Stack Development',
    image: teamMember1,
    badgeImage:'https://www.analyzenbd.com/uploads/analyzers/1678181807-27671605.svg',
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    experience: '1+ years',
    description: 'Passionate about creating scalable web applications and leading development teams.'
  },
  {
    id: 2,
    name: 'K M Abrar Ahsan',
    role: 'Software Engineer',
    specialization: 'Web Development',
    image: teamMember2,
    badgeImage:'https://www.analyzenbd.com/uploads/analyzers/1678181492-56173751.svg',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    experience: 'Fresher',
    description: 'Focused on creating intuitive and beautiful user experiences that drive engagement.'
  },
  {
    id: 3,
    name: 'Hasan Sarwar Zami',
    role: 'Intern',
    specialization: 'Web Development',
    image: teamMember3,
    badgeImage: 'https://www.analyzenbd.com/uploads/analyzers/1678181410-58655822.svg',
    skills: ['React', 'Laravel', 'MySQL','Python'],
    experience: 'Fresher',
    description: 'Expert in building robust, scalable infrastructure and automating deployment processes.'
  },
  {
    id: 4,
    name: 'Saify Abid Bhuiyan',
    role: 'Backend Engineer',
    specialization: 'Web Development',
    image: teamMember4,
    badgeImage: 'https://www.analyzenbd.com/uploads/analyzers/1678180489-7257622.svg',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    experience: '1+ years',
    description: 'Specialized in creating high-performance mobile applications for iOS and Android.'
  }
];

const Teams = () => {
  return (
    <section id="teams" className="teams-section">
      <div className="teams-container">
        <div className="teams-header">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Talented professionals dedicated to delivering exceptional IT solutions
          </p>
        </div>
        
        <div className="teams-grid">
          {teamsData.map((member, index) => (
            <div key={member.id} className="team-card" data-member-id={member.id}>
              <div className="team-card-inner">
              <div className="team-image-frame" aria-label="Image frame">
                <div className="team-image-container" aria-label="Profile image frame">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="team-image"
                    loading="lazy"
                    decoding="async"
                    width="240"
                    height="240"
                  />
                  {/* Decorative shards along bottom inspired by game UIs */}
                  <div className="team-image-decor" aria-hidden="true"></div>
                  {/* Game-inspired badge at lower bottom */}
                  <div className="team-game-badge" aria-label="Profile badge">
                    <div className="team-game-badge-inner">
                      {member.badgeImage ? (
                        <img
                          src={member.badgeImage}
                          alt={`${member.name} badge`}
                          className="team-badge-image"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <MdSportsEsports aria-hidden="true" />
                      )}
                    </div>
                  </div>
                  <div className="team-image-overlay" aria-hidden="true"></div>
                </div>
              </div>
                
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-specialization">{member.specialization}</p>
                  <p className="team-experience">{member.experience} experience</p>
                  <p className="team-description">{member.description}</p>
                  
                  <div className="team-skills-full">
                    {member.skills.map((skill, index) => (
                      <span key={index} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
     
    </section>
  );
};

export default React.memo(Teams);