import React, { useEffect, useState } from 'react'

export default function useFocus(input) {
	const [focus, setFocus] = useState(false)

	const addBackDrop = () => {
		const divMy = document.createElement('div')
		divMy.style.position = 'absolute'
		document.body.append(divMy)
		divMy.style.top = 0
		divMy.style.left = 0
		divMy.style.width = document.body.scrollWidth - 300 + 'px'
		divMy.style.height = document.body.scrollHeight + 'px'
		divMy.style.opacity = 0
		divMy.style.zIndex = 98
		divMy.onclick = () => {
			divMy.remove()
			setFocus(false)
		}
	}

	useEffect(() => {
		input.current.onfocus = () => {
			addBackDrop()
			setFocus(true)
		}
	}, [input])

	return focus
}
