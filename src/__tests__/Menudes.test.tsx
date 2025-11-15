// src/components/molecules/__tests__/Menudes.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MenuDesplegable from '~/components/molecules/Menudes';

const MockRouter = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>{children}</BrowserRouter>
);

const mockItems = [
    { nombre: 'Proyecto 1', ruta: '/proyectos/1' },
    { nombre: 'Proyecto 2', ruta: '/proyectos/2' },
];

describe('MenuDesplegable', () => {
    test('renderiza el título del menú', () => {
        render(
            <MockRouter>
                <MenuDesplegable titulo="Proyectos" items={mockItems} />
            </MockRouter>
        );

        expect(screen.getByText('Proyectos')).toBeInTheDocument();
    });

    test('renderiza el ícono de flecha', () => {
        render(
            <MockRouter>
                <MenuDesplegable titulo="Proyectos" items={mockItems} />
            </MockRouter>
        );

        // El ícono de Antd debería estar presente
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});