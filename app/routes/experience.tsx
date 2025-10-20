// routes/experience.tsx
import ButtonProyecto from "~/components/atoms/Button";
import React from "react";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            title: 'Certificacion',
            period: '2024',
            description: 'Certificacion de Python'
        },
        {
            id: 2,
            title: 'Desarrollador Full Stack',
            company: 'Proyectos de Instituto',
            period: '2024',
            description: 'Desarrollo de proyectos de clase de fullstack'
        }
    ];

    return (
        <main className="experience" style={{ paddingTop: '80px' }}>
            <div className="container">
                <h1>Mi Experiencia</h1>
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
                <div className="experience-list">
                    {experiences.map(exp => (
                        <div key={exp.id} className="experience-item">
                            <h3>{exp.title}</h3>
                            <h4>{exp.company} | {exp.period}</h4>
                            <p>{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}