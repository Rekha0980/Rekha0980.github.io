import "../Routes/projects.css"
const Projects=()=>{
    return(
        <div className="project" id="project">
        <div className="project_h1"><h1>PROJECTS</h1></div>
        <div className="count_project">
            <div className="project_one">
                <h4>Airship</h4>
                <img src="img2.jpg" />
                <p>Features:</p>
                <p>Login-SignUp | Controlable Slider |Create Project Page  | Add  Project | Service Page  | Responsive website</p>
                <p className="tech">Tech Stack used:</p>

                <p>HTML | CSS | JavaScript </p>
                <a href="https://ephemeral-toffee-20d8a0.netlify.app/" target="_blank" rel="noopener noreferrer"> <button className="live">LIVE</button></a>
                <a href="https://github.com/mayurisamanta/Airship" target="_blank" rel="noopener noreferrer"><button className="code">CODE</button></a>

            </div>
            <div className="project_one">
                <h4>MaxFashion</h4>
                <img src="max.jpg" />
                <p>Features:</p>
                <p>Login-SignUp | Smooth landing page |Products pages | Cart page | Add to Cart | User Friendly  </p>
                <p className="tech">Tech Stack used:</p>

                <p>HTML | CSS | JavaScript </p>
                <a href="https://precious-brigadeiros-7fe526.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="live" >LIVE</button></a>
                <a href="https://github.com/bansalharshit/Unit-3-Project---Max-fashion-/tree/main/final%20data%20of%20harshit" target="_blank" rel="noopener noreferrer"><button className="code">CODE</button></a>
            </div>
            <div className="project_one">
                <h4>Engagebay</h4>
                <img src="img1.jpg" alt="pj" />
                <p>Features:</p>
                <p>Login-SignUp | Smooth landing page |Products pages | Cart page | Add to Cart | User Friendly </p>
                <p className="tech">Tech Stack used:</p>

                <p>HTML | CSS | JavaScript |React | ChakraUI</p>
                <a href="https://fluffy-biscochitos-789151.netlify.app/" target="_blank" rel="noopener noreferrer"><button className="live" >LIVE</button></a>
                <a href="https://github.com/Rekha0980/rekhayadav-light-temper-9603/tree/main/my-engagebay" target="_blank" rel="noopener noreferrer"><button className="code">CODE</button></a>

            </div>
        </div>


        {/* -------------------------------------- */}
        <div className="count_project">
            <div className="project_one">
                <h4>Five Metric</h4>
                <img src="img5.png" />
                <p>Features:</p>
                <p>Smooth landing page | Login-SignUp | Pricing Page | Dashboard Page  | Work Page | Time Page  | Responsive website</p>
                <p className="tech">Tech Stack used:</p>

                <p>ReactJs | Redux | JavaScript | ChakraUI | NodeJs | Express</p>
                <a href="https://five-metric.vercel.app/" target="_blank"> <button className="live">LIVE</button></a>
                <a href="https://github.com/skshm2000/Five-Metric-Time-Management-Webapp" target="_blank"><button className="code">CODE</button></a>

            </div>
            <div className="project_one">
                <h4>Cool Mart</h4>
                <img src="img6.png" />
                <p>Features:</p>
                <p>User Authentication | Searching products   |  Products Page   |  Cart page | Add to Cart | Admin Features | Responsive website </p>
                <p className="tech">Tech Stack used:</p>

                <p>ReactJs | Javascript | Redux | ChakraUI | Bootstrap </p>
                <a href="https://coolmartz.netlify.app/" target="_blank"><button className="live" >LIVE</button></a>
                <a href="https://github.com/Surendrakumar878/hissing-love-5128" target="_blank" rel="noreferrer"><button className="code">CODE</button></a>
            </div>
            <div className="project_one">
                <h4>Movie Animation</h4>
                <img src="imgg.png" alt="pj" />
                <p>Features:</p>
                <p>Login-SignUp | Smooth landing page |Products pages | Cart page | Add to Cart | User Friendly </p>
                <p className="tech">Tech Stack used:</p>

                <p> CSS | JavaScript |React </p>
                <a href="https://stately-cucurucho-6afe7f.netlify.app/" target="_blank"><button className="live" >LIVE</button></a>
                <a href="https://github.com/Rekha0980/Filter_animation" target="_blank" rel="noreferrer"><button className="code">CODE</button></a>

            </div>
        </div>


    </div>
    )
}

export default Projects