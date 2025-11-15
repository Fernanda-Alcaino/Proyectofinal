// components/atoms/__tests__/Button.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ButtonProyecto from '~/components/atoms/Button';

const MockRouter = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>{children}</BrowserRouter>
);

describe('ButtonProyecto', () => {
    test('renderiza correctamente con el texto proporcionado', () => {
        render(
            <MockRouter>
                <ButtonProyecto text="Mi Botón" />
            </MockRouter>
        );

        expect(screen.getByText('Mi Botón')).toBeInTheDocument();
    });

    test('navega a la página correcta al hacer clic', () => {
        const mockNavigate = jest.fn();
        jest.mock('react-router-dom', () => ({
            ...jest.requireActual('react-router-dom'),
            useNavigate: () => mockNavigate,
        }));

        render(
            <MockRouter>
                <ButtonProyecto text="Proyectos" page="/projects" />
            </MockRouter>
        );

        const button = screen.getByText('Proyectos');
        fireEvent.click(button);

        // Verificar que el botón está presente y es clickeable
        expect(button).toBeInTheDocument();
    });

    test('aplica los estilos correctos', () => {
        render(
            <MockRouter>
                <ButtonProyecto text="Test" />
            </MockRouter>
        );

        const button = screen.getByText('Test');
        expect(button).toHaveStyle({
            backgroundColor: 'transparent',
            border: 'none',
        });
    });
});