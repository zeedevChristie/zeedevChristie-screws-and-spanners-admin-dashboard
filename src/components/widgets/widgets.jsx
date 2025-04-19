import React, { useState } from "react";
import WidgetComponet from "./widgetComponet";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import EngineeringIcon from "@mui/icons-material/Engineering";
import AddNewUser from "../form/addNewUser";
import CustomerTable from "../table/customerTable";
import ServiceProviderTable from "../table/serviceProviderTable";
import SupplierTable from "../table/supplierTable";
import AllUserTable from "../table/allUserTable";
import { useEffect } from "react";
import axios from "axios";

const Widgets = ({ setData }) => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalServiceProviders, setTotalServiceProviders] = useState(0);

  const [todayUsers, setTodayUsers] = useState(0);
  const [todayCustomers, setTodayCustomers] = useState(0);
  const [todayServiceProviders, setTodayServiceProviders] = useState(0);

  // consume the all users ////////////////////
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin-c2zf.onrender.com/api/v1/service/all/users"
        );
        setData(response.data);
        console.log(response);
        setTotalUsers(response.data.totalUsers);
        console.log(response.data.totalUsers);

        // Filter users onboarded today
        const today = new Date();
        const startOfToday = new Date(today.setHours(0, 0, 0, 0)); // Start of today's date

        const usersToday = allUsers.filter((user) => {
          const userDate = new Date(user.created_at); // 'created_at' holds the onboarding date
          return userDate >= startOfToday;
        });
        setTodayUsers(usersToday.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setData]);



  // consume all customers ////////////////////
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin-c2zf.onrender.com/api/v1/service/customers"
        );
        setData(response.data);
        console.log(response);
        setTotalCustomers(response.data.totalCustomers);
        console.log(response.data.totalCustomers);

        // Filter customers onboarded today
        const today = new Date();
        const startOfToday = new Date(today.setHours(0, 0, 0, 0)); // Start of today's date

        const serviceProvidersToday = totalServiceProviders.filter((serviceProvider) => {
          const userDate = new Date(serviceProvider.created_at); //  'created_at' holds the onboarding date
          return userDate >= startOfToday;
        });
        setTodayServiceProviders(serviceProvidersToday.length);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setData]);



    // consume all service providers ////////////////////

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin-c2zf.onrender.com/api/v1/service/service/provider"
        );
        setData(response.data);
        console.log(response);
        setTotalServiceProviders(response.data.totalServiceProviders);
        console.log(response.data.totalServiceProviders);

         // Filter service providers onboarded today
         const today = new Date();
         const startOfToday = new Date(today.setHours(0, 0, 0, 0)); // Start of today's date
 
         const customersToday = customers.filter((customer) => {
           const userDate = new Date(customer.created_at); //  'created_at' holds the onboarding date
           return userDate >= startOfToday;
         });
         setTodayCustomers(customersToday.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setData]);



  return (
    <div className="grid grid-cols-6 p-3 gap-1 cursor-pointer ">
      <WidgetComponet
        widgetId={1}
        title={"All Users"}
        amountCounter={totalUsers}
        icon={<PersonAddIcon />}
        todayTotal={todayUsers}
        weeklyTotal={100}
        monthlyTotal={100}
        yearlyTotal={100}
        style={{ backgroundColor: "lightblue" }}
        onClick={() => setData({ name: <AllUserTable /> })}
      />

      <WidgetComponet
        widgetId={2}
        title={"Customers"}
        amountCounter={totalCustomers}
        icon={<GroupIcon />}
        todayTotal={todayCustomers}
        weeklyTotal={100}
        monthlyTotal={100}
        yearlyTotal={100}
        style={{ backgroundColor: "lightgreen" }}
        onClick={() => setData({ name: <CustomerTable /> })}
      />
      <WidgetComponet
        widgetId={3}
        title={"Providers"}
        amountCounter={totalServiceProviders}
        icon={<EngineeringIcon />}
        todayTotal={todayServiceProviders}
        weeklyTotal={100}
        monthlyTotal={100}
        yearlyTotal={100}
        style={{ backgroundColor: "lightcoral" }}
        onClick={() => setData({ name: <ServiceProviderTable /> })}
      />
      <WidgetComponet
        widgetId={4}
        title={"Suppliers"}
        amountCounter={0}
        icon={<StorefrontIcon />}
        todayTotal={100}
        weeklyTotal={100}
        monthlyTotal={100}
        yearlyTotal={100}
        style={{ backgroundColor: "lightgoldenrodyellow" }}
        onClick={() => setData({ name: <SupplierTable /> })}
      />
      <WidgetComponet
        widgetId={5}
        title={"Revenue"}
        amountCounter={0}
        icon={<CurrencyExchangeIcon />}
        todayTotal={100}
        weeklyTotal={100}
        monthlyTotal={100}
        yearlyTotal={100}
        style={{ backgroundColor: "lightpink" }}
        onClick={() => setData({ name: "revenue" })}
      />
      <WidgetComponet
        widgetId={6}
        title={"Support"}
        amountCounter={0}
        icon={<SupportAgentIcon />}
        todayTotal={100}
        weeklyTotal={100}
        monthlyTotal={100}
        yearlyTotal={100}
        style={{ backgroundColor: "lightgray" }}
        onClick={() => setData({ name: "support" })}
      />
    </div>
  );
};

export default Widgets;
