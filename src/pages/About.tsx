import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-heading">
        <h1>About Me</h1>
        <p>
          Hi, I’m Shanyce a web developer with a creative spirit, a structured
          mind, and a love for all things purple. I’m currently living in South
          Korea as a proud military spouse (my husband’s a Blackhawk pilot!),
          building my career remotely while soaking in new experiences and
          perspectives. When I’m not coding, you’ll probably find me out for a
          walk or bike ride, controller in hand playing Marvel Rivals, or tuned
          in to my favorite shows like Tracker, Will Trent, The Rookie, 911, and
          Found. I watch them faithfully each week, and yes, I will cancel plans
          to avoid spoilers.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-item">
          <h2>Background</h2>
          <p>
            My tech journey began with a curiosity for how things work and a
            love for organizing information. That curiosity evolved into a
            full-blown passion for development. One that fuels me daily as I
            create user-friendly, responsive, and purposeful web applications.
            I’ve worn many hats in the tech world, from Help Desk Support to
            SharePoint Developer to Front-End Dev. Each role has helped shape me
            into a thoughtful, adaptable builder who values both structure and
            creativity. I’m always learning, experimenting, and working to level
            up my skills in HTML5, CSS3, JavaScript, React, and beyond.
          </p>
        </div>

        <div className="about-item">
          <h2>Values</h2>
          <p>
            At my core, I’m a builder. I like taking abstract ideas and turning
            them into something useful, beautiful, and real. I'm motivated by
            the chance to help people. Whether it's simplifying a workflow,
            organizing information, or creating something that sparks joy. I
            believe in clean code, thoughtful design, and constantly improving
            both my skills and myself. I may not share all my project ideas
            (yet), but trust me they're always brewing.
          </p>
        </div>

        <div className="about-item">
          <h2>Fun Facts</h2>
          <ul>
            <li>
              My favorite color is purple, it's not just a preference, it’s a
              whole vibe.
            </li>
            <li>I’m a strategist at heart, both in games and in life.</li>
            <li>
              I play Marvel Rivals the most right now, but I also love Dead by
              Daylight and Call of Duty.
            </li>
            <li>
              Walking and biking are my go-to resets after long coding sessions.
            </li>
            <li>
              I’m totally that person who schedules life around TV nights. I
              never miss an episode of Tracker, Will Trent, The Rookie, 911, or
              Found.
            </li>
            <li>
              I thrive in structured chaos: give me a challenge, and I’ll turn
              it into a checklist.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
