import { lablesInfo } from '../../utils/variables'
import { displayText } from '../../utils/helpFunc'
import React from 'react'

export default function FilmPageInfoStroke(props) {
	return (
		<div className="film-info__label-block">
			<span className="film-info__first-label">{lablesInfo[props.label]}</span>
			<span className="film-info__second-label">
				{displayText(props.label.toString(), props.main)}
			</span>
		</div>
	)
}
