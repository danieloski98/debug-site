import React, { Component } from 'react'
import './css/index.css';
import Arrow from '../../assets/icons/arrow-right.svg';

export class Message extends Component {
    render() {
        return (
            <div className="pb-24">
                <div >
                    <div className="text-center font-Poppins text-blue-600 text-xl mt-40">Contact Us</div>
                    <div className="text-center font-Poppins text-black text-4xl mt-6">
                        Leave us a Message
                    </div>
                    <div className="flex justify-center mt-10">

                        <div className=" box ">
                            <div className="w-auto">
                                <input type="text" placeholder="Name" className="w-full focus:outline-none border-b-2 border-gray-500
                                focus:border-blue-500"/>
                            </div>
                            <div className="w-auto mt-10">
                                <input type="text" placeholder="Email" className="w-full focus:outline-none border-b-2 border-gray-500
                                focus:border-blue-500"/>
                            </div>
                            <div className="w-auto mt-10">
                                <textarea col="4" className="w-full focus:outline-none border-b-2 border-gray-500
                                focus:border-blue-500 text-gray-500">
                                    Type your message
                                </textarea>
                            </div>
                            <div className="w-auto flex justify-end mt-2">
                                <div className="flex">
                                    <div className="text-blue-500 font-Mont text-lg mr-4 mt-1"> Submit</div>
                                    <div>
                                        <img src={Arrow} alt="" className="p-1 bg-blue-200 rounded-full"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Message
