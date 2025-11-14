import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ButtonProyecto from '../Button';
import test from "node:test";
import {render} from "@testing-library/react";

//Wrapper para componentes que usan React Router
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