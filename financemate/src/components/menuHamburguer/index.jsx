import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import MenuLateral from './MenuLateral';

const BarraLateral = styled.div`
    background-color: #333;
    width: 80px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: fixed;
    height: 100%;
    border: 0px;
    margin-top: 70px;
    z-index: 2;
`;

const BotaoMenu = styled.button`
    background-color: transparent;
    border: 0px;
    color: white;
    cursor: pointer;
    margin-top: 10px;
    font-size: 25px;
    &:hover {
        color: #979797;
    }
`;

const MenuContainer = styled.div`
    width: 250px;
    margin-left: 80px;
    margin-top: 70px;
    background-color: #ffffff;
    height: 100%;
    position: fixed;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    opacity: ${(props) => (props.$isVisible ? 1 : 0)};
    transform: ${(props) => (props.$isVisible ? 'translateX(0)' : 'translateX(-100%)')};
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: ${(props) => (props.$isVisible ? 'auto' : 'none')};
    z-index: 1; 
`;

const MenuHamburguer = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setMenuVisible((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setMenuVisible(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
            <BarraLateral>
                <BotaoMenu ref={buttonRef} onClick={toggleMenu}>
                    ☰
                </BotaoMenu>
            </BarraLateral>
            <MenuContainer ref={menuRef} $isVisible={isMenuVisible}>
                <MenuLateral onClose={() => setMenuVisible(false)} />
            </MenuContainer>
        </>
    );
};

export default MenuHamburguer;
