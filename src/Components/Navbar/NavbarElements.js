import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

const coklatKrem = "#D2B48C"; // Warna coklat krem
const white = "#FFFFFF"; // Warna putih
const black = "#000000"; // Warna hitam

export const Nav = styled.nav`
    background: ${coklatKrem}; /* Ubah warna navbar menjadi coklat krem */
    height: 85px;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 20px;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: ${white}; /* Ubah warna menu di navbar menjadi putih */
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: ${black}; /* Ubah warna menu di navbar saat diklik menjadi hitam */
    }
`;

export const Bars = styled(FaBars)`
    display: none;
    color: ${white}; /* Ubah warna ikon bars menjadi putih */
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(25%, 25%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const PageContainer = styled.div`
    padding: 40px;
`;
