import React, { Component, Fragment } from 'react'
import one from '../../assets/imgs/1.svg';
import two from '../../assets/imgs/2.svg';
import three from '../../assets/imgs/3.svg';
import four from '../../assets/imgs/4.svg';
import five from '../../assets/imgs/5.svg';
import OutlineButton from '../frequent/outlinebutton/index.jsx';

export class Portfolio extends Component {

    action() {
        alert("See More")
    }
    render() {
        return (
            <Fragment>
                <div className="mt-10 pr-16 pl-16 overflow-y-hidden mb-16 mt-24">

                    <div className="text-center text-blue-500 text-xl font-Poppins">
                        Portfolio
                    </div>
                    <div className="text-center text-black font-Mont mt-4 font-Heebo">
                        Some Awesome projects we have worked on.
                    </div>

                    <div className="flex mt-16 justify-around">
                        <div className="w-64 h-64 rounded">
                            <img src={one} alt="" className="rounded w-auto h-auto img-rounded"/>
                        </div>
                        <div className="w-64 h-64 rounded">
                            <img src={two} alt="" className="rounded w-auto h-auto img-rounded"/>
                        </div>
                        <div className="w-64 h-64 rounded">
                            <img src={three} alt="" className="rounded w-auto h-auto img-rounded"/>
                        </div>
                        <div className="w-64 h-64 rounded">
                            <img src={four} alt="" className="rounded w-auto h-auto img-rounded"/>
                        </div>
                        <div className="w-64 h-64 rounded">
                            <img src={five} alt="" className="rounded w-auto h-auto img-rounded"/>
                        </div>
                    </div>

                    <div className="flex justify-center mt-24">
                        <OutlineButton message="See More" action={this.action} />
                    </div>

                </div>
            </Fragment>
        )
    }
}

export default Portfolio
