import React, { Component } from 'react';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Company from '../../assets/icons/company.svg';


export class Footer extends Component {
    render() {
        return (
            <div className="w-screen bg-gray-900 pl-16 pr-16 pt-16 overflow-y-hidden">
                <div className="flex justify-around">
                    <div className="flex-1 h-24 flex-col">
                        <img src={Company} alt="" width="100"/>
                        <div className="text-lg text-white font-Heebo">Creative Digital Agency</div>
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
                    <div className="flex-1 h-24 flex-col">
                        <div className="text-xl text-white font-Poppins">Pages</div>
                        <div className="text-white font-Heebo text-sm mt-2">Partner</div>
                        <div className="text-white font-Heebo text-sm mt-2">Contact Us</div>
                        <div className="text-white font-Heebo text-sm mt-2">Legal</div>
                    </div>
                    <div className="flex-1 h-24 flex-col">
                        <div class="text-white font-Heebo">
                            Subscribe to our newsletter
                        </div>
                        <div className="flex mt-4">
                            <div>
                                <input type="text" className="w-64 h-10 pl-2 pr-2 rounded"/>
                            </div>
                            <div>
                                <button className="w-24 rounded h-10 text-white bg-blue-500 text-sm ml-1">Subscribe</button>
                            </div>
                        </div>
                        <div class="text-white text-sm mt-4 font-Heebo">
                           We promise not to spam your email
                        </div>
                    </div>
                </div>

                <div className="text-center text-sm text-white mt-16">
                    &copy; 2019 The Bug Technology ( RC 2602263 )
                </div>
                <div className="text-center text-sm text-white mt-2">
                   Made by Daniel
                </div>
            </div>
        )
    }
}

export default Footer
