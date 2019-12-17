import React, { Fragment } from 'react';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Instagram from '../../assets/icons/instagram.svg';

export default class Navbar extends React.Component {
    render() {
        return (
            <Fragment>
               <div className="w-screen h-20 pl-16 pr-16">
                <div className="flex justify-between">

                    <div className="flex">
                        <div className="logo">
                            <p className="font-bold text-blue-500 mt-5 text-2xl  font-Poppins">DEBUG</p>
                        </div>
                        <div className="links flex justify-around pt-6 ml-40 font-bold text-gray-500 mt-1">
                            <div>
                                <a href="index.html">About</a>
                            </div>
                            <div className="pl-6">
                                <a href="index.html">Services</a>
                            </div>
                            <div className="pl-6">
                                <a href="index.html">Portfolio</a>
                            </div>
                            <div className="pl-6">
                                <a href="index.html">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex font-bold">
                        <div className="mt-5 text-2xl">
                            <img src={Facebook} alt="" className="p-1 rounded  bg-blue-500"/>
                        </div>
                        <div className="mt-5 text-2xl ml-6">
                            <img src={Twitter} alt="" className="p-1 rounded "/>
                        </div>
                        <div className="mt-5 text-2xl ml-6">
                            <img src={Instagram} alt="" className="p-1 rounded"/>
                        </div>
                    </div>


                </div>
               </div>
            </Fragment>
        );
    }
}