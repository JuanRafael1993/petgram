import './App.css';
//components
import { ListOfCategories } from './components/listOfCategories';
import ListOfPhotoCard from './components/listOfPhotoCard';
import Logo from './components/logo';

function App() {
	return (
		<div>
			<Logo />
			<ListOfCategories />
			<ListOfPhotoCard />
		</div>
	);
}

export default App;
