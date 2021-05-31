import React from 'react';
// Need to import fontawesome module using these 3 commands :
// 1. npm i --save @fortawesome/fontawesome-svg-core
// 2. npm install --save @fortawesome/react-fontawesome
// 3. npm install --save @fortawesome/free-solid-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import "../../styles/Home/_scrolltop.scss"
class Scrolltop extends React.Component {
  
    func(){
        var scrollInterval = setInterval(function (){
            window.scrollBy(0,-100);
            if(window.pageYOffset<=0){
                clearInterval(scrollInterval);
            }
        },20);
    }


    render() { 
        return ( 
    
            <button className="arrow-up-button" onClick={this.func} >
              <FontAwesomeIcon className="faArrowUp" icon={faArrowUp} />
            </button>
     
         );
    }
}
 
export default Scrolltop;