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
                       <h1 className="text-4xl text-gray-600 font-Poppins">A <span className="text-blue-500">Digital Creative <br />Agency</span> from Nigeria</h1>
                       <p className="text-gray-600 mt-3 pr-24 font-Mont">
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, culpa earum dolores unde veniam suscipit aperiam eaque? Dolore, qui beatae dolorem mollitia possimus aliquid, corrupti voluptatum illum, culpa esse placeat.
                       </p>
                       <div>
                           <OutlineButton message="Contact Us" action={this.showMessage} />
                       </div>
                       <div className="font-Mont text-gray-600 more-content pt-6">
                           <img src={Arrow_Down} alt="" className="h-10 mt-10"/>
                           <p className="pt-2 text-sm">Scroll for more content</p>
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
