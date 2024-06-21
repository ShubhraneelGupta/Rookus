import './Hero.scss'

const Hero = ({title, desc}) => {
    return <div className="wrapper">
        <div className="title">
        {title}
            <div className="desc">
                {desc}
            </div>
        </div>
        <div className="app" style={{backgroundColor:"white", height:"60vh", width:"40vw"}}>
           <h1>Placeholder</h1> 
        </div>
    </div>
}

export default Hero;