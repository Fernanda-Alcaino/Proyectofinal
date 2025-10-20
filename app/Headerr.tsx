import React from "react";
import ButtonProyecto from "~/components/atoms/Button";


export default function Header() {
    return (
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
            justifyContent: 'flex-end',
            width: '100%'
        }}>
            <ButtonProyecto text="Inicio" page="/" />
            <ButtonProyecto text="Mi Proyecto" page="/proyectos" />
            <ButtonProyecto text="Experiencia" page="/experiencia" />
            <ButtonProyecto text="Acerca de mi" page="/acerca-de" />
        </div>
    );
}