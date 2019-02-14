import React from 'react';
import Statistics from './Statistics'

const ThePlatforme = [
        {
        image: "https://www.docplanner.com/img/flag.png",
        scset :"https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",
        titre:"Leader in \n 10 countries",
        paragraph :"Poland, Turkey, Spain, Italy, \n Czech Republic, Mexico, Brazil, \n Colombia, Argentina and Chile"
        }
        ,
        {
        image: "https://www.docplanner.com/img/visits.png",
        scset :"https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x",
        titre:"1 million \n appointments",
        paragraph :"booked last month"
        }
        ,
        {
        image: "https://www.docplanner.com/img/patients.png",
        scset :"https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x",
        titre:"30 million unique \n patients",
        paragraph :"visit us every month"
        }
        ,
        {
        image: "https://www.docplanner.com/img/doctors.png",
        scset :"https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x",
        titre:"2 million active \n doctors",
        paragraph :"trust in our solutions"
        }

        
    
    
]

const  Platform = ()  => {
        return(
        <div className="plateform">    
            <div className="platforme-word">
                <h1>The world's <br/>biggest healthcare platform</h1>
                <p>We work from 6 offices all over the world, bringing Docplanner <br/> Group to life in almost 20 countries</p>
                <div className="container">
                    <img className="lead__logo" src="https://www.docplanner.com/img/logo.png"/>
                </div>
            </div>
            <div  className="listbloc">    
                <Statistics platformList={ThePlatforme}/>
            </div>
        </div>
        )
}

export default Platform;