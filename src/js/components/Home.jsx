import Navbar from "./NavBar"
import Jumbotron from "./Jumbotron";
import CustomCard from "./Card";
import Footer from "./Footer";
import { Container } from "react-bootstrap";



const Home = () => {
	return (
		<div>
			<Navbar />
			<Container >
				<Jumbotron />
				< CustomCard />
			</Container>
			<Footer />
		</div>

	);
}




export default Home;
