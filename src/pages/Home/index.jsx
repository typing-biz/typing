import React from 'react'
import './Home.scss'

function Home() {
	return (
		<div className='home'>
			<div className="container">
				<h2>Ratatype</h2>
				<div className='home__main-block'>
					<h1>Печатай <br/> быстрее</h1>
					<div>
						<p>
							Нучись быстро печатать с клавиатурным тренажером{' '}
							<br />
							Ratatype. А уроки слепой печати помогут тебе <br />
							использовать все 10 пальцев.
						</p>
						<img src='' alt='' />
					</div>
					<div className="home__btns">
						<button className="home__start-btn">Начать печатать</button>
						<button className="home__rating-btn">Рейтинг</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
