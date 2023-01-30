import Layout from '../components/Layout'
import { experiences, skills, projects, messages } from '../profile'
import Link from "next/link";
import { useTheme } from 'next-themes'

// import React from 'react';
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";






import classNames from "classnames"


let countClick = 2


var skilsSize = "close"


const Index = (   ) => {
    const canvasEl = useRef(null);
    const colors = {
        purple: {
          default: "#1c2541b5",
          half: "#1c2541b5",
          quarter: "#1c2541b5",
          zero: "#1c2541c8"
        },
        indigo: {
          default: "#311b92",
          quarter: "#311b92"
        }
      };

      
      useEffect(() => {
        const ctx = canvasEl.current.getContext("2d");
        // const ctx = document.getElementById("myChart");
    
        const gradient = ctx.createLinearGradient(0, 16, 0, 600);
        gradient.addColorStop(0, colors.purple.half);
        gradient.addColorStop(0.65, colors.purple.quarter);
        gradient.addColorStop(1, colors.purple.zero);
    
        const weight = [];
        const labels = [];


        for (let i = 0; i < skills.length ; i ++){
      
            labels.push(skills[i].skill)
            weight.push(skills[i].percentage)

        }


        const data = {
          labels: labels,
          datasets: [
            {
              backgroundColor: gradient,
              label: "Percentaje",
              data: weight,
              fill: true,
              borderWidth: 1,
              borderColor: colors.indigo.default,
              lineTension: 0.2,
              pointBackgroundColor: colors.indigo.quarter,
              pointRadius: 3,
              
              
            }
          ],

          
          
        };
        const config = {
          type: "radar",
          data: data,
          options: {
            scales: {
                r: {
                    min: 0,
                    max: 100,
                    
                },
                
            },
        
    
        }
        
        };
        const myLineChart = new Chart(ctx, config);
    
        return function cleanup() {
          myLineChart.destroy();
        };
      });



    const { theme, setTheme } = useTheme()

    var M = []
    M.push(messages[0])
    var [Messages , setMessages] = React.useState(M);

    function handleClick() {

        if (countClick < messages.length){
            var M = []
            for (let i = 0 ; i < countClick ; i ++ ){
                M.push(messages[i])
            }
            Messages = M 
            setMessages(Messages)
            countClick ++ 
        }



    }
    


    const array = "close"
    var [skilsSize , setSkillsSize] = React.useState(array);


    const none = "none"
    var [favoriteFirst , setFavoriteFirst] = React.useState(none);

    
    function switchSkilsSizes(){
        if(skilsSize == "close"){
            setSkillsSize("open")
            console.log('shwitching open')
        }else if (skilsSize == "open"){
            setSkillsSize("close")
            console.log('shwitching close')
        }
        
   
    }


    function setFavoriteSkils(){
        setFavoriteFirst("skils")
    
        console.log('set favorite = > SKILS ')
        switchSkilsSizes()
    }

    function setFavoriteSk(){
        setFavoriteFirst("skils")
        console.log('set favorite = > SKILS ')
       
    }

    function setFavoritePort(){
        setFavoriteFirst("portfolio")
        console.log('set favorite = > portfolio ')
       
    }
    function setFavoritePortfolio(){
        setFavoriteFirst("portfolio")
        console.log('set favorite = > portfolio ')
        switchSkilsSizes()
    }


    function setFavoriteExperiences(){

        console.log('set favorite = > experiences ')
        setFavoriteFirst("experiences")
        switchSkilsSizes()
    }
    function setFavoriteExp(){
        console.log('set favorite = > experiences ')
        setFavoriteFirst("experiences")

    }



    return (
    <Layout > 




            {/* header card */}
            <header className="row">
                <div className='col-md-12'> 


                <div className={classNames(' card card-body  card-active-color animate__animated animate__fadeIn border-top-radius-0 border-bottom-radius-0', {'dark-card-active-color': theme == 'dark'})} >
                        
                        <div className='row'> 

                                {/* PICTURE  */}
                                <div className='col-md-4'> 
                                    <div className="col-md-12">
                                        <img src="img.png" alt="" className='img-fluid'/>
                                    </div>
                                    <div className="col-md-12 buttons-flex-center m-top-1">
                                
                                
                                            
                                        {/* linkedin  */}
                                        <Link target="_blank" href="https://www.linkedin.com/in/fernandopinango">
                                            <button    className={classNames('btn btn-rounded-big btn-active-top-card m1')} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                                    </svg>
                                            </button>
                                        </Link>

                                        {/* github */}
                                        <Link target="_blank" href="https://github.com/fernanj2323">
                                            <button  href="https://www.linkedin.com/in/fernandopinango" taget="_blank"  className={classNames('btn btn-rounded-big btn-active-top-card ')} >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                    </svg>   
                                            </button>
                                        </Link>


                        
                                    </div>
                                </div>

                            {/* MESSAGES BOX */}
                            <div className='col-md-8'>

                               
                                 <div className={classNames(' messages-box  messages-color', {'messages-dark-color': theme == 'dark'})} >

                                    {/* head */}
                                    <div  className={classNames('messages-header  messages-color', {'messages-dark-color': theme == 'dark'})} >

                                        <div className={classNames('head-name', {'dark-head-name': theme == 'dark'})} >
                                                     Fernando Piñango
                                             
                                        </div>
                                       

                                        <div  className={classNames('head-profile head-profile-color', {'head-profile-dark': theme == 'dark'})} >
                                                Fullstack Developer 
                                        </div>  


                                    </div>

                                    <div className={classNames('messages-content', {'dark-messages-content': theme == 'dark'})} >
                                       
                                        {   
                                            Messages.map(({ description, sended }, i )=> (
                                                <div key={i}>
                                                    {
                                                        sended ? (
                                                            <div className={classNames('message-send message-send-color', {'dark-message-send-color': theme == 'dark'})} >
                                                            <p className='typed'>
                                                                    {description}
                                                                </p>  
                                                            
                                                            </div>
                                                        ) : (
                                                            <div className={classNames('message-received message-received-color', {'dark-message-received-color': theme == 'dark'})}>
                                                                <p className='typed'>
                                                                    {description}
                                                                </p>  
                                                            </div>
                                                        )
                                                    }
                                                
            
                                                
                                                </div>
                                            ))
                                        }

                                        {
                                            countClick != messages.length ? ( 
                                                // load more 
                                                <div className="learn-box">


                                                    <button onClick={handleClick}  title='Load More.. ' className={classNames('btn btn-rounded btn-inactive')} >

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                                        </svg>
                                                    </button>
                                    

                                                </div>
                                            ):(

                                                <div> </div>
                                            )
                                        }
                                     
                                

                                    </div>


                                </div>


                            </div>
                        </div>

                        
                </div>
                    
                
                </div>
            </header>


            {/* second seccion */}
            <div className="row py-2">


            {/* navs tabs */}
            {skilsSize == "open" ? (

         
                // navegador night 
                
                    theme == "dark" ? ( 
                        // navegador dark 
                        <div className='display-flex'>   
                        <div onClick={setFavoriteSk} className={classNames('dark-nav-page firts-page '   , {'active-page dark-color-active': favoriteFirst == 'skils'}  ) } >Skills</div>
                        <div onClick={setFavoriteExp} className={classNames('dark-nav-page firts-page '   , {'w-text active-page dark-card-first-color ': favoriteFirst == 'experiences'}  ) }>Experience</div>
                        <div onClick={setFavoritePort} className={classNames('dark-nav-page firts-page '   , {'active-page dark-color-active': favoriteFirst == 'portfolio'}  ) } >Portfolio</div>
                    </div>  
                    ): (
                        // navegador light 
                         <div className='display-flex'>   
                        <div onClick={setFavoriteSk} className={classNames('nav-page firts-page '   , {'active-page color-active': favoriteFirst == 'skils'}  ) } >Skills</div>
                        <div onClick={setFavoriteExp} className={classNames('nav-page firts-page '   , {'active-page card-first-color dark-text': favoriteFirst == 'experiences'}  ) }>Experience</div>
                        <div onClick={setFavoritePort} className={classNames('nav-page firts-page '   , {'active-page color-active': favoriteFirst == 'portfolio'}  ) } >Portfolio</div>
                    </div>           
                    ) 



            ):(
                <div className='display-block'>
                </div>
            )                 
            }
                {/* SKILLS  closed */}
               {skilsSize == "close" ? (
                    <div  className='col-md-4 m-responsive' >    
                        
                           


                            <div  className={classNames('   card-second-color   card  card-body  animate__animated animate__fadeIn border-top-radius-1', {'dark-card-second-color': theme == 'dark'})} >

                                {/* header */}
                                <div className="row col-md-12 red" >
                                    <div className="col md-6">
                                        <h2>Skills</h2>
                                    </div>
                                    <div className="col-md-6 buttons-flex">
                                
                                    
                                                {/* arrow up  */}
                                            <button onClick={setFavoriteSkils}   className={classNames('btn btn-rounded  btn-active m1 ', {'btn-inactive': skilsSize == 'open'})} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                                                    </svg>
                                                
                                            </button>
                                    
                                        <div>
                                    
                                            {/* full width */}
                                            <button onClick={setFavoriteSkils}  className={classNames('btn btn-rounded blues ', {'btn-active': skilsSize == 'open'})}   >


                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                
                                

                                </div>



                                {/* chart  */}
                                <canvas id="myChart" ref={canvasEl} height="100" />
    
                            </div>    

                            <div  className={classNames('  card-active-color card card-body  animate__animated animate__fadeIn max-height-1 border-bottom-radius-1', {'dark-card-active-color': theme == 'dark'})} >

                                {
                                    skills.map(({skill, percentage}, i )=> (
                                        <div className="py-3" key={i}>
                                            <h5>{skill}</h5>
                                            <div className="progress">
                                                <div 
                                                className="progess-bar bar-color" 
                                                role="progressbar" 
                                                style={{width:`${percentage}%`}}
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
                ):( //is open 
                    favoriteFirst == "skils" ? (
                    <div  className='col-md-12' >    
                        <div  className={classNames(' responsive-border-open-card card-active-color card card-body  animate__animated animate__fadeIn border-top-radius-2 border-bottom-radius-0', {'dark-card-active-color': theme == 'dark'})} >
                            <div className="card-body">

                                {/* header */}
                                <div className="row col-md-12 red" >
                                    <div className="col md-6">
                                        <h2>Skills</h2>
                                    </div>
                                    <div className="col-md-6 buttons-flex">
                                
                                    
                                                {/* arrow up  */}
                                            <button onClick={setFavoriteSkils}   className={classNames('btn btn-rounded  btn-active m1 ', {'btn-inactive': skilsSize == 'open'})} >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                                                    </svg>
                                                
                                            </button>
                                    
                                        <div>
                                    
                                            {/* full width */}
                                            <button onClick={setFavoriteSkils}  className={classNames('btn btn-rounded blues ', {'btn-active': skilsSize == 'open'})}   >


                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                
                                

                                </div>



                                {/* chart  */}


                                <div  className={classNames(' card-first-color chart-box', {'dark-card-second-color': theme == 'dark'})} >
                                    <canvas className='chart-open' id="myChart" ref={canvasEl} />
                                </div>
                        

                                
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
                    ):(
                    <div  className='col-md-12 display-block ' >    
                       
                                {/* chart  */}
                                <canvas id="myChart" ref={canvasEl} height="100" />
                    </div>
                    )
                
                ) 
               }



            {/* experiences */}
            {skilsSize == "close"  ? (

                <>
                    <div className='col-md-8 m-responsive'>
                            {/* className="card bg-light" */}
                            <div  className={classNames(' card  card-body  animate__animated animate__fadeIn border-top-radius-2 border-bottom-radius-2', {'dark-card-second-color': theme == 'dark'})} >
                                <div className="card-body">
                    
                                {/* header */}
                                    <div className="row col-md-12 red" >
                                        <div className="col md-6">
                                            <h2>Experience</h2>
                                        </div>

                                    
                                        <div className="col-md-6 buttons-flex">
                                    
                                        
                                                    {/* arrow up  */}
                                                <button onClick={setFavoriteExperiences}   className={classNames('btn btn-rounded  btn-active m1 ', {'btn-inactive': skilsSize == 'open'})} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                                                        </svg>
                                                    
                                                </button>
                                        
                                            <div>
                                        
                                                {/* full width */}
                                                <button onClick={setFavoriteExperiences}  className={classNames('btn btn-rounded blues ', {'btn-active': skilsSize == 'open'})}   >


                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    
                                    

                                    </div>
                                    <ul>
                                        {
                                            experiences.map(({title, from, to, description, location}, index) => (
                                            <li key={index}>
                                                <div className='flex'> 
                                                    <div> 
                                                        <h4> {title} </h4>
                                                    </div>
                                                    <div className='push'> 
                                                        <h5>{from} - {to}</h5>  
                                                    </div>
                                                    
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

                </>

            ):(
                favoriteFirst == "experiences" ? (                    
                        <div className='col-md-12'>
                            <div  className={classNames('responsive-border-open-card card card-body   animate__animated animate__fadeIn  border-top-radius-2 border-bottom-radius-0', {'dark-card-second-color': theme == 'dark'})} >
                                <div className="card-body">
                    
                                {/* header */}
                                    <div className="row col-md-12 red" >
                                        <div className="col md-6">
                                            <h2>Experience</h2>
                                        </div>

                                    
                                        <div className="col-md-6 buttons-flex">
                                    
                                        
                                                    {/* arrow up  */}
                                                <button onClick={setFavoriteExperiences}   className={classNames('btn btn-rounded  btn-active m1 ', {'btn-inactive': skilsSize == 'open'})} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                                            <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                                                        </svg>
                                                    
                                                </button>
                                        
                                            <div>
                                        
                                                {/* full width */}
                                                <button onClick={setFavoriteExperiences}  className={classNames('btn btn-rounded  blues ', {'btn-active': skilsSize == 'open'})}   >


                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    
                                    

                                    </div>
                                    <ul>
                                        {
                                            experiences.map(({title, from, to, description, location}, index) => (
                                            <li key={index}>
                                                <div className='flex'> 
                                                    <div> 
                                                        <h4> {title} </h4>
                                                    </div>
                                                    <div className='push'> 
                                                        <h5>{from} - {to}</h5>  
                                                    </div>
                                                    
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
                   ):(
                    <div className="display_block"></div>
                        )

            )
            }

            </div>

            {/* portfolio */}
            {skilsSize == "close"  ? (
                       <div className="row">
                       <div className="col-md-12  m-responsive">
                           {/* className="card card-body "   */}
                           <div  className={classNames('card-active-color card card-body  animate__animated animate__fadeIn border-top-radius-0 border-bottom-radius-0' , {'dark-card-active-color': theme == 'dark'})} >
                               <div className="row">
                                    {/* header */}
                                    <div className="row col-md-12 red" >
                                                   <div className="col md-6  pding-1">
                                                       <h2>Portfolio</h2>
                                                   </div>
           
                                               
                                                   <div className="col-md-6 buttons-flex">
                                               
                                                   
                                                               {/* arrow up  */}
                                                           <button onClick={setFavoritePortfolio}   className={classNames('btn btn-rounded  btn-active m1 ', {'btn-inactive': skilsSize == 'open'})} >
                                                                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                                                       <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                                                                   </svg>
                                                               
                                                           </button>
                                                   
                                                       <div>
                                                   
                                                           {/* full width */}
                                                           <button onClick={setFavoritePortfolio}  className={classNames('btn btn-rounded blues ', {'btn-active': skilsSize == 'open'})}   >
           
           
                                                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                                                   <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                                               </svg>
                                                           </button>
                                                       </div>
                                                   </div>
                                               
                                               
           
                                               </div>
                                       
                                       {
                                           projects.map(({name,description,image, linkExist, link}, i) =>(
                                           <div className="col-md-4 p-2" key={i}>
                                               {/* className="card h-100 " */}
                                               <div   className={classNames('  card-second-color  card card-body  animate__animated animate__fadeIn border-top-radius-0 border-bottom-radius-0', {'dark-card-second-color': theme == 'dark'})}>
                                                   <div className="overflow">
                                                       <img className='card-img-top' src={`/${image}`} alt=''/>
                                                   </div>
                   
                                                   <div className="card-body card-1-max-size ">
                                                       <h3>{name}</h3>
                                                       <p>{description}</p>
                                                       {
                                                        linkExist ? (
                                                            <a  className={classNames(' linked-text-color', {'dark-linked-text-color': theme == 'dark'})}   target="_blank"  href={link}> Know more</a>
                                                        )
                                                        :(
                                                            <b  className={classNames(' linked-text-color', {'dark-linked-text-color': theme == 'dark'})} >Comming soon</b>
                                                        )
                                                       }
                                                       
                                                   </div>
                                               </div>
                                           </div>
                                           ))
                                       }
                               </div>
                           </div>
                       </div>
                       </div>

            ):( 
                favoriteFirst == "portfolio" ? (
                  
                    <div className="col-md-12 ">
                                  

                        <div  className={classNames(' responsive-border-open-card card-active-color card card-body   col-md-12  padding-top0  animate__animated animate__fadeIn border-top-radius-2 border-bottom-radius-0' , {'dark-card-active-color': theme == 'dark'})} >

                            <div className="row card-body">
                             {/* header */}
                            <div className=" row col-md-12 red " >

                                                            <div className="col md-6">
                                                                    <h2>Portfolio</h2>
                                                            </div>

                    
                                                        
                                                            <div className="col-md-6 buttons-flex">
                                                        
                                                            
                                                                        {/* arrow up  */}
                                                                    <button onClick={setFavoritePortfolio}   className={classNames('btn btn-rounded  btn-active m1 ', {'btn-inactive': skilsSize == 'open'})} >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-short" viewBox="0 0 16 16">
                                                                                <path fill-rule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
                                                                            </svg>
                                                                        
                                                                    </button>
                                                            
                                                                <div>
                                                            
                                                                    {/* full width */}
                                                                    <button onClick={setFavoritePortfolio}  className={classNames('btn btn-rounded blues ', {'btn-active': skilsSize == 'open'})}   >
                    
                    
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
                                                                            <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        
                                                        
                    
                            </div>
                                        
                                    {
                                    projects.map(({name,description,image, linkExist, link}, i) =>(
                                                <div className="col-md-4 p-2" key={i}>
                                             
                                                    <div   className={classNames('card-second-color border-top-radius-0 border-bottom-radius-0  card card-body  animate__animated animate__fadeIn', {'dark-card-second-color': theme == 'dark'})}>
                                                        <div className="overflow">
                                                            <img className='card-img-top' src={`/${image}`} alt=''/>
                                                        </div>
                        
                                                        <div className="card-body card-1-max-size ">
                                                       <h3>{name}</h3>
                                                       <p>{description}</p>
                                                       {
                                                        linkExist ? (
                                                            <a  className={classNames(' linked-text-color', {'dark-linked-text-color': theme == 'dark'})} target="_blank"  href={link}> Know more</a>
                                                        )
                                                        :(
                                                            <b  className={classNames(' linked-text-color', {'dark-linked-text-color': theme == 'dark'})} >Comming soon</b>
                                                        )
                                                       }
                                                       
                                                   </div>
                                                    </div>
                                                </div>
                                    ))
                                 }
                            </div>
                        </div>



                              
                             
                    </div>
                       
                   
                ): ( <div className='display-bloc'> </div>)
            )
            }

     

        {/* </div> */}
    </Layout>
)
}   




 

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default Index