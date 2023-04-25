import React from 'react';
import MenuItem from './MenuItem.jsx';
import {asideMenuItem} from '../constant'

const Aside = () => {
  return (
    <>
    {asideMenuItem.map(item => <MenuItem text={item.text} icon={item.icon}/>)}
    </>
  )
};

export default Aside;
