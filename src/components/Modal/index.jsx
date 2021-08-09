import React from 'react'
import { Link } from 'react-router-dom'
import './Modal.scss'

function Modal({onClick}) {
	return (
		<div className='parent__modal'>
			<section className='modal'>
				<div className='modal__wrapper'>
					<h1 className='modal__title'>Вы готовы?</h1>
					<Link to="/testing">
						<button className='modal__btn' onClick={onClick}>Начать печатать</button>
					</Link>
				</div>
			</section>
		</div>
	)
}

export default Modal
