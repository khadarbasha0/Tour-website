import React from 'react'

const Hinpute = () => {
    return (
        <div>
            <div className='container'>
                <div className="container-1 d-flex  ">
                    <div className="input1 border-end border-2 m-2">
                        <i class="fa-solid fa-location-dot" ></i>
                        <span className='m-2'>Loaction</span>
                        <div className="text1 ">
                            <input type="location" placeholder='where are your going?' className='border-0' />
                        </div>
                    </div>
                    <div className="input1 border-end border-2 m-2">
                        <i class="fa-solid fa-location-dot" ></i>
                        <span className='m-2'>Distance</span>
                        <div className="text1 ">
                            <input type="text" placeholder='Distance k/m' className='border-0' />
                        </div>
                    </div>
                    <div className="input1  m-2">
                        <i class="fa-solid fa-user-group"></i>
                        <span className='m-2'>Max People</span>
                        <div className="text1 ">
                            <input type="number" placeholder='0' className='border-0' />
                        </div>
                    </div>
                    <div className="input1-2 " id='input1-2'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hinpute
