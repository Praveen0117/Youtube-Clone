import React from 'react'

const list = ["All","Live","Music","Python","Java","JavaScript","Computer Programing","Coding","Movies","Telugu Movies","Hindi Movies","Telugu Songs","All","Live","Music","Python","Java","JavaScript","Computer Programing","Coding","Movies","Telugu Movies",]

const ButtonList = () => {
  return (
    <div className='scroll-auto focus:scroll-auto'>
      {list.map((button,index) => <button className='m-2 mt-4 h-10 p-2 rounded-lg bg-gray-300 font-medium' key={index}>{button}</button>)}
    </div>
  )
}

export default ButtonList
