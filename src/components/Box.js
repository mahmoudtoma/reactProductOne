import React from "react";




const Box = ({person}) => {
    return (
        <div>
            <div className='row justify-content-center '>
                <div className='col-sm-8'>
                    <div className='box border-bottom '>
                        {person.length ? (person.map((item) => {
                            return (
                                <div key={item.id} className='boxes'>
                                    <img className='images' src='images.jpg' />
                                    <div>
                                        <p className='parg'>{item.name}</p>
                                        <p className='par'>{item.date}</p>
                                    </div>
                                </div>
                            )
                        })) : <h2 className='null'>لا يوجد مواعيد اليوم</h2>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Box