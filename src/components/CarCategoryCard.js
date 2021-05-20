import React from 'react'

const CarCategoryCard = ({carType, description}) => {
    return (
        <div className={carType}>
            <div>
            </div>
            <div className="heading">
                <h1>{carType}</h1>
            </div>
            <div className="description">
                <p>
                    {description}
                </p>
            </div>

            <div>
                <button className={`${"button " + carType+"Button"}`}>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default CarCategoryCard
