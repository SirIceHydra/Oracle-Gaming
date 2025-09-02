import React from 'react';

const Team = () => {
  const teamMembers = [
    { id: 1, image: 'team-member-1.png' },
    { id: 2, image: 'team-member-2.png' },
    { id: 3, image: 'team-member-3.png' },
    { id: 4, image: 'team-member-4.png' },
    { id: 6, image: 'team-member-6.png' },
    { id: 7, image: 'team-member-7.png' },
    { id: 8, image: 'team-member-8.png' },
    { id: 9, image: 'team-member-9.png' },
    { id: 10, image: 'team-member-10.png' },
    { id: 11, image: 'team-member-11.png' },
    { id: 12, image: 'team-member-12.png' }
  ];

  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className="h2 section-title">Active Team Members</h2>
        <ul className="team-list">
          {teamMembers.map((member) => (
            <li key={member.id}>
              <a href="/team" className="team-member">
                <figure>
                  <img src={`/images/${member.image}`} alt="Team member" />
                </figure>
                <ion-icon name="link-outline"></ion-icon>
              </a>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary">view all members</button>
      </div>
    </section>
  );
};

export default Team;
