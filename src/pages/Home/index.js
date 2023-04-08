
import Header from "~/components/Layout/components/Header";
import Product from "~/components/Layout/components/Product";
import Slider from "~/components/Layout/components/Slider";
function Home() {
    return (
        <div className="wrapper">
            <Header />
            <Slider />
            <Product/>
        </div>
    );
}

export default Home;