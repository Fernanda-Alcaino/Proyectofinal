// routes/about.tsx
import ButtonProyecto from "~/components/atoms/Button";
import React from "react";

export default function About() {
    return (
        <main className="about" style={{ paddingTop: '80px' }}>
            <div className="container">
                <h1>Acerca de Mí</h1>
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
                <div className="about-content">
                    <div className="about-text">

                        <p>
                            Soy Fernanda Alcaino, una estudiante del instituto profesional Duoc Uc con pasión por crear soluciones
                            tecnológicas que impacten positivamente en la vida de las personas.
                        </p>
                        <p>
                            Mi experiencia incluye trabajar con java, python y estoy aprendiendo HTML.
                            Me gusta mantenerme actualizada con el desarrollo de la tecnologia y participar en proyectos desafiantes.
                        </p>
                        <h2>Habilidades</h2>
                        <ul>
                            <li>Desarrollo Frontend (HTML,React)</li>
                            <li>Desarrollo Backend (Python y Java)</li>
                            <li>Bases de datos (SQL y PL/SQL)</li>

                        </ul>
                    </div>

                </div>
            </div>
        </main>
    );
}