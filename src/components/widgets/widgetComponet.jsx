import React from 'react'

// import PropTypes from 'prop-types';


const WidgetComponent = ({title,onClick, amountCounter, weeklyTotal, monthlyTotal,icon, yearlyTotal,todayTotal,style }) => {
    return (
        <div onClick={onClick} className='flex justify-between shadow-lg rounded-lg border-2 border-green-500 px-3 ' style={style}>
            <div className='space-y-2'>
                <div>{icon}</div>   
                <h2>{title}</h2>
                <p>{amountCounter}</p>
            </div>
            <div className='flex flex-col text-[10px] space-y-2 '>
                <p>Today{todayTotal}</p>
                <p>WK2D{weeklyTotal}</p>
                <p>MTH2D{monthlyTotal}</p>
                <p>YR2D{yearlyTotal}</p>
            </div>

        </div>
    );
};

// WidgetComponent.propTypes = {
//     title: PropTypes.string.isRequired,
//     amountCounter: PropTypes.number.isRequired,
//     weeklyTotal: PropTypes.number.isRequired,
//     monthlyTotal: PropTypes.number.isRequired,
//     yearlyTotal: PropTypes.number.isRequired,
// };

export default WidgetComponent;