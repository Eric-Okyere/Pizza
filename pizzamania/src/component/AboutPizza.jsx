
import React from 'react'

function AboutPizza({title}) {
  return (
    <>
    <h1 class="text-center">About {title}</h1>
   
<div class="col-md-6 col">
    <img src="Pic/13.jpg" className='aboutpic' alt=""/>
</div>
<div class="col-md-6 col2">
    <h3 className='para'>Since its humble beginnings in Italy, pizza has gone through numerous transformations to become the dish that so many people know and love today. But if you’re just opening your first pizza place or want to add a pizza oven in your restaurant, it can be difficult to decide what style of pizza your restaurant will make. We discuss the different types of pizza, their history, and what you’ll need to make them, so you can start serving up delicious slices to your guests.</h3>



</div>
    </>
  )
}

export default AboutPizza