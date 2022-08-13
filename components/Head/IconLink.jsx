import Link from 'next/link'
import React from 'react'

const iconProps = {
	onClick: null,
	style: { cursor: 'pointer' },
	size: 21
}

export function IconLink(props) {
	return (
		<Link href={props.item.href}>
			{React.createElement(props.item.element,
				{ ...iconProps, onClick: props.loadingsStart.bind(null, props.item.href) })
			}
		</Link>
	)
}