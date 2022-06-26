//css
import './listOfPhotoCard.scss';
//componentes
import PhotoCard from '../photoCard';

const ListOfOPhotoCard = () => {
	return (
		<ul>
			{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id) => (
				<PhotoCard key={id} />
			))}
		</ul>
	);
};

export default ListOfOPhotoCard;
