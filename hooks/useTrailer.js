import { useEffect } from 'react'
import path from '../utils/links'
import axios from 'axios'

export default function useTrailerInfo(nameRu, nameOriginal, setVideoInfo) {
	return useEffect(() => {
		const ruSearch = () => path.YTSearchRu(nameRu)
		const enSearch = () => path.YTSearchEn(nameOriginal)
		
		async function getQueryYT() {
			const queryStr = nameRu ? ruSearch() : enSearch()
			await axios.get(queryStr).then(({ data }) => {
				const sourceInfo = {
					type: 'video', sources: [
						{
							src: data.items[0].id.videoId,
							provider: 'youtube'
						}
					],
					previewThumbnails: {
						src: data.items[0].snippet.thumbnails.high.url
					}
				}
				const optionsInfo = {
					quality: { default: 720, options: [4320, 2880, 2160, 1440, 1080, 720] }
				}
				setVideoInfo({
					source: sourceInfo,
					options: optionsInfo
				})
			})
		}
		
		getQueryYT()
	}, [])
	
}