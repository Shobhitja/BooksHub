import React from 'react'


const Modal = ({ show, item, onClose }) => {

  if (!show) {
    return null;
  }

  let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let desc = item.volumeInfo.description
  return (
    <div>
      <div className=" min-h-full w-full fixed left-0 top-0 bottom-0 right-0 bg-gradient-to-r from-[rgba(0,0,0,0.2)]  to-[rgba(0,0,0,0.1)] flex items-center justify-center ">
        <div className=" bg-indigo-100 w-[23.5rem] h-[48rem]  md:w-[50rem] md:h-[40rem] p-5 relative box-border overflow-hidden shadow-2xl rounded-xl ">
          <button onClick={onClose} className='close  absolute top-2 right-2 md:top-4 md:right-4 outline-none border-3 text-xl rounded-md bg-red-500 hover:bg-red-700 text-white px-2 md:px-3    py-0 md:py-2 '><i class="fa-solid fa-xmark"></i></button>



          <div className="mt-2 md:mt-8 flex flex-col  md:flex-row justify-center " >


            <img className='  mx-auto md:mx-0 md:mr-5  mt-3 w-44 h-36 md:w-52 md:h-56 ' src={thumbnail} alt="" srcset="" />
            <div className="info ">
              <h1 className='text-xl mt-3 md:mt-0 md:text-4xl font-semibold '>{item.volumeInfo.title}</h1>
              <h3 className='mt-3 text-green-700 text-xl font-semibold'>{item.volumeInfo.authors}</h3>
              <h4 className='text-blue-900 text-xl font-semibold '>{item.volumeInfo.publisher} <span>{item.volumeInfo.publishedDate}</span> </h4> <br />
              <a href={item.volumeInfo.previewLink}><button className=' bg-blue-600 hover:bg-blue-800 text-white p-2 text-base rounded-md '> Read More</button></a>
            </div>
          </div>

          <h4 className="description mt-4 text-justify text-base md:text-lg font-medium md:font-semibold tracking-tighter md:tracking-tight">
            {desc.slice(0, 960)}....
          </h4>

        </div>
      </div>

    </div>
  )
}

export default Modal