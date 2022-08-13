import React, { useEffect, useRef } from 'react'

export default function useScroll(lastItem, cb, length) {
	const observerLoader = useRef()

	const actionInSight = (entries) => {
		if (entries[0].isIntersecting && length < 5) {
			lastItem.current = null
			cb()
		}
	}

	useEffect(() => {
		if (observerLoader.current) {
			observerLoader.current.disconnect()
		}

		observerLoader.current = new IntersectionObserver(actionInSight)
		if (lastItem.current) {
			observerLoader.current.observe(lastItem.current)
		}
	}, [lastItem])
}
