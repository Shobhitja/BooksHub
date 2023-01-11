import React, { useState } from 'react'
import bookImg from '../img/book.jpg';

import Modal from './Modal';

const Card = ({ bookData }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setBookItem] = useState();
    return <>

        {
            bookData.map((item) => {

                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                let title = item.volumeInfo.title;




                if (thumbnail && amount != undefined) {


                    return <>

                        {/* Card */}

                        < div onClick={() => { setShow(true); setBookItem(item) }} className="max-w-sm  hover:bg-indigo-200 hover:-translate-y-3 transition-all  bg-indigo-100  border-2 border-gray-200 rounded-lg shadow-lg shadow-black mx-auto w-full h-auto cursor-pointer" >
                            <div className='h-[20rem]' >
                                <img className="rounded-t-2xl  p-2 h-full w-full" srcSet={thumbnail} alt="" />
                            </div>
                            <div className="">
                                <div className='' >
                                    <h5 className=" text-center mb-3  text-3xl font-bold  text-gray-900  ">{title.length <= 20 ? `${title}` : title.slice(0, 22)} </h5>
                                </div>
                                <h6 className='bg-gray-400 text-2xl mb-4 text-center font-semibold p-0.5 ' > &#8377;   {amount} </h6>

                            </div>

                        </div >

                        <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                    </>

                }




            })
        }




    </>
}

export default Card;