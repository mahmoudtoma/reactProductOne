import React from "react";




const Button = ({deleteData,viewData}) => {
    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-sm-8 button-all'>
                    <button className='button' onClick={deleteData}>مسح الكل </button>
                    <button className='button' onClick={viewData}>عرض البيانات</button>
                </div>
            </div>
        </div>
    )
}

export default Button