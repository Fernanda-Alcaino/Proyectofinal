import React from 'react';
import { Link } from "react-router-dom";
import { Typography } from 'antd';

const { Title } = Typography;

interface LogoProps {
    tamaño?: 'pequeno' | 'mediano' | 'grande';
}

const Logo: React.FC<LogoProps> = ({ tamaño = 'mediano' }) => {
    const nivelesTitulo: Record<'pequeno' | 'mediano' | 'grande', 1 | 3 | 5> = {
        pequeno: 5,
        mediano: 3,
        grande: 1
    };

    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Title
                level={nivelesTitulo[tamaño]}
                style={{
                    color: 'white',
                    margin: 0,
                    fontWeight: 'bold'
                }}
            >
                MiPortafolio
            </Title>
        </Link>
    );
};

export default Logo;