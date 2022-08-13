import React, { useEffect } from 'react'
import Image from 'next/image'

const QuickSearchImg = ({ src = '', last, setLoading }) => {
	return (
		<div className="search__img" style={{ position: 'relative' }}>
			<Image
				src=" "
				loader={() => src}
				width={32}
				height={48}
				objectFit="cover"
				quality={50}
				onLoadingComplete={() => (last ? setLoading(false) : null)}
			/>
		</div>
	)
}

export default QuickSearchImg
