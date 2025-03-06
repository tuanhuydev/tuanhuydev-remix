import { useEffect, useState } from 'react';


export const Header = () => {
    const [showAtBottom, setShowAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // You can adjust this threshold as needed
            const scrollThreshold = 100;
            setShowAtBottom(window.scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed z-10 px-3 py-2 bg-white shadow left-1/2 -translate-x-1/2 
            ${showAtBottom ? 'bottom-4' : 'top-0'}`}>
            Header
        </header>
    );
};
