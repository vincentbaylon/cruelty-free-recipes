import { RiLeafFill, RiLeafLine } from 'react-icons/ri'

function LeafIcon({
	hoverRating,
	setHoverRating,
	idx,
	setRating,
	rating,
	hovering,
	setHovering,
}) {
	const onMouseLeave = () => {
		setHovering(false)
		setHoverRating(0)
	}

	const onMouseEnter = () => {
		setHovering(true)
		setHoverRating(idx)
	}

	const saveRating = () => {
		if (rating === 1) {
			setRating(0)
		} else {
			setRating(idx)
		}
	}

	return (
		<div
			onMouseLeave={onMouseLeave}
			onMouseEnter={onMouseEnter}
			onClick={saveRating}
		>
			{hovering ? (
				hoverRating >= idx ? (
					<RiLeafFill size={20} />
				) : (
					<RiLeafLine size={20} />
				)
			) : rating >= idx ? (
				<RiLeafFill size={20} />
			) : (
				<RiLeafLine size={20} />
			)}
		</div>
	)
}

export default LeafIcon
