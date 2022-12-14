import './home.css'
import React from 'react';
import Example from './Modal';
import img from '../Image/merry.png'

function Home (){
      return(
        <div id="container">
           <div id="banner">
                <div className='row' style={{alignItem:"center", justifyContent:"center",textAlign:"center"}}>
                    <div className='column'>
                        <div style={{textAlign:"center"}}>
                            <img src={img} width="350"  style={{paddingTop:"100px"}} alt=""/>
                            
                        </div>

                    </div>
                </div>
                
           </div>         
           <Example />       
        </div>
      )
}
export default Home