import React from 'react'
import WidgetComponet from './widgetComponet'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import EngineeringIcon from '@mui/icons-material/Engineering';
import AddNewUser from '../form/addNewUser';
import NewUserTable from '../table/newUserTable';
import CustomerTable from '../table/customerTable';
import ServiceProviderTable from '../table/serviceProviderTable';
import SupplierTable from '../table/supplierTable';


const Widgets = ({setData}) => {

return (
    <div className='grid grid-cols-6 p-3 gap-1 cursor-pointer '>
            <WidgetComponet
            widgetId={1}
            title={"New Users"} 
            amountCounter={100}
            icon={<PersonAddIcon/>}
            todayTotal={100}
            weeklyTotal={100}
            monthlyTotal={100}
            yearlyTotal={100}
            style={{ backgroundColor: 'lightblue' }}
            onClick={()=>setData({name:<NewUserTable/>})}
            /> 

            <WidgetComponet
            widgetId={2}
            title={"Customers"}
            amountCounter={100}
            icon={<GroupIcon/>}
            todayTotal={100}
            weeklyTotal={100}
            monthlyTotal={100}
            yearlyTotal={100}
            style={{ backgroundColor: 'lightgreen' }}
            onClick={()=>setData({name:<CustomerTable/>})}
            /> 
            <WidgetComponet
            widgetId={3}
            title={"Providers"}
            amountCounter={100}
            icon={<EngineeringIcon/>}
            todayTotal={100}
            weeklyTotal={100}
            monthlyTotal={100}
            yearlyTotal={100}
            style={{ backgroundColor: 'lightcoral' }}
            onClick={()=>setData({name: <ServiceProviderTable/>})}
            /> 
            <WidgetComponet
            widgetId={4}
            title={"Suppliers"}
            amountCounter={100}
            icon={<StorefrontIcon/>}
            todayTotal={100}
            weeklyTotal={100}
            monthlyTotal={100}
            yearlyTotal={100}
            style={{ backgroundColor: 'lightgoldenrodyellow' }}
            onClick={()=>setData({name:<SupplierTable/>})}
            /> 
            <WidgetComponet
            widgetId={5}
            title={"Revenue"}
            amountCounter={100}
            icon={<CurrencyExchangeIcon/>}  
            todayTotal={100}
            weeklyTotal={100}
            monthlyTotal={100}
            yearlyTotal={100}
            style={{ backgroundColor: 'lightpink' }}
            onClick={()=>setData({name:"revenue"})}
            /> 
            <WidgetComponet 
            widgetId={6}
            title={"Support"}
            amountCounter={100}
            icon={<SupportAgentIcon/>}
            todayTotal={100}
            weeklyTotal={100}
            monthlyTotal={100}
            yearlyTotal={100}
            style={{ backgroundColor: 'lightgray' }}
            onClick={()=>setData({name:"support"})}
            /> 
    </div>
)
}

export default Widgets
