import React from "react";
import { person } from './../data';


const Title = () => {
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-sm-8'>
                    لديك {person.length} مواعيد اليوم
                </div>
            </div>
        </div>
    )
}

export default Title