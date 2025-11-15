// routes/__tests__/about.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '~/routes/about';

const MockRouter = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>{children}</BrowserRouter>
);

describe('About', () => {
    test('renderiza la información personal', () => {
        render(
            <MockRouter>
                <About />
            </MockRouter>
        );

        expect(screen.getByText('Acerca de Mí')).toBeInTheDocument();
        expect(screen.getByText(/Soy Fernanda Alcaino/)).toBeInTheDocument();
    });

    test('muestra la lista de habilidades', () => {
        render(
            <MockRouter>
                <About />
            </MockRouter>
        );

        expect(screen.getByText('Habilidades')).toBeInTheDocument();
        expect(screen.getByText('Desarrollo Frontend (HTML,React)')).toBeInTheDocument();
        expect(screen.getByText('Desarrollo Backend (Python y Java)')).toBeInTheDocument();
        expect(screen.getByText('Bases de datos (SQL y PL/SQL)')).toBeInTheDocument();
    });
});