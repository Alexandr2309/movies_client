import React, {
	Children,
	cloneElement,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react'
import cl from './Carousel.module.scss'
import {
	FaRegArrowAltCircleRight,
	FaRegArrowAltCircleLeft
} from 'react-icons/fa'

const Carousel = ({ children }) => {
	const ref = useRef()
	const [pages, setPages] = useState(1)
	const [offset, setOffset] = useState(0)
	
	const nextSlide = () => {
		setOffset((currentOffset) => {
			return Math.max(currentOffset - (PAGE_WIDTH + 20), MAX_OFFSET)
		})
	}
	const prevSlide = () => {
		setOffset((currentOffset) => Math.min(currentOffset + PAGE_WIDTH + 20, 0))
	}
	
	const PAGE_WIDTH = useMemo(() => {
		return ref.current?.clientWidth / 2
	}, [ref.current])
	const MAX_OFFSET = useMemo(() => {
		return -((PAGE_WIDTH + 20) * (pages.length - 2))
	}, [PAGE_WIDTH])
	
	useEffect(() => {
		setPages(
			Children.map(children, (child) => {
				return cloneElement(child, {
					style: {
						height: '100%',
						flex: '1 1 auto',
						minWidth: '50%',
						maxWidth: '50%',
						position: 'relative'
					}
				})
			})
		)
	}, [])
	
	return (
		<div className={cl.main}>
			<FaRegArrowAltCircleLeft
				size='2rem'
				className={offset !== 0 ? cl.arrow : `${cl.arrow} ${cl.hidden}`}
				onClick={prevSlide}
			/>
			<div className={cl.box}>
				<div
					className={cl.container}
					ref={ref}
					style={{ transform: `translateX(${offset}px)` }}
				>
					{pages}
				</div>
			</div>
			<FaRegArrowAltCircleRight
				size='2rem'
				className={
					offset !== MAX_OFFSET ? cl.arrow : `${cl.arrow} ${cl.hidden}`
				}
				onClick={nextSlide}
			/>
		</div>
	)
}

export default Carousel
