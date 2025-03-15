import React from 'react'
import Courosel from './Courosel'
import Welcome from './Welcome'
import Api from './circle/Api'
import Counter from './Counter'
import Whycho from './Whycho'



const Home = () => {
  return (
    <div>
        <Courosel/>
        <Welcome/>
        <h3 style={{textAlign:"center", color:'palevioletred'}}>Services We Provide</h3>
        
        <Api/>
        
        <Whycho/>
        
       
        <Counter/>
        
        

    </div>
  )
}

export default Home