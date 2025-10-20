import React from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

interface EnlaceNavegacionProps {
    to: string;
    children: React.ReactNode;
    onClic?: () => void;
}

const EnlaceNavegacion: React.FC<EnlaceNavegacionProps> = ({ to, children, onClic }) => {
    return (
        <Button
            type="text"
            onClick={onClic}
            style={{
                color: 'white',
                border: 'none',
                background: 'transparent',
                fontWeight: '500'
            }}
        >
            <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
                {children}
            </Link>
        </Button>
    );
};

export default EnlaceNavegacion;