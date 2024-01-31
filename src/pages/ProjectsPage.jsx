// ProjectsPage.js
import ProjectCard from '../components/ProjectCard'; // Angenommen, die ProjectCard-Komponente befindet sich im gleichen Verzeichnis
import './ProjectsPage.css';

// Beispiel-Daten für deine Projekte
const projectData = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'Eine moderne E-Commerce-Website mit einem responsiven Design.',
    imageUrl: 'path/to/image-1.jpg',
    buttonText: 'Mehr sehen',
    link: 'http://example.com/project-1'
  },
  {
    id: 2,
    title: 'Personal Portfolio',
    description: 'Mein persönliches Portfolio, um meine Arbeiten und Projekte zu zeigen.',
    imageUrl: 'path/to/image-2.jpg',
    buttonText: 'Mehr sehen',
    link: 'http://example.com/project-2'
  },
  // Füge hier weitere Projekte hinzu...
];

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>Meine Projekte</h1>
      <div className="project-list">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
