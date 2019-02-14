import React from 'react';
import City from './City'

const Cities = [
        {
        image: "https://www.docplanner.com/images/warsaw.png",
        scset :"https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",
        titre:"Warsaw",
        }
        ,
        {
        image: "https://www.docplanner.com/images/barcelona.png",
        scset :"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
        titre:"Barcolona",
        }
        ,
        {
        image: "https://www.docplanner.com/images/istanbul.png",
        scset :"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",
        titre:"Istanbul",
        }
        ,
        {
        image: "https://www.docplanner.com/images/rome.png",
        scset :"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x",
        titre:"Rome",
        }
        ,
        {
        image: "https://www.docplanner.com/images/mexico-city.png",
        scset :"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",
        titre:"Mexico City",
        }
        ,
        {
        image: "https://www.docplanner.com/images/curitiba.png",
        scset :"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",
        titre:"Curitiba",
        }

        
    
    
]

const  Logo = ()  => {
        return(
        <div className="cities">      
                <City cityList={Cities}/>            
        </div>
    )
}

export default Logo;