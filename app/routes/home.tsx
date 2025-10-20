import React from "react";
import ButtonProyecto from "~/components/atoms/Button";
// Importa la imagen directamente
import fotoPortafolio from "../assets/images/Fotoportafolio.jpg"; // Ajusta la ruta según tu estructura

export default function Home() {
    return (
        <main className="home">
            {/* Contenedor para los botones en la parte superior derecha */}
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

            {/* Contenido principal con margen superior para evitar superposición */}
            <div className="container" style={{ marginTop: '80px' }}>
                <div className="home-content">
                    <div className="home-image">
                        <img
                            src={fotoPortafolio}
                            alt="Fernanda Alcaino"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                maxWidth: '400px' // Ajusta el tamaño según necesites
                            }}
                        />
                    </div>
                    <div className="home-text">
                        <h1>Bienvenido a mi portafolio</h1>
                        <p>
                            Soy Fernanda Alcaino, una estudiante del instituto profesional Duoc Uc
                        </p>
                        <p>
                            En este portafolio encontrarás algunos de mis proyectos, mi experiencia como estudiante y más información sobre mí.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}