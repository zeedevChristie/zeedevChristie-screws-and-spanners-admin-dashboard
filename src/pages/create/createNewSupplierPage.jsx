import React from 'react'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from '../../components/navbar/navbar'
import Widgets from '../../components/widgets/widgets'
import AddNewSupplier from '../../components/form/addNewSupplier'


const CreateSupplierPage = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div  className='border-4 border-red-600 w-full h-[100vh] overflow-auto'>
        <Navbar/>
        <Widgets/>
        <AddNewSupplier/>
      </div>
    </div>
  )
}

export default CreateSupplierPage
