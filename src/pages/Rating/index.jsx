import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getRatingRequest } from '../../store/actions'
import moment from 'moment'
import pic1 from '../../assets/img/skorost.png'
import pic2 from '../../assets/img/tochnost.png'
import pic3 from '../../assets/img/star.png'
import pic4 from '../../assets/img/date.png'
import './Rating.scss'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			'& > *': {
				marginTop: theme.spacing(2),
				display: 'flex',
				justifyContent: 'center',
				marginBottom: '40px',
			},
		},
	}),
)

function Rating() {
	const rating = useSelector((state) => state.ratingReducer.rating)
	const all_users_count = useSelector((state) => state.ratingReducer.all_users_count)
	const [pageIndex, setPageIndex] = useState(1)

	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getRatingRequest({ pageIndex }))
	}, [pageIndex])

	const computeThePageCount = () => Math.ceil(all_users_count / 5)
	const classes = useStyles()
	return (
		<div className='rating-block'>
			<div className='container'>
				<div className='rating'>
					<div className='rating-block__one'>
						<h1>Рейтинг</h1>
						<p>
							Получи сертификат скорости печати, чтобы войти в
							рейтинг лучших результатов.
						</p>
					</div>
					<div className='rating-block-main'>
						<div className='rating-block__two'>
							<span className='rating-block__two__title1'>
								<img src={pic1} />
								СКОРОСТЬ, ЗН./МИН
							</span>
							<span className='rating-block__two__title1'>
								{' '}
								<img src={pic2} />
								ТОЧНОСТЬ, %
							</span>
							<span className='rating-block__two__title1'>
								{' '}
								<img src={pic3} />
								ОЧКИ
							</span>
							<span className='rating-block__two__title1'>
								{' '}
								<img src={pic4} />
								ДАТА
							</span>
						</div>
						<div
							style={{
								borderTop: ' 1px solid #DADADA',
								width: 1000,
							}}
						>
							{rating.map((el, id) => {
								return (
									<div
										className='rating__rating-block'
										key={id}
									>
										<div
											style={{
												display: 'flex',
												alignItems: 'center',
											}}
										>
											<img
												src={el.rating.user.thumbnail}
												style={{
													width: 50,
													height: 50,
													marginRight: 10,
													borderRadius: 50,
												}}
											/>
											{el.rating.user.fullName}
										</div>
										<div>{el.rating.speed}</div>
										<div>{Math.round(el.rating.accuracy)}%</div>
										<div>{Math.round(el.rating.score)}</div>
										<div>
											{moment(el.rating.date).format(
												'lll',
											)}
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<div className={classes.root}>
					<Pagination count={computeThePageCount()} onClick={(e) => setPageIndex(e.target.innerText)}/>
				</div>
			</div>
		</div>
	)
}
export default Rating
