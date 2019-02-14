import React from 'react'


const City= (props) =>
  props.cityList.map((p, i) =>
    <div key={i}  href="#" className="city" >
        <a href="#"><img class="image-city" scr={p.image} srcset={p.scset}/></a>
        <div class="name-city">
            <a href="#">{p.titre}</a>
            <button class="button-link"><a href="#" >SEE OPENINGS</a></button>
        </div>
    </div>)

export default City;