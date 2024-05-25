import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import Products from "../components/Home/Products";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Accordion></Accordion>
        </div>
    );
};

export default Home;