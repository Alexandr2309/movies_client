import React, { createRef, useEffect, useState } from 'react'
import GridStructure from './GridStructure'
import { useWindowSize } from '../../hooks/useWindowSize'
import useScroll from '../../hooks/useScroll'
import { filmsSlice, gridTemplate } from '../../utils/helpFunc'
import { RingLoader } from 'react-spinners'
import { observer } from 'mobx-react-lite'
import useGetFilms from '../../hooks/useGetFilms'
import GridSectionsGenerate from './GridSectionsGenerate'

const GridMain = observer(({ films, type }) => {
	const lastItem = createRef()
	const [width, height] = useWindowSize()
	const [grid, setGrid] = useState([])
	const getFilms = useGetFilms(films, type)
	
	let observer = useScroll(
		lastItem,
		() =>
			setGrid((grid) => [
				...grid,
				<GridStructure films={filmsSlice(films, grid)} />
			]),
		grid.length
	)
	
	useEffect(() => {
		if (!films.length) return
		setGrid([
			<GridStructure
				films={films.slice(0, 20)}
			/>
		])
	}, [films])
	
	return (
		<div
			className='grid'
			style={{
				gridTemplateRows:
					films.length > 0
						? `repeat(${gridTemplate(width, grid.length)}, ${
							width > 1200 ? '	350px' : '300px'
						})`
						: 'repeat(2, 100px)',
				overflow: 'hidden'
			}}
		>
			{!grid.length && <RingLoader className='loader-grid' size={120} />}
			{!!grid.length && (
				<GridSectionsGenerate grid={grid} lastItem={lastItem} />
			)}
		</div>
	)
})

export default GridMain
