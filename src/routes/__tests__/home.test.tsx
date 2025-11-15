
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from "~/routes/home";


jest.mock('../assets/images/Fotoportafolio.jpg', () => 'test-image.jpg');

jest.mock('../../components/atoms/Button', () => ({
    __esModule: true,
    default: function ButtonProyecto(props: { text: string; page?: string }) {
        return <button>{props.text}</button>;
    }
}));



describe('Home', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renderiza el contenido principal', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByText('Bienvenido a mi portafolio')).toBeInTheDocument();
        expect(screen.getByText(/Soy Fernanda Alcaino/)).toBeInTheDocument();
    });

    test('renderiza los botones de navegación', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        expect(screen.getByText('Inicio')).toBeInTheDocument();
        expect(screen.getByText('Mi Proyecto')).toBeInTheDocument();
        expect(screen.getByText('Experiencia')).toBeInTheDocument();
        expect(screen.getByText('Acerca de mi')).toBeInTheDocument();
    });

    test('muestra la imagen del portafolio', () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );

        const image = screen.getByAltText('Fernanda Alcaino');
        expect(image).toBeInTheDocument();
    });
});