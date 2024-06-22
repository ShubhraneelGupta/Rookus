import './Hero.scss'
import iPhone from '../../assets/iPhone-png.png'
const Hero = ({title}) => {
    return <div className="wrapper">
        <div className="title">
        <img src={title}/>
            <div className="desc">
                where <span style={{fontWeight:"bolder"}}>AI </span> meets <span style={{fontStyle:"italic"}}>fashion</span>
            </div>
        </div>
        <div className="app">
           <img src={iPhone} alt="" srcset="" />
        </div>
    </div>
}

export default Hero;