import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import React from 'react';


export default function Nav() {
    return (
        <Navbar
        links={[
            <Link key={1} to="/">
                Home
            </Link>,
            <Link key={2} to="/about">
                About
            </Link>,
            <Link key={3} to="/portfolio">
                    Portfolio
                </Link>,
            <Link key={4} to="/contact">
                Contact
            </Link>,
            <Link key={5} to="/resume">
                Resume
            </Link>,
        ]}
        />
    );
}