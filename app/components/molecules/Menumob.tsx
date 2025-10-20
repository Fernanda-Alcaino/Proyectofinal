import React from 'react';
import { Drawer, Space } from 'antd';
import EnlaceNavegacion from "../../atomos/EnlaceNavegacion/EnlaceNavegacion";

interface MenuMobileProps {
    abierto: boolean;
    onCerrar: () => void;
}

const MenuMobile: React.FC<MenuMobileProps> = ({ abierto, onCerrar }) => {
    return (
        <Drawer
            title="Menú"
            placement="right"
            onClose={onCerrar}
            open={abierto}
            styles={{
                body: { padding: '20px' }
            }}
        >
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
                <EnlaceNavegacion to="/projects" onClic={onCerrar}>
                    Proyectos
                </EnlaceNavegacion>
                <EnlaceNavegacion to="/experience" onClic={onCerrar}>
                    Experiencia
                </EnlaceNavegacion>
                <EnlaceNavegacion to="/about" onClic={onCerrar}>
                    Acerca de mí
                </EnlaceNavegacion>
            </Space>
        </Drawer>
    );
};

export default MenuMobile;