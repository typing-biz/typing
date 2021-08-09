import React from 'react'
import { useSelector } from 'react-redux'
import './Rating.scss'

function Rating() {

    const rating = useSelector((state) => state.user)

	return (
		<div className='rating'>
			<div className='container'>
				<h1>Рейтинг</h1>
				<p>
					Получи сертификат скорости печати, чтобы войти в рейтинг
					лучших результатов.
				</p>
				<div className='rating__rating-block'>
					<table>
						<tr>
							<th>Позиция</th>
							<th></th>
							<th>Скорость</th>
							<th>Точность</th>
						</tr>
						<tr>
							<td className="first">1</td>
							<td>Oleg Gazmanovaevwrebethrthr</td>
							<td>500</td>
							<td>100</td>
						</tr>
						<tr>
							<td className="first">1</td>
							<td>Oleg wrebethrthr</td>
							<td>500</td>
							<td>100</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	)
}

export default Rating
