import React from 'react'
import './Profile.scss'
import { useDispatch, useSelector } from 'react-redux'
import vector1 from '../../assets//img//Vector.png'
import vector2 from '../../assets//img//Vector-2.png'
import googleIcon from '../../assets/img/goog-icon.jpg'
import gitIcon from '../../assets/img/git-icon.jpg'
import linkIcon from '../../assets/img/link-icon.jpg'
import { useEffect } from 'react'
import { getRatingUserRequest } from '../../store/actions'
// import moment from 'moment'

export const Profile = () => {
	const state = useSelector((state) => state.authReducer.user)
	const token = useSelector((state) => state.authReducer.token)
	const history = useSelector((state) => state.ratingReducer.history)

	console.log(state)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getRatingUserRequest(token))
	}, [])

	return (
		<div className='profile'>
			<div className='container'>
				<div className='profile__wrapper'>
					<div className='profile__first-block'>
						<div className='profile__img-fio'>
							<img
								src={state.thumbnail}
								className='profile__img'
								alt=''
							/>
							<h1 className='profile__title-name'>
								{state.fullName}
							</h1>
						</div>
						<div className='profile__speed-wrapper'>
							<img
								src={vector1}
								className='profile__icon-1'
								alt=''
							/>

							<div>
								<h3 className='profile__speed-title'>
									СКОРОСТЬ ПЕЧАТИ
								</h3>
								<h2 className='profile__speed'>123</h2>
							</div>
						</div>
						<div className='profile__accuracy-wrapper'>
							<img
								src={vector2}
								className='profile__icon-1'
								alt=''
							/>
							<div>
								<h3 className='profile__speed-title'>
									ТОЧНОСТЬ
								</h3>
								<h2 className='profile__speed'>95,5%</h2>
							</div>
						</div>

						<div className='profile__socials'>
							<img src={googleIcon} alt='' />
							<img src={gitIcon} alt='' />
							<img src={linkIcon} alt='' />
						</div>
					</div>
					<div className='profile__rating-block'>
						<h1 className='profile__rating-title'>
							Результаты тестов | История
						</h1>
						<div className='profile__rating-des'>
							<p>СКОРОСТЬ ПЕЧАТИ, ЗН./МИН</p>
							<p>ТОЧНОСТЬ, %</p>
							<p>ДАТА / ВРЕМЯ</p>
						</div>
		
						{history.map((el, id) => {
							return (
								<div key={id} className='profile__rating-wrapper' >
									<div>
										<span>{el.speed}</span>
										<div></div>
									</div>
									<div>
										<span>{el.accuracy}</span>
										<div></div>
									</div>
									<div className='profile__rating-date'>
										{/* <span>{moment(el.date).fotmat('lll')}</span> */}
										{/* <div className='profile__rating-hour'>
											09:28
										</div> */}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Profile
