import { Link } from 'react-router-dom';
import FooterLinks from './UI/Footer-Links';
import React from 'react';

export default function Footer() {
    return (
        <footer>
        <FooterLinks />
        <Link to="/home">Home</Link>
        </footer>
    );
}