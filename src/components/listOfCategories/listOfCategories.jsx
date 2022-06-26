import { useState, useEffect } from 'react';
//css
import './listOfCategories.scss';
//components
import { Category } from '../category';
import data from '../../api/db.json';

export const ListOfCategories = () => {
	const [showFixed, setShowFixed] = useState(false);

	function renderList(fixed) {
		return (
			<ul className={`list_categories ${fixed ? 'fixed' : ''}`}>
				{data.categories.map((category) => (
					<li key={category.id}>
						<Category {...category} />
					</li>
				))}
			</ul>
		);
	}

	useEffect(() => {
		const onScroll = () => {
			const newShowFixed = window.scrollY > 200;

			newShowFixed ? setShowFixed(true) : setShowFixed(false);
		};

		document.addEventListener('scroll', onScroll);

		return () => document.removeEventListener('scroll', onScroll);
	}, [showFixed]);

	return (
		<>
			{renderList()}
			{showFixed && renderList(true)}
		</>
	);
};
