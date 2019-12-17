import React, { Component, Fragment } from 'react';
import OutlineButton from '../frequent/outlinebutton/index.jsx';
import Rec from '../../assets/imgs/rec.png';

export class Partners extends Component {
    render() {
        return (
            <Fragment>
                <div className="parent mt-64">
                    <div className="text-center text-blue-600 font-Poppins text-xl">
                        Partners
                    </div>
                    <div className="text-center text-gray-600 font-Poppins text-3xl mt-10">
                        Brands we'ev worked with.
                    </div>
                </div>
                <div>
                    <img src={Rec} alt="brands" className="mt-10"/>
                </div>
            </Fragment>
        )
    }
}

export default Partners
