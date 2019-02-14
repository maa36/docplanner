import React from  'react'

const Menu= (props) =>
  props.listnav.map((p, i) =>
    <div key={i}  href="#"  >
        <a href="#">{p.name}</a>
    </div>)



export default Menu