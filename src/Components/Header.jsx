
import {NavLink} from 'react-router-dom'


export default  function Header() {
    return(
        <>
               <header>                
                    <div id="SideNav">                            
                    <nav>
                        <ul>
                        <li>
                            <NavLink to ='/'>
                                Home
                            </NavLink>
                        
                        </li>
                        <li>
                            <NavLink to ='/resume'>
                                Resume
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to ='/portfolio'>
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to ='/contact'>
                                Contact
                            </NavLink>
                        </li>
                        </ul>
                    </nav>
                    </div>
                </header>
        </>
    )
}