import QuickSearchImg from './QuickSearchImg'
import React, { useContext } from 'react'
import CardInfo from './CardInfo'
import Link from 'next/link'
import { UserContext } from '../../pages/_app'

export function QuickSearchBody(props) {
	const { setLoading } = useContext(UserContext)
	
	return (
		<Link href={`/film/${props.href}`}>
			<div className='search__wrapper' onClick={() => setLoading(true)}>
				<QuickSearchImg
					src={props.src}
					last={props.last}
					setLoading={props.setLoading}
				/>
				<CardInfo
					rating={props.rating}
					nameEn={props.nameEn}
					nameRu={props.nameRu}
					year={props.year}
				/>
			</div>
		</Link>
	)
}
