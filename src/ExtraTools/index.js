import React from "react";
import {convertToViewFromArrayOfObj} from "../components/PageCompnents/componentList";

function ExtraTools(){
    const data = [
        {
            sec:{
                pre:`
                Webpack and Parcel
                next.js
                gatsby => for static
                Toolchain
                    neutrino, Nx, Razzle
                
                To crate Toolchain from scrach
                    package manager
                    bundler
                    compiler
                `
            }
        }
    ]
    return(
        <>
            {convertToViewFromArrayOfObj(data)}
            <div>
                <div className={''}>
                    <div/>
                    <i/>
                    <div />
                    <div className={''}/>
                </div>
            </div>
        </>
    )
}
export default ExtraTools