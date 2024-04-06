import { useLoaderData } from "react-router-dom/dist/umd/react-router-dom.development";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsContainer from "./newsContainer/NewsContainer";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {
    const news = useLoaderData();
    console.log(news);
    const a = useContext(AuthContext);
    console.log(a);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* News Container */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsContainer aNews = {aNews} key={aNews._id}></NewsContainer>)
                    }
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;