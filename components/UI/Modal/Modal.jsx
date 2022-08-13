import React from 'react'
import cl from './Modal.module.scss'

const Modal = ({ active, setActive, children, plyrRef = null }) => {
	
	function closeModal() {
		const { plyr } = plyrRef.current
		if (plyr) {
			plyr.stop()
		}
		setActive(false)
	}
	
	return (
		<div
			className={active ? [cl.modal, cl.active].join(' ') : cl.modal}
			onClick={closeModal}>
			<div className={active ? [cl.body, cl.active].join(' ') : cl.body} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default Modal