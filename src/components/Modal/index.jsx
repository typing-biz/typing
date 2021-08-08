import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.scss'

function Modal() {
	return (
		<div>
			<section className='modal'>
				<div className='modal__wrapper'>
					<h1 className='modal__title'>Вы готовы?</h1>
					<Link to="/testing">
						<button className='modal__btn'>Начать печатать</button>
					</Link>
				</div>
			</section>
		</div>
	)
}

export default Modal
