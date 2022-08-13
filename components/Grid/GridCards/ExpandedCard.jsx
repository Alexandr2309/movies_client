import React, { useContext } from 'react'
import Image from 'next/image'
import like from '../../../public/img/like.png'
import { BiTime } from 'react-icons/bi'
import Stars from '../../UI/Stars/Stars'
import Link from 'next/link'
import { UserContext } from '../../../pages/_app'

const ExpandedCard = ({ film }) => {
	const { setLoading } = useContext(UserContext)
	
	return (
		<div className='grid__item grid__item__first-spec'>
			<div className='grid__content'>
				<div className='grid__item__info info'>
					<div className='info__likes'>
						<Image src={like} width={15} height={13} />
						<div className='info__likes-count'>
							{film.ratingVoteCount || 234}
						</div>
					</div>
					<div className='info__comments'>
						<BiTime color='#d8232a' />
						<div className='info__comments-count'>
							{film.filmLength || 'Сериал'}
						</div>
					</div>
					<div className='info__rating'>
						<Stars color='#D8232A' rating={film.rating} />
					</div>
					<div className='info__date'>
						<div className='info__date__title'>Дата выхода</div>
						<div className='info__date-time'>{film.year || 2020}</div>
					</div>
					<div className='info__name'>
						<div className='info__name__title'>Название</div>
						<div className='info__name-text'>{film.nameRu || film.nameEn}</div>
					</div>
				</div>
				<Link href={`/film/${film.filmId || film.kinopoiskId}`}>
					<div className='grid__item__first-spec__container' onClick={() => setLoading(true)}>
						<Image
							src=' '
							loader={({ src, width, quality }) =>
								`${
									film?.posterUrl ||
									`https://kinopoiskapiunofficial.tech/images/posters/kp_small/1309570.jpg`
								}`
							}
							className='grid__img'
							layout='fill'
							width={1}
							height={1}
							quality={100}
						/>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default ExpandedCard
