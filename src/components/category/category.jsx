//css
import './category.scss';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
	return (
		<a href={path} className="img_link">
			<img src={cover} alt="" />
			{emoji}
		</a>
	);
};
