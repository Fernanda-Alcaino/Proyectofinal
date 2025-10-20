import React from 'react';
import { Button, Space } from 'antd';
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            backgroundColor: '#7c3aed',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            zIndex: 1000,
            borderBottom: '2px solid white'
        }}>
            {/* Logo */}
            <div style={{
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
                cursor: 'pointer'
            }} onClick={() => navigate('/')}>
                MI PORTAFOLIO
            </div>

            {/* Botones - ESTOS DEBEN SER VISIBLES */}
            <Space>
                <Button
                    type="primary"
                    style={{
                        backgroundColor: 'white',
                        color: '#7c3aed',
                        fontWeight: 'bold',
                        border: 'none',
                        padding: '8px 16px',
                        height: 'auto'
                    }}
                    onClick={() => navigate('/proyectos')}
                >
                    📁 PROYECTOS
                </Button>

                <Button
                    type="primary"
                    style={{
                        backgroundColor: 'white',
                        color: '#7c3aed',
                        fontWeight: 'bold',
                        border: 'none',
                        padding: '8px 16px',
                        height: 'auto'
                    }}
                    onClick={() => navigate('/experiencia')}
                >
                    💼 EXPERIENCIA
                </Button>

                <Button
                    type="primary"
                    style={{
                        backgroundColor: 'white',
                        color: '#7c3aed',
                        fontWeight: 'bold',
                        border: 'none',
                        padding: '8px 16px',
                        height: 'auto'
                    }}
                    onClick={() => navigate('/acerca-de')}
                >
                    👤 ACERCA DE MÍ
                </Button>
            </Space>
        </div>
    );
};

export default Header;