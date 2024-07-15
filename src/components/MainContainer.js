import React from 'react'
import Sidebar from './Sidebar'
import Videoscontainer from './Videoscontainer'

const MainContainer = () => {
  return (
    <div className='flex flex-row'>
      <Sidebar/>
      <Videoscontainer/>
    </div>
  )
}

export default MainContainer
