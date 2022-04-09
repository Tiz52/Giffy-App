import { FC } from "react"
import { Link } from "react-router-dom"

import './styles.css';

interface props {
	name: string;
	options: string[]
}

export const Category: FC<props> = ({ name, options = [] }) => {
	return (
		<div className='Category'>
			<h3 className='Category-title'>{ name }</h3>
			<ul className='Category-list'>
				{ options.map(singleOption => (
				<li key={ singleOption }>
					<Link className='Category-link' to={`/search/${singleOption}`}>
					{ singleOption }
					</Link>
					</li>)) }
			</ul>
		</div>
	)
}