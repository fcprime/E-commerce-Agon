import React from 'react';
import './Menu.scss';

const Menu = ({ header, items, active, setActive }) => {
  return (
    <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
      <div className="blur">
        <div className="burger__menu" onClick={(e) => e.stopPropagation()}>
          <ul>
            {items.map((item) => (
              <li>
                <a href={item.href}>{item.value}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
