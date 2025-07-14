import homeImage from "../../../assets/home.svg";

function HeroSection(){
return(
    <div className="HeroSectionContainer">
        <div className="inner-container">
            <div className="text-section">
                <h1> <span>Smartest</span> HR Because the <span>Smartest</span> Person in the Room Deserves a <span>Smartest</span> System </h1>
                <p>Say goodbye to messy spreadsheets and scattered tools
                     With our <span>smarter</span> HR platform, you can manage employees,
                      handle leave requests, and share company updates — all in one smart, simple place</p>
            </div>
            <div className="img-section">
                <img src={homeImage} alt="no" />
            </div>
        </div>
    </div>
)
}

export default HeroSection