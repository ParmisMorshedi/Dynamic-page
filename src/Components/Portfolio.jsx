 import React, { useState, useEffect } from 'react'
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {BarLoader} from "react-spinners";


 export default function Portfolio(){
    const [repos, setRepos]= useState([])
    const [isLoading, setIsloading] = useState(true)
    const url = 'https://api.github.com/users/ParmisMorshedi/repos'
    

    useEffect(() =>{
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // Select the projects with index 3, 6, 7 and 14 from the data
                const selectProjects = [
                    { ...data[3], imageUrl: 'https://imgtr.ee/images/2024/03/23/21975d11238fa711b0e08431c34192c1.jpeg'}, //cv-hemsida
                    { ...data[8], imageUrl: 'https://imgtr.ee/images/2024/03/23/b495d1e48a8306476a99652286b5ca5b.jpeg' }, 
                    { ...data[7], imageUrl: 'https://imgtr.ee/images/2024/03/23/0ccf05ebfbb3f06f7cb18dc930d6b972.jpeg' },
                    { ...data[16], imageUrl: 'https://imgtr.ee/images/2024/03/23/a041d9ff27dc46bf20c96b7fec09a8c5.jpeg' }, //Tread
                ];
                   
                
                

                 setTimeout(() => { 
                    setRepos(selectProjects)
                    setIsloading(false)

                 }, 2000)

                

            })
    }, [])
    
    if (isLoading) {
       return  <BarLoader
       color="#36d7b7"
       height={30}
       speedMultiplier={0.2}
       width={2000}
       />  
    }

    return(
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <div className="row justify-content-center">
                    {repos.map((repo, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <Card style={{ width: '100%'  }}>
                                <Card.Img variant="top" src={repo.imageUrl} alt="cards images" />
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title className="text-center">
                                        <h3>Project name: </h3>
                                        <p>{repo.name}</p>
                                    </Card.Title>
                                    <Card.Text className="text-center" >
                                        <h3>Description: </h3>
                                        <p>{repo.description}</p>
                                    </Card.Text>
                                    <a href={repo.html_url} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                        Go to this project
                                    </a>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
        </div>
    );
}
    

