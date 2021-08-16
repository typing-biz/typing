import React from 'react'
import { Link } from 'react-router-dom'
import './ModalResult.scss'

function ModalResult({speed , accuracy}){
	return (
		<div className='parent__modal'>
			<section className='modal'>
				<div className='modal__wrapper'>
					<h1 className='modal__title'>Финиш</h1>
                    <h2>Скорость : {speed} {""}зн/мин</h2>
                    <h2>Точность :   {accuracy}%</h2>
					<Link to="/">
						<button className='modal__btn' >Ok</button>
					</Link>
				</div>
			</section>
		</div>
	)
}

export default ModalResult
