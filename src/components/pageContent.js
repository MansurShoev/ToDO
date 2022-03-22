import React from "react";


function Page (props){
  const img = [
    {
      img:"Bandmember",
      name: "mansur",
      className:"w3-round w3-margin-bottom",
      style: "width: 60%"
    },
    {
      img:"Bandmember",
      name: "bahodur",
      className:"w3-round w3-margin-bottom",
      style: "width: 60%"
    },
    {
      img:"Bandmember",
      name: "yosin",
      className:"w3-round w3-margin-bottom",
      style: "width: 60%"
    }
  ]


    return <div>
         <div className="w3-third">
            
            {
              img[1]
            }
            
            </div>
    </div>

    
}

      
  
    

export default Page