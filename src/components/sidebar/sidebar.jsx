import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RadioIcon from '@mui/icons-material/Radio';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminProfile from '../adminProfile';
import { Link } from 'react-router-dom';
const Sidebar = () => {
const [darkMode, setDarkMode] = React.useState(false);

const toggleDarkMode = () => {
    setDarkMode(!darkMode);
};

return (
    <div className={`border-4 h-[100vh] overflow-auto  border-green-600 cursor-pointer p-4 w-[200px] ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className='border-2 shadow-lg p-4'>
            <span> <AdminProfile/> </span>
        </div>
        <div className='flex-col space-y-4 mt-4'>
            <ul>
                <li> 
                    <Link to="/dashboard">
                        <DashboardIcon className='text-blue-600 text-[18px]' />
                        <span className='text-[13px] font-semibold text-center ml-[10px] ' >Dashboard</span>
                    </Link> 
                    
                </li>
                <li> <AdminPanelSettingsIcon className='text-blue-600 text-[18px]'/>
                    <span className='text-[13px] font-semibold text-center ml-[10px] ' >Admin</span></li>
                <li> <DeliveryDiningIcon className='text-blue-600 text-[18px]'/>
                    <span className='text-[13px] font-semibold text-center ml-[10px] ' >Service Delivery</span></li>
                <li> <LocalShippingIcon className='text-blue-600 text-[18px]'/>
                    <span className='text-[13px] font-semibold text-center ml-[10px] ' >Supplier</span></li>
                <li> <RadioIcon className='text-blue-600 text-[18px]'/>
                    <span className='text-[13px] font-semibold text-center ml-[10px] ' >Promotion</span></li>
                <li> <ReportProblemIcon className='text-blue-600 text-[18px]'/>
                    <span className='text-[13px] font-semibold text-center ml-[10px] ' >Report</span></li>
                <li> <SupportAgentIcon className='text-blue-600 text-[18px]'/>
                    <span className='text-[13px] font-semibold text-center ml-[10px] ' >Support</span></li>
                <li> <LogoutIcon className='text-blue-600 text-[18px]'/>
                    <span className='text-[13px] font-semibold text-center ml-[10px] ' >LogOut</span>
                </li>
            </ul>
        </div>
        <div className='mt-4'>
            <div className='flex  mt-2'>
                <div 
                    className='w-6 h-6 bg-white border-2 border-gray-400 rounded cursor-pointer mr-2' 
                    onClick={() => setDarkMode(false)}
                ></div>
                <div 
                    className='w-6 h-6 bg-gray-800 border-2 border-gray-400 rounded cursor-pointer' 
                    onClick={() => setDarkMode(true)}
                ></div>
            </div>
        </div>
    </div>
);
}

export default Sidebar
