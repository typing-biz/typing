import React from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
function Home() {
	return (
		<div className='home'>
			<div className='container'>
				<div className='home__main-block'>
					<div className='home__main-block'>
						<h1>
							Печатай <br /> быстрее
						</h1>
						<p className='home__description'>
							Нучись быстро печатать с клавиатурным тренажером
							Tezter. <br /> А уроки слепой печати помогут тебе
							использовать все 10 пальцев.
						</p>
						<div className='home__test-block'>
							<p>Пройди тест скорости печати</p>
							<Link to='/testing'>
								<button className='home__btn-start'>
									Начать
								</button>
							</Link>
						</div>
						<p className='home__speed'>
							Узнай свою скорость печати и удиви приятелей или{' '}
							<br />
							руководство полученным сертификатом.
						</p>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default Home
