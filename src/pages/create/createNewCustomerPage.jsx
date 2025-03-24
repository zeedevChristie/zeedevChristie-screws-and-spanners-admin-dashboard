import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Widgets from '../../components/widgets/widgets'
import AddNewUser from '../../components/form/addNewUser'
import AddNewCustomer from '../../components/form/addNewCustomer'

const CreateNewCustomerPage = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div  className='border-4 border-red-600 w-full h-[100vh] overflow-auto'>
        <Navbar/>
        <Widgets/>
        <AddNewCustomer/>
      </div>
    </div>
  )
}

export default CreateNewCustomerPage
