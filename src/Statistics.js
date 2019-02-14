import React from 'react'


const Statistics= (props) =>
  props.platformList.map((p, i) =>
  <div key={i} id={"plateform-" + i+1} href="#" className="bloc" >
    <img scr={p.image} srcset={p.scset}/>
    <h2>{p.titre}</h2>
    <p>{p.paragraph}</p>
  </div>)

export default Statistics;