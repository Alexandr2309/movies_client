import React, { useContext } from 'react'
import Image from 'next/image'
import like from '../../public/img/like.png'
import Link from 'next/link'
import { UserContext } from '../../pages/_app'

const SimilarItem = ({ film }) => {
	const { setLoading } = useContext(UserContext)
	return (
		<Link href={`/film/${film.filmId || film.kinopoiskId}`}>
			<div onClick={() => setLoading(true)}>
				<span className='grid__film-name'>
					{film.nameRu || 'название фильма'}
				</span>
				<div className='grid__likes-count'>
					<Image src={like} width={15} height={13} />
					<div className='info__likes-count'>
						{film.ratingVoteCount || 4089}
					</div>
				</div>
				<Image
					src=' '
					loader={({ src, width, quality }) =>
						`${
							film.posterUrl ||
							`https://kinopoiskapiunofficial.tech/images/posters/kp_small/1309570.jpg`
						}`
					}
					className='grid__img'
					layout='fill'
					placeholder={'blurDataURL'}
					width={1}
					height={1}
					quality={100}
				/>
			</div>
		</Link>
	)
}

export default SimilarItem
