import React from 'react'
import loading from './loading.gif'

const Spinner = () => {
    return (
        <>
            <div className=" mt-12  ">
                <img className='mx-auto w-16  ' srcSet={loading} alt="image" />
            </div>
        </>
    )
}

export default Spinner
