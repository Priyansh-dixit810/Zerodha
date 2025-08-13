import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const menuclass = "menu";
const selectedmenuclass = "menu selected";


function Menu() {
    const [selectedMenu, setSelectedMenu] = useState(()=>{
        const savedMenu = localStorage.getItem('selectedMenu');
        return savedMenu!==null ? Number(savedMenu) : 0; 
    });
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    let handleMenuClick = (index) => {
        setSelectedMenu(index);
    }

    let handleProfileClick = () => {
        setSelectedMenu(!isDropDownOpen);
    }

    const menuclass = "menu";
    const activemenuclass = "menu selected";

    useEffect(()=>{
        localStorage.setItem("selectedMenu",selectedMenu)
    },[selectedMenu]);
    return (
        <div className='menu-container'>
            <img src='logo.png' style={{width: "50px"}}/>
            <div className='menus'>
                <ul>
                    <li>
                        <Link style={{textDecoration: "none"}} to='/' onClick={()=>{handleMenuClick(0)}}><p className={selectedMenu===0 ? activemenuclass : menuclass}>DashBoard</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: "none"}} to='/orders' onClick={()=>{handleMenuClick(1)}}><p className={selectedMenu===1 ? activemenuclass : menuclass}>Orders</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: "none"}} to='/holdings' onClick={()=>{handleMenuClick(2)}}><p className={selectedMenu===2 ? activemenuclass : menuclass}>Holdings</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: "none"}} to='/positions' onClick={()=>{handleMenuClick(3)}}><p className={selectedMenu===3 ? activemenuclass : menuclass}>position</p></Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: "none"}} to='/funds' onClick={()=>{handleMenuClick(4)}}><p className={selectedMenu===4 ? activemenuclass : menuclass}>funds</p></Link>

                    </li>
                    <li>
                        <Link style={{textDecoration: "none"}} to='/apps' onClick={()=>{handleMenuClick(5)}}><p className={selectedMenu===5 ? activemenuclass : menuclass}>apps</p></Link>
                    </li>
                </ul>
                <div className='profile' onClick={handleProfileClick}>
                    <div className='avatar'>ZU</div>
                    <div className='username'>USERID</div>
                </div>
            </div>
        </div>
        
    );
}

export default Menu;