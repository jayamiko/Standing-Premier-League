import './payment.css';
import Navbar from '../../Component/Navbar/navbar'
import Footer from '../../Component/Footer/footer'
import Icon from '../../Image/Icon.png'
import Invoice from '../../Image/invoice.png'

function Payment() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card">
                    <div className="body">
                        <div className="d-flex justify-content-between">
                            <img src={Icon} className='logo' alt="dewe tour" />
                            <h4 className="card-title">Booking</h4>
                        </div>
                        <div className="d-flex justify-content-end p-0 m-0">
                            <h6 className="card-text"><b>Saturday,</b> 22 July 2021</h6>
                        </div>
                        <div className="d-flex justify-content-between mt-4">
                            <div className="card-body p-0 m-0">
                                <h4 className="title">6D/4N Fun Tassie Vacation</h4>
                                <p>Australia</p>
                                <div className='divWarning'>Waiting Payment
                                </div>
                            </div>
                            <div className="card-body d-flex flex-column p-0 m-0">
                                <h6 className="title">Date Trip</h6>
                                <p>26 Agustus 2020</p>
                                <h6 className="title">Accommodation</h6>
                                <p>Hotel 4 Nights</p>
                            </div>
                            <div className="card-body d-flex flex-column p-0 m-0">
                                <h6 className="title">Duration</h6>
                                <p>6 Day 4 Night</p>
                                <h6 className="title">Transportation</h6>
                                <p>Qatar Airways</p>
                            </div>
                            <div className="card-body d-flex align-items-end flex-column p-0 m-0">
                                <img className="invoice" src={Invoice} alt="Invoice" />
                                <p>Upload payment proof</p>
                            </div>
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Phone</th>
                                    <th className="title">Qty : 1</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td className='grey'>Jaya Miko</td>
                                    <td className='grey'>Male</td>
                                    <td className='grey'>083896833112</td>
                                    <td><b>Total : </b><b className="text-danger">IDR {12390000}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Payment;