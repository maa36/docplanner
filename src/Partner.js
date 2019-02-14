import React from 'react'

const Partner = (props) =>
  props.partnerList.map((p, i) =>
  <a key={i} href="#" class="logo-docplanner" ><svg class="image-link"  xmlns="http://www.w3.org/2000/svg" width={p.width} height="32" viewBox="0 0 200 32">
  <path d={p.path}></path>
    </svg></a>
  )

export default Partner;