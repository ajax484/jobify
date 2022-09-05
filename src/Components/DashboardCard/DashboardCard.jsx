import React from 'react';
import './dashboardCard.css';

const DashboardCard = ({dashboardItem, count}) => {
    const {title, caption} = dashboardItem;

    return (
        <div className="card__container">
            <h1 className="text-sm md:text-base font-bold capitalize">
                {title}
            </h1>

            <span className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {count}
            </span>

            <p className="text-sm md:text-base">
                {caption}
            </p>
        </div>
    );
}

export default DashboardCard;
