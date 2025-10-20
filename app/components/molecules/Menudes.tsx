import React from 'react';
import { Dropdown, Menu, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

interface ItemMenu {
    nombre: string;
    ruta: string;
}

interface MenuDesplegableProps {
    titulo: string;
    items: ItemMenu[];
}

const MenuDesplegable: React.FC<MenuDesplegableProps> = ({ titulo, items }) => {
    const menu = (
        <Menu
            items={items.map((item, index) => ({
                key: index.toString(),
                label: (
                    <Link to={item.ruta} style={{ textDecoration: 'none' }}>
                        {item.nombre}
                    </Link>
                ),
            }))}
        />
    );

    return (
        <Dropdown overlay={menu} placement="bottomLeft" trigger={['hover', 'click']}>
            <Button
                type="text"
                style={{
                    color: 'white',
                    border: 'none',
                    background: 'transparent',
                    fontWeight: '500',
                    fontSize: '16px',
                    height: 'auto',
                    padding: '8px 16px'
                }}
            >
                {titulo} <DownOutlined style={{ fontSize: '12px', marginLeft: '4px' }} />
            </Button>
        </Dropdown>
    );
};

export default MenuDesplegable;