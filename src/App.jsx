import React from 'react'
import { MdVerified } from "react-icons/md";
import { FaRegEye, FaRegHeart, FaRegThumbsUp, FaStar } from "react-icons/fa";
import {posts} from './dummy';
import Posts from './Posts';

const App = () => {

  const wordsPerMinute = 200;

  const lineStyle = {
    height: '30px',
    borderLeft: '2px solid yellow', // You can adjust the color and style of the line
    marginRight: '10px',
    marginLeft: '10px'
  };

  return (
    <div>
      {/* header section */}
      <div className='bg-black flex justify-between p-4 pr-8 pl-8 text-white'>
        <div className='flex items-center cursor-pointer'>
          <p className='bg-white text-black p-1 rounded-full w-[30px] text-center'>ttt</p>
          <div style={lineStyle}></div>
          <h2 style={{letterSpacing:1.8}} className='font-bold text-[18px]'>STORIES</h2>
        </div>
        <button className='bg-[#FDC241] p-2 rounded-md text-black'>Courses</button>
      </div>

      {/* profile and bgc */}
      <div>
        <img src="https://www.pixelstalk.net/wp-content/uploads/images1/Forth-bridge-world-hd-wallpaper-1920x1200.jpg" alt="cover" className='w-full h-[350px] md:h-[550px] object-center' />
        
        <div className='flex items-center ml-3 md:ml-11 -mt-8'>
          <img src="https://media.licdn.com/dms/image/D4D03AQEXdD5HHqzN3g/profile-displayphoto-shrink_800_800/0/1667373388482?e=1706140800&v=beta&t=nnlqT7DcjFbi-FkMoTkmXFuCEgiyBE_Yq-S132SPdcQ" alt="profile" className='h-[150px] w-[150px] object-cover rounded-full' />
          
          <div className='ml-8 mt-4 '>
            <div className='flex items-center'>
              <h1 className='text-2xl font-bold'>Anuj Gosalia</h1>
              <MdVerified size={20} color="green" className='ml-3'/>
            </div>

            <div className='flex justify-around mt-2 text-gray-500'>
              <div className='text-center cursor-pointer'>
                <div style={{
                  border:'2px solid gray',
                  borderRadius:10,
                  width:80,
                }} className='p-1 text-center'> 
                  <p className='text-xl font-semibold'>6482</p>
                </div>
                <p className='text-base font-semibold'>Followers</p>
              </div>
              <div className='text-center cursor-pointer'>
                <div style={{
                  border:'2px solid gray',
                  borderRadius:10,
                  width:80,
                }} className='p-1 text-center'> 
                  <p className='text-xl font-semibold'>245</p>
                </div>
                <p className='text-base font-semibold'>Following</p>
              </div>
            </div>

          </div>
        </div>

        <div className='ml-3 md:ml-11 mt-4'>
            <h2 className='text-xl font-bold'>Co-founder & CEO at Terribly Tiny Tales</h2>
            <a  target="_blank" rel="noopener noreferrer" className='text-blue-400' href="https://www.instagram.com/anujgosalia/?hl=en">https://www.instagram.com/anujgosalia/?hl=en</a>

            <div className='mt-2 flex items-center mb-3'>

              <div className='flex items-center cursor-pointer'>
                <FaStar size={30} className='bg-[#62B6C5] p-1 rounded-full' color='white'/>
                <p className='ml-2 font-bold'>125</p>
              </div>

              <div className='flex items-center ml-3 cursor-pointer'>
                <FaRegThumbsUp size={30} className='bg-yellow-400 p-1 rounded-full' color='white'/>
                <p className='ml-2 font-bold'>12</p>
              </div>

              <div className='flex items-center ml-3 cursor-pointer'>
                <FaRegEye  size={30} className='bg-[#808080] p-1 rounded-full' color='white'/>
                <p className='ml-2 font-bold'>57.8K</p>
              </div>

              <div className='flex items-center ml-3 cursor-pointer'>
                <FaRegHeart  size={30} className='bg-[#BE2756] p-1 rounded-full' color='white'/>
                <p className='ml-2 font-bold'>26.0K</p>
              </div>

            </div>
        </div>
      </div>

      {/* totalpost */}
      <div className='mt-8'>
        <div style={{
          padding:10,
          width:120,
          borderRight: '2px solid gray',
          borderTop: '2px solid gray',
          borderBottom: '2px solid white',
          cursor:'pointer'
        }}>
          <p className='text-[#74ABCE] text-xl font-bold'>134 posts</p>
        </div>
        <hr />
      </div>
      <div className='p-8'>
        {
          posts.map((item, index) => {
            const wordCount = item.body.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
            return(
              <div key={index}>
                <Posts readTime={readingTimeMinutes} item={item} />
                <hr className='mt-4 mb-4'/>
              </div>
            )
          })
        }
      </div>

    </div>
  )
}

export default App