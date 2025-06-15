import projectsData from '../data/projectsData.json';
import './Projects.css';

function Projects() {
/* const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../data/projectsData.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Failed to load projects:", error));
  }, []); */

  return (
   <div className="projects-container">
      <h1 className="projects-title">My CS601 Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;