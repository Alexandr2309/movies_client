import React from 'react'

const GridSectionsGenerate = ({ grid, lastItem }) => {
	return grid.map((elem, i, arr) => {
		return (
			<React.Fragment key={(i * Math.random()).toFixed(4)}>
				{elem}
				{i + 1 === arr.length && (
					<div style={{ padding: 5 }} ref={lastItem}></div>
				)}
			</React.Fragment>
		)
	})
}

export default GridSectionsGenerate
