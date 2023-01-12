import Layout from '../components/Layout'
import { experiences, skills, projects } from '../profile'
import Link from "next/link";


// console.log(skills)
const Index = () => (
    <Layout> 
        

        {/* header card */}
        <header className="row">
            <div className='col-md-12'> 
                <div className='card card-body bg-secondary text-light animate__animated animate__fadeIn'>
                    <div className='row'> 
                        <div className='col-md-4'> 
                            <img src="img.png" alt="" className='img-fluid'/>
                        </div>
                        <div className='col-md-8'>
                            <h1>Fernando Piñango</h1>
                            <h3> Fullstack Developer</h3>
                            <p>
                                <b>
                                Desarrollador Fullstack
                                </b>. En mis periodos laborales he logrado desarrollar
                            skills en tecnologías para desarrollo de aplicaciones web, especialmente
                            en stack MEAN (MongoDB, Express, Angular, Node.js), También tengo un
                            gran interés por la tecnología blockchain y criptografía, áreas en las
                            cuales me encuentro en constante aprendizaje.
                            </p>    
                            <Link href="/hireme" legacyBehavior>
                                <a className="btn btn-outline-light">Hire Me</a>
                            </Link>
                            {/* <a href="/hireme">Hire Me</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* second seccion */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">

                        <h2>Skills</h2>

                        {
                            skills.map(({skill, percentage}, i )=> (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div 
                                        className="progess-bar" 
                                        role="progressbar" 
                                        style={{width:`${percentage}%`, backgroundColor:"black"}}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        >

                                            
                                        </div>
                                    </div>
                                </div>
                            ))
                        }



              


                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h2>Experience</h2>

                        <ul>
                            {
                                experiences.map(({title, from, to, description, location}, index) => (
                                <li key={index}>
                                    <div> 
                                        <h4> {title} </h4>
                                        <h5>{from} - {to}</h5>
                                    </div>
                                   
                                    
                                    <h5>{location}</h5>
                                    <p>
                                        

                                        {
                                        description.map(({item}, i) => (
                                            <p key={i}> {item} </p>
                                        )) 
                                        }
                               
                                    </p>
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className='text-center text-light'>Portfolio</h2>
                        </div>
                            
                            {
                                projects.map(({name,description,image}, i) =>(
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100 ">
                                        <div className="overflow">
                                            <img className='card-img-top' src={`/${image}`} alt=''/>
                                        </div>
        
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <a href=""> Know more</a>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>


    </Layout>
    )
export default Index