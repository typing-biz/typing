import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import CachedIcon from '@material-ui/icons/Cached'
import Modal from '../../components/Modal'
import Numbers from '../../components/Numbers/Numbers'
import { useSelector, useDispatch } from 'react-redux'
import { getTextRequest, sendTestingRequest } from '../../store/actions'
import ModalResult from '../../components/ModalResult'
import './style.scss'

function Testing() {
	const fetchedText = useSelector((state) => state.authReducer.text)
	const typingTextId = useSelector((state) => state.authReducer.id)
	const token = useSelector((state) => state.authReducer.token)

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
	const [allSeconds, setAllSeconds] = useState()
	const focusRef = useRef()

	let textArray = fetchedText ? fetchedText.split('') : []

	useEffect(() => {
		localStorage.setItem(
			'params',
			JSON.stringify({ speed, accuracy, typingTextId }),
		)
	}, [finish])

	useEffect(() => {
		dispatch(getTextRequest(token))
	}, [])

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
		setSpeed(Math.round(textArray.length / (allSeconds / 60)))
	}, [seconds])

	useEffect(() => {
		if (countdown > 0 && countdown < 6) {
			setTimeout(() => {
				setCountdown(countdown - 1)
			}, 1000)
		} else if (countdown === 0) {
			setDisabled(false)
			setStart(true)
			setSeconds(1)
			setTimeout(() => {
				focus()
			}, 0)
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
			dispatch(sendTestingRequest({ speed, accuracy, typingTextId }))
		}
	}

	function focus() {
		focusRef.current.focus()
	}

	const checkRefresh = () => {
		clearTimeout(timer)
		setStart(false)
		setAccuracy(0)
		setSpeed(0)
		setMinutes(0)
		setSeconds(0)
		setCountdown(6)
		setIndex(0)
	}

	return (
		<div className='testin-block'>
			{countdown === 6 && (
				<Modal
					onClick={() => setCountdown(5)}
					title='Вы готовы?'
				/>
			)}
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
													? '#90EE90'
													: '#F08080'
													: 'white' &&
												    id < index
													? '#ffff7a'
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
						</div>
					</div>
					<textarea
						className='testing-block__area'
						cols='50'
						rows='10'
						onKeyPress={(event) => checkKeyHandler(event)}
						ref={focusRef}
						disabled={disabled}
					></textarea>
					<div
								onClick={() => checkRefresh()}
								style={{
									width: 30,
									height: 30,
									cursor: 'pointer',
									position: 'relative',
									top: 150,
									right: 50,
									zIndex: 3,
								}}
							>
								<CachedIcon />
							</div>
					{finish && (
						<ModalResult
							speed={speed}
							accuracy={
								accuracy === 100 ? 100 : accuracy.toFixed(1)
							}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default Testing
