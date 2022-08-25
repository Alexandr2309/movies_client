import React from 'react'
import Stars from '../UI/Stars/Stars'
import cl from '../../styles/BannerBottom.module.scss'
import Image from 'next/image'
import likes from '../../public/img/like.png'
import comments from '../../public/img/comments.png'

const BottomPanel = ({ info }) => {
	return (
		<div className={cl.bannerBot}>
			<div className={cl.left}>
				<div className={cl.publushed}>
					<span>Дата выхода</span> {info.startYear}
				</div>
				<Stars rating={info.ratingKinopoisk} />
			</div>
			<div className={cl.right}>
				<div className='likes'>
					<Image src={likes} alt='likes' width={14} height={14} />
					<span>{info.ratingKinopoiskVoteCount}</span>
				</div>
				<div className={cl.com}>
					<Image
						src={comments}
						alt='comments'
						width={14}
						height={14}
					/>
					<span>
						{info.reviewsCount}
					</span>
				</div>
			</div>
		</div>
	)
}

export default BottomPanel
