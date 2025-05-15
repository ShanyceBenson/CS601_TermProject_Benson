import TimelineItem from "../components/TimelineItem";
import experienceData from "../data/experienceData.json"
import "./Resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <section className="resume-header">
        <h1>My Resume</h1>
        <p>
          Tech-savvy Front End and SharePoint Developer with experience in
          designing and structuring web pages, ensuring optimal web design.
          Proficient in developing new user-facing features, creating reusable
          code and libraries for future use, and assessing technical
          feasibility. Commended for improving applications by maximizing speed
          and scalability. Skilled in writing web pages by utilizing various
          markup languages and coordinating with team members and stakeholders
          to streamline operations. Instrumental in customizing SharePoint
          sites, emerging workflows, managing permissions, and using
          SharePoint's capabilities to drive collaboration and business
          processes.
        </p>
      </section>

      <section className="resume-skills">
        <h2>Technical Skills</h2>
        <ul className="skill-tags">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>SharePoint</li>
          <li>Git</li>
          <li>PowerApps</li>
          <li>REST API</li>
        </ul>
      </section>

      <section className="resume-experience">
        <h2>Professional Experience</h2>
        <div className="timeline">
          {experienceData.map((job, index) => (
            <TimelineItem
              key={index}
              title={job.title}
              company={job.company}
              location={job.location}
              date={job.date}
              details={job.details}
            />  
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resume;