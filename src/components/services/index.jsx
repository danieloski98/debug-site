import React, { Component, Fragment } from 'react';
import './css/index.css';
import Img from '../../assets/imgs/17.svg'
import Brand from '../../assets/imgs/brand.svg';
import Digital from '../../assets/imgs/digital.svg';
import Web from '../../assets/imgs/web.svg';
import OutlineButton from '../frequent/outlinebutton/index.jsx';

export class Services extends Component {

    showMessage() {
        alert("Button clicked");
    }
    render() {
        return (
           <Fragment>
               <div className=" mt-16 pl-16 pr-16 overflow-y-hidden">
                   {/** write ups */}

                   <div className="text-center text-2xl text-blue-500 font-Poppins">
                       Services
                   </div>
                   <div className="text-center text-4xl mt-8 text-gray-500 font-Poppins">
                      What we do
                   </div>
                   <div className="text-center text-gray-500 text-lg mt-6 pl-64 pr-64">
                       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam vero deleniti ducimus nostrum modi voluptatum quisquam nihil, iste officiis sed, molestiae saepe voluptate neque quia sequi incidunt tempore animi omnis autem! Sit ex molestias nihil Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quaerat facere saepe commodi magnam quod!
                   </div>

                   {/** flex section */}

                   <div className="w-auto flex mt-40">


                       <div className="flex-1">
                           <img src={Img} alt=""/>
                       </div>


                       <div className="flex-1 h-64 ml-16 box">
                           {/** boxes */}
                          <div className="flex-col">

                          <div className="flex flex-col">
                               <div className="flex">
                                   <div>
                                       <img src={Brand} alt=""/>
                                   </div>
                                   <div className="text-2xl mt-2 text-gray-500 font-Poppins ml-10">
                                       Branding
                                   </div>
                               </div>
                               <div>
                                   <div className=" mt-2 write-up text-gray-500">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a esse maxime at exercitationem possimus molestiae illo ipsum nihil laudantium Lorem ipsum.
                                   </div>
                               </div>
                           </div>

                           <div className="flex flex-col mt-6">
                               <div className="flex">
                                   <div>
                                       <img src={Digital} alt=""/>
                                   </div>
                                   <div className="text-2xl text-gray-500 font-Poppins ml-10 mt-2">
                                       Digital Marketting
                                   </div>
                               </div>
                               <div>
                                   <div className=" mt-2 write-up text-gray-500">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a esse maxime at exercitationem possimus molestiae illo ipsum nihil laudantium Lorem ipsum dolor.
                                   </div>
                               </div>
                           </div>

                           <div className="flex flex-col mt-6">
                               <div className="flex">
                                   <div>
                                       <img src={Web} alt=""/>
                                   </div>
                                   <div className="text-2xl text-gray-500 font-Poppins ml-10 mt-2">
                                       Web and Mobile Development
                                   </div>
                               </div>
                               <div>
                                   <div className=" mt-2 write-up text-gray-500">
                                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi a esse maxime at exercitationem possimus molestiae illo ipsum nihil laudantium Lorem ipsum dolor.
                                   </div>
                               </div>
                           </div>

                          </div>
                       </div>

                   </div>

                   <div className=" h-16 flex justify-center mb-10">
                   <OutlineButton message="Learn More" action={this.showMessage} />
                   </div>
               </div>
           </Fragment>
        )
    }
}

export default Services
