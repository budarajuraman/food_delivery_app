import React from 'react'
import './Explore.css'
import { menu_list } from '../../assets/assets'

const Explore = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Discover a world of flavors with our menu. From delicious pizzas to fresh salads, we have something for everyone. Browse through our menu and place your order today!</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=> prev=== item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}

        </div>
        <hr />
      
    </div>
  )
}

export default Explore
