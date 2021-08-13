import React, { useState } from 'react'
import { useEffect } from 'react'
import CachedIcon from '@material-ui/icons/Cached'
import Modal from '../../components/Modal'
import './style.scss'
import Numbers from '../../components/Numbers/Numbers'
import { useSelector, useDispatch } from 'react-redux'
import { getTextRequest, sendTestingRequest } from '../../store/actions'


function Testing() {
	const fetchedText = useSelector((state) => state.authReducer.text)
	const fetchedId = useSelector((state) => state.authReducer.id)

	

	const dispatch = useDispatch()

	const [index, setIndex] = useState(0)
	const [wrongStep, setWrongStep] = useState(true)
	const [wrongStepCount, setWrongStepCount] = useState(0)
	const [accuracy, setAccuracy] = useState(100)
	const [start, setStart] = useState(false)
	const [finish, setFinish] = useState(false)
	const [timer, setTimer] = useState()
	const [minutes, setMinutes] = useState(0)
	const [seconds, setSeconds] = useState(0)
	const [countdown, setCountdown] = useState(6)
	const [disabled, setDisabled] = useState(true)
	const [speed, setSpeed] = useState(0)

	


	//text
	// console.log(fetchedText)
	// console.log(fetchedId)

	let textArray = fetchedText ? fetchedText.split('') : []
	

	useEffect(() => {
		setSpeed(Math.round(textArray.length / (minutes + seconds / 60)))
		// console.log('textArray.length is ', textArray.length)
		// console.log('minutes is ', minutes + seconds / 60)
	}, [seconds])

	useEffect(() => {
		localStorage.setItem(
			'params',
			JSON.stringify({ speed, accuracy, fetchedId ,allSeconds}),
		)
	}, [finish])
	
	let allSeconds = minutes * 60 + seconds

	useEffect(() => {
		dispatch(getTextRequest())
	}, [])

	useEffect(() => {
		// console.log('kek start')
		if (start) {
			// console.log('kek start in')
			if (seconds === 0) {
				// console.log('first case')
				setSeconds(seconds + 1)
			} else if (seconds === 59) {
				// console.log('2 case')
				setTimeout(() => {
					setSeconds(0)
					setMinutes(minutes + 1)
				}, 1000)
			} else {
				console.log('3 case')
				setTimer(
					setTimeout(() => {
						setSeconds(seconds + 1)
					}, 1000),
				)
			}
		}
	}, [seconds, start])

	useEffect(() => {
		if (countdown > 0 && countdown < 6) {
			setTimeout(() => {
				setCountdown(countdown - 1)
			}, 1000)
		} else if (countdown === 0) {
			setDisabled(false)
			setStart(true)
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
			dispatch(sendTestingRequest({ speed, accuracy, fetchedId ,minutes,seconds}))
		}
	}

	return (
		<div className='testin-block'>
			{countdown === 6 && <Modal onClick={() => setCountdown(5)} />}
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

							<CachedIcon
								style={{
									width: 30,
									height: 30,
									cursor: 'pointer',
								}}
							/>
						</div>
					</div>
					<textarea
						className='testing-block__area'
						cols='50'
						rows='10'
						onKeyPress={(event) => checkKeyHandler(event)}
						autoFocus={!disabled}
						
						disabled={disabled}
					></textarea>
					{finish ? (
						<div>
							<h1>Finish</h1>
							<h1>{speed}</h1>
							<h1>
								{accuracy === 100 ? 100 : accuracy.toFixed(1)}%
							</h1>
						</div>
					) : null}
					<h1>{minutes}:</h1>
					<h1>{seconds}</h1>
				</div>
			</div>
		</div>
	)
}

export default Testing
