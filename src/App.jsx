import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Loading from './components/Shared/Loading';
import LeftSide from './components/SideElement/LeftSide';
import RightSide from './components/SideElement/RightSide';
import Work from './components/Work/Work';

const App = () => {
	const [isLoading, setIsLoading] = React.useState(true);

	if (isLoading) {
		return <Loading loading={setIsLoading} />;
	}

	return (
		<>
			<Navbar />
			<LeftSide />
			<RightSide />
			<main>
				<Header />
				<About />
				<Work />
				<Experience />
				<Contact />
			</main>
		</>
	);
};

export default App;
