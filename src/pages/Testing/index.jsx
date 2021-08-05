import React, { useState } from 'react'
import { useEffect } from 'react'
import './style.scss'

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

	let text =
		"Every 5 seconds a computer gets infected with a virus. 13% of Americans actually believe that some parts of the moon are made of cheese. The world's youngest parents were 8 and 9 and lived in China in 1910. If you could count the number of times a cricket chirps in one minute, divide by 2, add 9 and divide by 2 again, you would have the correct temperature in Celsius degrees... How do they know that?"

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
		setTimeout(() => {
			setStart(true)
			setSeconds(1)
		}, 5000)
	}, [])

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
			<h1>{`${minutes}:${seconds}`}</h1>
			<h1>
				{textArray.map((el,id) => {
					// let color = ''E
					// if(i < text.length){
					// 	color = s === text[i] ? 'green' : 'red'
					// }
					return (
						<span
							style={{
								background:
									id === index
										? wrongStep
											? 'green'
											: 'red'
										: 'white',
							}}
							key={id}
						>
							{el}
						</span>
						// <span key={`$(s)_`} className={color}>{s}</span>
					)
				})}
			</h1>
			<textarea
				className='testing-block__area'
				cols='50'
				rows='10'
				onKeyPress={(event) => checkKeyHandler(event)}
				autoFocus
			></textarea>
			{finish ? (
				<div>
					<h1>Finish</h1>
					<h1>{Math.round(textArray.length / (allSeconds / 60))}</h1>
					<h1>{accuracy === 100 ? 100 : accuracy.toFixed(1)}%</h1>
				</div>
			) : null}
		</div>
	)
}

export default Testing
