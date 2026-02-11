import React, { useState, useEffect } from 'react';

interface SecretGatewayProps {
    onEnterSecret: () => void;
}

const SecretGateway = ({ onEnterSecret }: SecretGatewayProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key.toLowerCase() === 'x') {
                event.preventDefault();
                setIsVisible((prev) => !prev);
                console.log("Secret gateway toggled");
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!isVisible) return null;

    return (
        <button
            onClick={onEnterSecret}
            style={styles.hiddenButton}
            title="Go to Lab"
        >
            π
        </button>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    hiddenButton: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#1a1a1a',
        color: '#333',
        border: '1px solid #333',
        cursor: 'pointer',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px',
        opacity: 0.5,
        transition: 'opacity 0.3s',
    }
};

export default SecretGateway;