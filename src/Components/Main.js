import React, { useState } from 'react'
import bookImg from '../img/book2.png';
import Card from './Card';
import bg from '../img/bg.avif';
import Spinner from './Spinner';


const Main = () => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('');
    const [bookData, setBookData] = useState([]);

    const searchBook = async () => {
        setLoading(true)
        try {
            let url = ` https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCTeifeOp9tcr6K-2IUHMsC7GUzx2dwCrY&maxResults=40`;
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            setBookData(data.items)
            setLoading(false)

        } catch (error) {
            console.log(error)
        }
    }




    return <>
        <div className='header grid grid-rows-2 md:grid-cols-2 h-[60rem]  md:h-[30rem]  relative shadow-gray-400 shadow-2xl bg-gray-200'>

            <div className="row1 shadow-gray-300 shadow-xl  h-[30rem] md:h-[30rem] " style={{ background: `url(${bg})` }}>
                <h1 className='font-serif text-3xl md:text-5xl text-center align-center my-40  leading-snug'>A room without books is like <br /> a body without a soul</h1>
            </div>

            <div className="row2 text-center">
                <h2 className='mt-12 mb-7 text-4xl md:text-5xl font-serif'>Find Your Books</h2>
                <div className="search  mx-auto ">
                    <input className='  w-[80%] md:w-[60%] rounded-md p-4 text-lg font-semibold' type="text" placeholder='Enter Your Book Name ' value={search} onChange={e => setSearch(e.target
                        .value)} />
                    <button onClick={searchBook} className='bg-indigo-700 text-white p-3 md:p-4 ml-4 rounded-xl hover:bg-indigo-500'><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <img className='mt-8 w-64 md:w-56 mx-auto  border-4 border-red-50 ' src={bookImg} alt="" srcset="" />
            </div>

        </div>


        {
            loading ? <Spinner /> :

                <div className=' w-full mt-16 p-5 grid  grid-rows-1 md:grid-cols-4 gap-6 '>
                    {
                        <Card bookData={bookData} />

                    }

                </div>
        }




    </>
}

export default Main