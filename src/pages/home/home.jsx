import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Widgets from '../../components/widgets/widgets'
import Featured from '../../components/featured/featured'
import NewUsersChart from '../../components/chart/newUsersChart'

// import AllCustomersChart from '../../components/allCustomersChart/allCustomersChart'



const Home = () => {
  return (
    <> 
      <div className='flex'>
        <Sidebar/>
        <div className='border-4 border-red-600 w-full h-[100vh] overflow-auto'>
          <Navbar/>
          <Widgets/>
          <div className='flex px-6 py-2 justify-between'>
            <Featured/>               
            <NewUsersChart/>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Home
