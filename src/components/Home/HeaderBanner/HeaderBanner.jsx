
import Header from "@/components/Header/Header"
import Banner from '@/components/Home/Banner/Banner';
import "./HeaderBanner.css";

const HeaderBanner = () => {

    return (
        <div className='w-screen mx-auto bg-bandTernary bg-fixed'>
            {/* Glowing ball css effect  */}
            {/* <div className='absolute top-0 right-0'>
                <div className="glowing">
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>
                <div className="glowing">
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>

                <div className="glowing">
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>

                <div className="glowing">
                    <span style={{ '--i': 1 }}></span>
                    <span style={{ '--i': 2 }}></span>
                    <span style={{ '--i': 3 }}></span>
                </div>
            </div> */}
            <Header />
            <Banner />
        </div>
    );
};

export default HeaderBanner;