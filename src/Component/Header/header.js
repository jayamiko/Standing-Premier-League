import React from "react";
import "./header.css";
import Navbar from "../Navbar/navbar";
import Card from "../../Card/Card";

function Header() {
    return (
        <>
            <Navbar />
            <div className="header-image">
                <div className="container-lg">
                    <h1>Explore</h1>
                    <h2>your amazing city together</h2>
                </div>
                <label for="basic-addon2" class="form-label0 header-label ">
                    Find great places to holliday
                </label>
                <div className="container-fluid d-flex input-container">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            id="basic-addon2"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <a class="input-group-text" id="basic-addon2">
                            Search
                        </a>
                    </div>
                </div>
                <div className="cards-container d-flex gap-5 justify-content-center">
                    <Card
                        image="assets/guarantee 1.png"
                        title="Best Price
                 Guarantee"
                        subtitle="A small river named Duren flows by their place and supplies"
                    />
                    <Card
                        image="assets/hand.png"
                        title="Travellers Love Us"
                        subtitle="A small river named Duren flows by their place and supplies"
                    />
                    <Card
                        image="assets/agent.png"
                        title="Best Travels Agent"
                        subtitle="A small river named Duren flows by their place and supplies"
                    />
                    <Card
                        image="assets/support.png"
                        title="Our Dedicated
                 Support"
                        subtitle="A small river named Duren flows by their place and supplies"
                    />
                </div>
            </div>
        </>
    );
}

export default Header;