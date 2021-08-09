import React, { useState } from 'react'
import { useEffect } from 'react'
import CachedIcon from '@material-ui/icons/Cached'
import Modal from '../../components/Modal'
import './style.scss'
import Numbers from '../../components/Numbers/Numbers'

function Testing() {
	const [index, setIndex] = useState(0)
	const [wrongStep, setWrongStep] = useState(true)
	const [wrongStepCount, setWrongStepCount] = useState(0)
	const [accuracy, setAccuracy] = useState(100)
	const [start, setStart] = useState(false)
	const [finish, setFinish] = useState(false)
	const [timer, setTimer] = useState()
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [allSeconds, setAllSeconds] = useState(0)
	const [countdown, setCountdown] = useState(6)
	const [disabled, setDisabled] = useState(true)

	let text =
		"DaVinci is best remembered as the painter of the Mona Lisa (1504) and The Last Supper (1495). But he's almost equally famous for his astonishing multiplicity of talents: he dabbled in architecture, sculpture, engineering. geology, hydraulics and the military arts, all with success, and in his spare time doodled parachutes and flying machines that resembled inventions of the 19th and 20th centuries."

	let textArray = text.split('')

	useEffect(() => {
		if (start) {
			if (seconds === 0) {
				setSeconds(seconds + 1)
			} else if (seconds === 59) {
				setTimeout(() => {
					setSeconds(0)
					setMinutes(minutes + 1)
				}, 1000)
			} else {
				setTimer(
					setTimeout(() => {
						setSeconds(seconds + 1)
					}, 1000),
				)
			}
		}
		setAllSeconds(minutes * 60 + seconds)
	}, [seconds])

	useEffect(() => {
		if (countdown > 0 && countdown < 6) {
			setTimeout(() => {
				setCountdown(countdown - 1)
			}, 1000)
		} else if (countdown === 0) {
			setDisabled(false)
		}
	}, [countdown])



	function checkKeyHandler(e) {
		if (textArray[index] === e.key) {
			setWrongStep(true)
			setIndex(index + 1)
		} else {
			setWrongStepCount(wrongStepCount + 1)
			setWrongStep(false)
			setAccuracy(accuracy - 0.3)
		}
		if (index + 1 === textArray.length) {
			clearTimeout(timer)
			setFinish(true)
		}
	}

	

	return (
		<div className='testin-block'>
			{countdown === 6 && <Modal onClick={() => setCountdown(5)}/>}
			<div className='container'>
				<div className='testing__main'>
					<div className='testing-block__body'>
						{textArray.map((el, id) => {
							return (
								<span
									style={{
										background:
											id === index
												? wrongStep
													? 'green'
													: 'red'
												: 'white' && id < index
												? 'yellow'
												: 'white',
									}}
									key={id}
								>
									{el}
								</span>
							)
						})}
						<div className='refresh-block'>
							{countdown > 0 && countdown < 6 && (
								<Numbers>{countdown}</Numbers>
							)}

					<CachedIcon style={{ width: 30, height: 30 ,cursor:'pointer'}} />
						</div>
					</div>
					<textarea
						className='testing-block__area'
						cols='50'
						rows='10'
						onKeyPress={(event) => checkKeyHandler(event)}
						autoFocus
						disabled={disabled}
					></textarea>
					{finish ? (
						<div>
							<h1>Finish</h1>
							<h1>
								{Math.round(
									textArray.length / (allSeconds / 60),
								)}
							</h1>
							<h1>
								{accuracy === 100 ? 100 : accuracy.toFixed(1)}%
							</h1>
						</div>
					) : null}
				</div>
			</div>
		</div>
	)
}

export default Testing
