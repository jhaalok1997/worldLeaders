import {useState,useEffect} from 'react'


const Countrydetail = () => {
    
   // const politicianName= new URLSearchParams(location.search).get('name')
    const [politicianData , setpoliticianData] = useState([])
    

    useEffect=(() => {fetch('https://freetestapi.com/api/v1/politicians')
                    .then((res) => res.json())
                    .then((data) => {
                    setpoliticianData({
                        name: data.name
                    })})
    },[])
                      
    
          
     
  return (
    <main>
        <div className="country-details-container">
            <span className="back-button">
                <a className="arrow-left" href='/'  onClick={()=> history.back()}> &#128281;</a> 
            </span>
            <div className="country-details">
                <img src={politicianData.image} alt=""/>
                <div className="details-text-container">
                    <h1>{politicianData.name}</h1>
                    <div className="details-text">
                        <p><b>Date of Birth :</b>{politicianData.dob}</p>    
                        
                           <span> <b>Country :</b> {politicianData.Country}</span><br/>
                           <br/>
                           <span> <b>Party :</b> </span><br/>
                           <br/>
                           <span><b>Position :</b> </span> <br/>
                           <br/>
                           <span><b>Years In Office :</b> </span><br/>
                           <br/> 
                            <p><b>Biography :</b> </p><br/>
                        
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Countrydetail;