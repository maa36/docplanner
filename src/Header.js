import React, { Component } from 'react';
import Menu from './menu'
const menu = [
	{
		name : 'About us'
	}
	,
	{
		name : 'Career'
	}
	,
	{
		name : 'Departements'
	}


]



function Header()  {
    return (
			<div className="docplanner-header">
				<div>
					<img className="logo-docplanner-header" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" />
				</div>

				<nav className="menu">	
				    <Menu  listnav={menu}/>			
				</nav>
			</div>
      
    
		);
  }

export default Header;
