import React from 'react'
import { FaRegThumbsUp } from 'react-icons/fa'

const Posts = ({item,readTime}) => {

  const circleStyle = {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: 'gray',
    alingItems:'center',
    marginLeft: '5px',
    marginRight: '5px',
  };

  return (
    <div>
        <div className='flex justify-between items-center mb-2'>
          <h2 className='text-2xl font-bold'>{item.title}</h2>
          <FaRegThumbsUp size={30} className='bg-yellow-400 p-1 rounded-full cursor-pointer' color='white'/>
        </div>
        <p className='text-base text-justify'>{item.body}</p>

        <div className='mt-2 flex flex-col md:flex-row  justify-between items-center'>
          <div className='flex'>
            <p className='text-[#A4CCD3]'>thought</p>
            <p className='ml-2 font-bold text-gray-500'>by {item.author}</p>
          </div>

          <div className='flex items-center text-[12px]'>
            <p>{item.time}</p>
            <div style={circleStyle}></div>
            <p>{readTime} min Read</p>
            <div style={circleStyle}></div>
            <p>{item.views} Views</p>
          </div>

        </div>
    </div>
  )
}

export default Posts