import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserContext } from '../../pages/_app'

const Watch = ({ url, id }) => {
	const { setLoading } = useContext(UserContext)
	
	return (
		<div className='banner__watch watch'>
			<div className='watch__poster'>
				<Image
					src=' '
					loader={() => url}
					layout='responsive'
					width={450}
					height={300}
				/>
			</div>
			<div className='watch__action'>
				<Link href={`/film/${id}`}>
					<button className='watch__button' onClick={() => setLoading(true)}>Подробнее</button>
				</Link>
			</div>
		</div>
	)
}

export default Watch
