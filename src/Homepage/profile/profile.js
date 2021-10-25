import Navbar from '../../Component/Navbar/navbar'
import Footer from '../../Component/Footer/footer'
import Payment from '../payment/payment';
import Maps from '../../Image/maps.png'
import Avatar from '../../Image/avatar.png'
import Phone from '../../Image/phone.png'
import Mail from '../../Image/mail.png'
import Picture from '../../Image/profile.png'
import './profile.css'

function Profile() {
    return (
        <div>
            <Navbar />
            <div className='cardProfile'>
                <div className='section'>
                    <span className='title'>Personal Info</span>
                    <div className='divicon'>
                        <img src={Avatar} class='icon'></img>
                        <img src={Mail} class='icon'></img>
                        <img src={Phone} class='icon'></img>
                        <img src={Maps} class='icon'></img>
                    </div>
                    <div className='divInfo'>
                        <h4 className='name'>Jaya Miko</h4>
                        <p className='sub'>Full Name</p>
                        <h4 className='name'>jayamiko4@gmail.com</h4>
                        <p className='sub'>Email</p>
                        <h4 className='name'>+6285591633631</h4>
                        <p className='sub'>Mobile Phone</p>
                        <h4 className='name'>Perumahan Permata Bintaro</h4>
                        <p className='sub'>Address</p>
                    </div>
                </div>
                <div className='pict'>
                    <img src={Picture} className='profilePict' alt='profile'></img>
                    <div class="divbutton"><input type='file' className='toggle'>Change Photo Profile</input></div>
                </div>
            </div>
            <div>
                <h1>History Trip</h1>
                <Payment />
                <Footer />
            </div>
        </div>
    )
}

export default Profile;