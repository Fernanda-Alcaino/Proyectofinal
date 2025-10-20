import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface Buttonproyecto {
    text: string,
    page?: string
}

export default function ButtonProyecto({text, page}: Buttonproyecto) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (page) {
            navigate(page);
        }
    };

    return (
        <Button
            type="text"
            style={{
                border: 'none',
                boxShadow: 'none',
                backgroundColor: 'transparent',
                color: '#000',
                fontWeight: '500',
                fontSize: '16px',
                cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            {text}
        </Button>
    );
}