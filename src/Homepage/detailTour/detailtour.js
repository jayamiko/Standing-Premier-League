import Footer from '../../Component/Footer/footer'
import Navbar from '../../Component/Navbar/navbar'
import Background from '../../Image/australia_detail.png'
import OtherImg1 from '../../Image/auth1.png'
import OtherImg2 from '../../Image/auth2.png'
import OtherImg3 from '../../Image/auth3.png'
import "./detail.css";
import React, { useState } from "react";
import { Link } from 'react-router-dom'

function Detailtour() {
    return (
        <>
            <Navbar />
            <img className="hibiscusImg" src="assets/hibiscus 1.png" alt="hibiscus"></img>
            <img className="palmImg" src="assets/palm 1.png" alt="palm"></img>
            <main className="main">
                <h1 className="titledetail">6D/4N Fun Tassie Vacation + Sydney</h1>
                <p className='subtitle'>Australia</p>
                <div>
                    <img className="backgroundMain" src={Background} alt="Australia" />
                    <div className="background">
                        <div>
                            <img src={OtherImg1} />
                        </div>
                        <div>
                            <img src={OtherImg2} />
                        </div>
                        <div>
                            <a href="/">
                                <img src={OtherImg3} className="auth" />
                                <p className="text">+5</p>
                            </a>
                        </div>
                    </div>
                </div>
                <Detail>
                    <Info title="Information Trip" />
                    <div className="containerInfo">
                        <SubInfo title="Accomodation" icon="./assets/hotel.png" detail=" Hotel 4 Night" />
                        <SubInfo title="Transportation" icon="./assets/plane.png" detail=" Qatar Airways" />
                        <SubInfo title="Eat" icon="./assets/meal.png" detail=" Include as Itinenary" />
                        <SubInfo title="Duration" icon="./assets/time.png" detail=" 6 Day 4 Night" />
                        <SubInfo title="Date Trip" icon="./assets/calender.png" detail=" 26 August 2020" />
                    </div>
                </Detail>
                <Detail>
                    <Info title="Description" />
                    <Description desc="Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
                </Detail>
                <div className='containerdown'>
                    <div>
                        <IDR />
                    </div>
                    <div className='buttonCount'>
                        <State />
                    </div>
                </div>
                <div className='border'></div>
                <div>
                    <div className="book">
                        <Link to='/payment'>
                            <button className="btn btn-warning mt-3 mb-4"><b className="text-white">BOOK NOW</b></button>
                        </Link>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    );
}

function Detail({ children }) {
    return <article className="flex flex-col gap-3 p-4 overflow-auto">{children}</article>;
}

function Info(props) {
    return <header className="info">{props.title}</header>;
}

function SubInfo(props) {
    return (
        <div className="boxinfo">
            <p className="subinfo">{props.title}</p>
            <div className="boxinfodetail">
                <img src={props.icon} alt="img" className='icon' />
                <span className="just">{props.detail}</span>
            </div>
        </div>
    );
}
function Description(props) {
    return (
        <div className="flex-auto text-sm text-justify  text-gray-400">
            <p className='description'>{props.desc}</p>
        </div>
    );
}

function IDR() {
    let idr = 12398000;
    let priceIdr = idr.toString().split('').reverse().join(''),
        SumPrice = priceIdr.match(/\d{1,3}/g);
    SumPrice = SumPrice.join('.').split('').reverse().join('');
    return (
        <>
            <span className='idr'>IDR {SumPrice}<span className="person">/Person</span></span>
            <p className='total'>Total : </p>
        </>
    )
}

function State(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState) => prevState + 1);
    };

    const decrement = () => {
        setCount(count <= 0 ? count : count - 1);
    };

    let idr = 12398000;
    const totalCount = idr * count;
    let prices = totalCount.toString().split('').reverse().join(''),
        totalPrice = prices.match(/\d{1,3}/g);
    totalPrice = totalPrice.join('.').split('').reverse().join('');

    return (
        <>
            <div className='divButton'>
                <button onClick={increment} className="increment">
                    <img src='./assets/plus.png' className='iconCount' />
                </button>
                <p className='count'>{count}</p>
                <button onClick={decrement} className="increment">
                    <img src='./assets/minus.png' className='iconCount' />
                </button>
            </div>
            <div className="divTotal">
                <div><h4 className="idr">IDR. {totalPrice}</h4></div>
            </div>
        </>
    );
}

export default Detailtour;