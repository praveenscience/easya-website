import React,{useState,useEffect} from 'react';
// Need to import fontawesome module using these 3 commands :
// 1. npm i --save @fortawesome/fontawesome-svg-core
// 2. npm install --save @fortawesome/react-fontawesome
// 3. npm install --save @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import "../../styles/Home/_scrolltop.scss"
function Scrolltop() {
    const showbelow = 500;
    const [show,setShow] = useState(showbelow? false:true)
        
    const scrolltoTop=()=>{
        window[`scrollTo`]({top:0,behavior:'smooth'})
    }
        const handleScroll=()=>{
            if(window.pageYOffset>showbelow){
                if(!show){
                    setShow(true);
                }
            }else{
                if(show){
                    setShow(false);
                }
            }
        };
        useEffect(()=>{
            if(showbelow){
                window.addEventListener(`scroll`,handleScroll);
                return () =>window.removeEventListener(`scroll`,handleScroll);
            }
        });
        return ( 
           <div>
           {show &&(            
            <button className="arrow-up-button btnScrollToTop" 
            onClick={scrolltoTop}
            style={{
                visibility:"visible",
                background:"rgba(106,0,187)",
                color:"#fff"
            }} >
              <FontAwesomeIcon className="faArrowUp" icon={faArrowUp} />
            </button>)}
            </div>
     
         );
}
 
export default Scrolltop;