import React from 'react';
import { Space } from 'antd';
import Menudes from "~/components/molecules/Menudes";
import Enlace from "~/components/atoms/Enlace";


const MenuDesktop: React.FC = () => {
    const proyectosItems = [
        { nombre: "Proyecto 1", ruta: "/proyectos/proyecto-1" },
        { nombre: "Proyecto 2", ruta: "/proyectos/proyecto-2" },
        { nombre: "Proyecto 3", ruta: "/proyectos/proyecto-3" }
    ];

    const experienciaItems = [
        { nombre: "Empresa A", ruta: "/experiencia" },
        { nombre: "Empresa B", ruta: "/experiencia" }
    ];

    return (
        <Space size="large" style={{ marginRight: '20px' }}>
            <Menudes titulo="Proyectos" items={proyectosItems} />
            <Menudes titulo="Experiencia" items={experienciaItems} />
            <Enlace to="/acerca-de">
                Acerca de mí
            </Enlace>
        </Space>
    );
};

export default MenuDesktop;