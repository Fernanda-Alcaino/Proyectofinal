// routes/projects.tsx
import { Link, useParams } from "react-router";
import ButtonProyecto from "~/components/atoms/Button";
import React from "react";

export default function Projects() {
    const { projectId } = useParams();

    if (projectId) {
        return <ProjectDetail projectId={projectId} />;
    }

    const projects = [
        {
            id: 'proyecto-1',
            title: 'Proyecto de ingenieria de software',
            description: 'Desarrollo de pagina web para aduana chilena',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
        },
        {
            id: 'proyecto-2',
            title: 'Proyecto de fullstack',
            description: 'Desarrollo de aplicacion movil para ayuda de estudiantes naurodivergentes',
            image: 'https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1.jpeg'
        },
        {
            id: 'proyecto-3',
            title: 'Proyecto de fullstack ',
            description: 'Desarrollo de pagina web para emprendimiento de venta de abarrotes',
            image: "https://blog.wearedrew.co/hs-fs/hubfs/mejora%20de%20procesos.jpg?width=600&height=2000&name=mejora%20de%20procesos.jpg"
        }
    ];

    return (
        <main className="projects" style={{ paddingTop: '80px' }}>
            <div className="container">
                <h1>Mis Proyectos</h1>
                <div className="navbar-buttons" style={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    backgroundColor: 'white',
                    padding: '10px 20px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                    display: 'flex',
                    gap: '15px',
                    justifyContent: 'flex-end'
                }}>
                    <ButtonProyecto text="Inicio" page="/" />
                    <ButtonProyecto text="Mi Proyecto" page="/projects" />
                    <ButtonProyecto text="Experiencia" page="/experience" />
                    <ButtonProyecto text="Acerca de mi" page="/about" />
                </div>
                <div className="projects-grid">
                    {projects.map(project => (
                        <Link key={project.id} to={`/projects/${project.id}`} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}

function ProjectDetail({ projectId }: { projectId: string }) {
    const projectsData: { [key: string]: any } = {
        'proyecto-1': {
            title: 'Proyecto 1',
            description: 'Descripción detallada del proyecto 1...',
            technologies: ['React', 'TypeScript', 'Node.js'],
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        'proyecto-2': {
            title: 'Proyecto 2',
            description: 'Descripción detallada del proyecto 2...',
            technologies: ['Vue', 'JavaScript', 'Express'],
            image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
        'proyecto-3': {
            title: 'Proyecto de fullstack',
            description: 'Desarrollar pagina web para emprendimiento de venta de verduras y demas',
            technologies: ['Angular', 'TypeScript', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        },
    };

    const project = projectsData[projectId];

    if (!project) {
        return (
            <main className="projects" style={{ paddingTop: '80px' }}>
                <div className="container">
                    <h1>Proyecto no encontrado</h1>
                    <Link to="/projects">Volver a proyectos</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="projects" style={{ paddingTop: '80px' }}>
            <div className="container">
                <Link to="/projects" className="nav-link">← Volver a proyectos</Link>
                <div className="project-detail-content">
                    <div className="project-detail-image">
                        <img src={project.image} alt={project.title} />
                    </div>
                    <div className="project-detail-info">
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <div className="technologies">
                            <h3>Tecnologías utilizadas:</h3>
                            <div className="tech-tags">
                                {project.technologies.map((tech: string, index: number) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}