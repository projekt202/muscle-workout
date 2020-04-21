import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Link className="logo"to="/">M</Link>
    </header>
  )
}

export default Header;