import { Link } from 'react-router-dom';

export default function Home (){
    return (
            <>        
                 <section id="welcome">
                    
                    <h3>
                        <span className="w">W</span>
                        <span className="E">E</span>
                        <span className="l">L</span>
                        <span className="c">C</span>
                        <span className="o">O</span>
                        <span className="m">M</span>
                        <span className="e">E</span>
                        <span className="exclamation">!</span>
                    </h3>
                  
                </section>
                <section id="Home">
                    <div className="Home-box">                      
                        <div className="overlay" />
                        <div className="Home-desc">
                            <h1>I<strong><span>'</span></strong>m Parmis Morshedi<span>.</span></h1>
                            <p>Fullstack .net developer student</p>
                        </div>
                    </div>
                    <div className="btn-about">
                         <Link to="/about">
                            About me
                         </Link> 
                        <a href="#" onClick={() => window.print()}>
                            Print
                        </a>                       
                    </div>

                </section>
                
               
            </>


    )
}


        