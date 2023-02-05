import GitHubCalender from "react-github-calendar"

import "./Github.css"
export const Calender=()=>{
    
    return(
        <div  className="cal">
       <div className="cal_heading" >
        <h1>MY GITHUB CALENDER</h1>
        </div> 
        <GitHubCalender username="Rekha0980" />
    </div>
    )
}
