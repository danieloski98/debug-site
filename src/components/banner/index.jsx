import React, { Component, Fragment } from 'react'
import First from '../../assets/imgs/second.png';
import Arrow_Down from '../../assets/icons/arrow-down.svg';
import './css/index.css'
import OutlineButton from '../frequent/outlinebutton/index'

export default class Banner extends Component {

    showMessage() {
        alert("Contact Us");
    }
    render() {
        return (
           <Fragment>
               <div className="pl-16 flex">
                   <div className="left-section flex-1 h-64 ">
                       <h1 className="text-4xl text-black font-Poppins">A <span className="text-blue-500">Software Development <br />Company</span> from Port Harcourt</h1>
                       <p className="text-black mt-3 pr-24 font-Heebo">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, culpa earum dolores unde veniam suscipit aperiam eaque? Dolore, qui beatae dolorem mollitia possimus aliquid, corrupti voluptatum illum, culpa esse placeat.
                       </p>
                       <div>
                           <button className=" p-4 mt-6 rounded-l-full rounded-r-full bg-blue-500 w-56 shadow-xl text-white text-sm font-Heebo">
                               Contact Us
                           </button>
                       </div>
                       <div className="font-Mont text-black more-content pt-6">
                           <img src={Arrow_Down} alt="" className="h-10 mt-10"/>
                           <p className="pt-2 text-sm font-Heebo">Scroll for more content</p>
                       </div>
                   </div>
                   <div className="flex-1 overflow-x-hidden overflow-y-auto">
                      <div className="banner-img"></div>
                   </div>
               </div>
           </Fragment>
        )
    }
}
