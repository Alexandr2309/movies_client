import React, { Suspense } from 'react'
import ButtonGroup from './ButtonGroup'
import { lablesInfo } from '../../utils/variables'
import FilmPageAbout from './FilmPageAbout'
import { FilmPageSubtitle } from './FilmPageSubtitle'
import { FilmPageAboutTitle, FilmPageTitle } from './FilmPageTitle'
import { RingLoader } from 'react-spinners'

const FilmPageAdditionalItems = React.lazy(() => import('./FilmPageAdditionalItems'))
const FilmPageDescription = React.lazy(() => import('./FilmPageDescription'))

const MainInfo = ({ info }) => {
	
	const ruFees = info.fees.find(
		(elem) => elem.type.toLowerCase() === 'ru'
	)?.amount
	
	const main = {
		...info.main,
		feesWorld: info.fees[0]?.amount || 'Сейчас нет данных о сборах',
		feesRu: ruFees ? +ruFees : 'Нет данных',
		similars: info.similars
	}
	return (
		<div className='film-info__main'>
			<FilmPageTitle main={main} />
			<FilmPageSubtitle main={main} />
			<ButtonGroup url={main.webUrl} filmId={main.filmId || main.kinopoiskId} />
			<FilmPageAboutTitle />
			<FilmPageAbout lablesInfo={lablesInfo} main={main} />
			<Suspense fallback={<RingLoader size={120} />}>
				<FilmPageDescription description={main.description} />
				<FilmPageAdditionalItems title='Похожие фильмы' items={main.similars} />
			</Suspense>
		
		</div>
	)
}

export default MainInfo
