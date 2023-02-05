import "./stats.css"

const Stat=()=>{
    return(
        <div className="githubstats">
            <div className="stas_heading"><h1>MY STATISTICS</h1></div>
            <div  className="stats_box1">
                <a href="https://github.com/Rekha0980"><img src="https://github-readme-streak-stats.herokuapp.com/?user=Rekha0980&theme=buefy&hide_border=false"/></a>
            </div>
            <div className="stats_box2">
            <div >
                <a href="https://github.com/Rekha0980"><img className="st" src="https://github-readme-stats.vercel.app/api?username=Rekha0980&theme=buefy&hide_border=false&include_all_commits=true&count_private=true"/></a>
            </div>
            <div>
                <a href="https://github.com/Rekha0980"><img className="st2" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Rekha0980&theme=buefy&hide_border=false&include_all_commits=true&count_private=true&layout=compact"/></a>
            </div>
            </div>
           
        </div>
    )
}
export default Stat

