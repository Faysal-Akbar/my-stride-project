import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";
import Reviews from "../components/Home/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Accordion></Accordion>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;