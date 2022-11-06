import React, { useState } from 'react'
import Star from './Star'
const StarRating = () => {
    const [courseState, setCourseState] = useState(0)

    const renderStars = () => {
        const stars = []
        const maxRating = 5
        for (let i = 0; i < maxRating; i++) {
            stars.push(
                <Star
                    key={ i }
                    changeRating={ () => handleRatingChange(i + 1) }
                    selected={ courseState > i }
                />
            )
        }
        return stars
    }

    const handleRatingChange = (rating) => {
        if (rating === courseState) setCourseState(0)
        else setCourseState(rating)
    }


    return (
        <ul className='course--stars'>
            { renderStars() }
        </ul>
    )
}

export default StarRating