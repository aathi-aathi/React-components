import './App.css'

function AboutSection(){
    return(
        <div className='bottom'>
            <div className='about-sec'>
                <div className='about'>
                    <a href="#">About </a>
                    <a href="#">Contact</a> 
                    <a href="#">Terms of Use</a>
                    <a href="#">Privacy Policy</a> 
                </div>
                <p>© Your Website 2023. All Rights Reserved.</p>
            </div>
            <div className='social-media'>
                <img src='https://cdn-icons-png.flaticon.com/128/5968/5968764.png'/>
                <img src='https://cdn-icons-png.flaticon.com/128/1384/1384063.png'/>
                <img src='https://cdn-icons-png.flaticon.com/128/5969/5969020.png'/>
            </div>
        </div>
    )
}
export default AboutSection 