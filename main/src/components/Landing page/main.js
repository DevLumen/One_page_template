import React from "react";
import '../styles/main.css';
import WelcomePage from "../Welcome page/welcome_page";
import CollectionsPage from "../Collections page/collections_page";
import ReviewsPage from "../Reviews page/reviews_page";
import Footer from "../Footer/footer";

export default function Main() {
    return (
        <div className="main_container">
            <div id="home" className="block_one">
                <WelcomePage/>
            </div>
            <div id="collection" className="block_two">
                <CollectionsPage/>
            </div>
            <div id="reviews" className="block_three">
                <ReviewsPage/>
            </div>
            <div id="footer" className="footer_block">
                <Footer/>
            </div>
        </div>
    )
}