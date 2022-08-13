import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'

const Star = ({ isFill, color }) => {
	return isFill ? (
		<FaStar color={'#d8232a'} className="react-icons" />
	) : (
		<FaRegStar color={color} className="react-icons" />
	)
}

export default Star
