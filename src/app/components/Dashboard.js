import { headers } from "next/headers";
import { useEffect, useState } from "react";


const Dashboard = () => {

    let [joke, setJoke] = useState([]);

    useEffect(() => {
        fetch(`https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=E
        N&amount=10`)
        .then((res) => res.json())

        .catch((err) => {
            console.log(err)
        })

    } []) 

    return (
      <div>
        <h1>Jokes of the day</h1>
        
        <div className="jokes-container">
             
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  