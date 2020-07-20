import React,{useEffect,useState} from 'react';
import Head from 'next/head'
import {Row,Col} from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import fetch from 'isomorphic-unfetch';
import Modal from 'react-bootstrap/Modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
 function Home({data,data1}) {
  /* const [masaki,setMasaki] = useState(0)
   const [sinza,setSinza] = useState(0)
   const [mikocheni,setMikocheni] = useState(0)
   const [oysterbay,setOysterbay] = useState(0)*/
   const [adShow,setAdShow] = useState(false);
   const [reShow,setReShow] = useState(false);
   const [value,setValue]  = useState(0)
   const takeChange = (event,newValue)=>{
     setValue(newValue)
   }

   const handleClose = (event)=>{
    event.preventDefault();
    setAdShow(false)
  }
  const handleChange = (event)=>{
    event.preventDefault();
    setReShow(false)
  }

  const takeValue = (take)=>{
    console.log(take)
    const takeIt = data.filter((oneData)=>oneData.location === take)
    const okay =  takeIt.map((every)=>{return every.volume})
    const volume = okay[0]
    if(volume){
      return volume
    }else{
      return 0
    }
    
    console.log(okay[0])
  }


  /* useEffect(()=>{
     data.map((item)=>{
       if(item.location === 'masaki'){
         setMasaki(item.volume)
       }else if(item.location === "sinza" ){
         setSinza(item.volume)
       }else if(item.location === "mikocheni" ){
        setMikocheni(item.volume)
      }else if(item.location === "oysterbay" ){
        setOysterbay(item.volume)
      }else{
         null
      }
     })
   },[...data]) */

  return (
    <div className="container">
      <Head>
        <title>Smart dustbin</title>

      </Head>
      <div>

        <div className = "button-container">
        <button className = "butt" onClick={()=>setAdShow(true)}>Add location</button>
        <button className= "butt" onClick = {()=>setReShow(true)}>Remove location</button>
        </div>
        
        <Modal
         size = "md"
         centered
         show = {adShow}
         onHide = {()=>setAdShow(false)}>
           <Modal.Header closeButton>
             <Modal.Title>Add location</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <form action = 'http://localhost:8080/pokea' method = 'POST' >
               <input type = "text" placeholder = "add location" className = "add-input"
               maxlength="50" name = "location" autoComplete = "off" />

                <button className = "add-location-butt" onClick = {()=>{setAdShow(false)}}>
                 Add location
                 </button>
                 
                 </form>
             
             <button className="close-butt" onClick = {handleClose}>
                 Close
            </button>
            
           </Modal.Body>
          
        </Modal>  
         
        <Modal
         size = "md"
         centered
         show = {reShow}
         onHide = {()=>setReShow(false)}>
           <Modal.Header closeButton>
             <Modal.Title>Remove location</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <form  action = "http://localhost:8080/ondoa" method = "POST">
               <input type = "text" placeholder = "remove location" className = "add-input"
               maxlength="50" name = "location" autoComplete = "off" />

                 <button className = "add-location-butt" onClick = {()=>setReShow(false)}>
                 Remove location
                 </button>

                 </form>
             
             <button className="close-butt" onClick = {handleChange}>
                 Close
            </button>
            
           </Modal.Body>
          
        </Modal>  

        <div className = "outer-container">
        <div  className = "inner-container">
         {/*< Row style={{paddingLeft:97}} >
          
           <Col xs = "auto" style={{marginBottom:80}}>
          <div >
          <DeleteIcon style={{width:150,height:150,marginTop:80}}/>
          <span className="location">Location:Masaki</span><br />
          <span><p className = "text-dust">
            Volume:<CircularProgressbar value = {masaki}
            maxValue={240} text={`${masaki}L`} styles={buildStyles({
            rotation: 1,
            strokeLinecap: 'butt',
            textSize: '30px',
            
            pathTransitionDuration: 0.5,
            
            textColor: 'blue',
            trailColor: '#d6d6d6',
            pathColor:`rgba(62,152,199,${240/240})`,
            width:50,
            height:50
          })} className="progress-circle" />
          </p>
          </span>
          </div>
          </Col>
          
          <Col xs = "auto" style={{marginBottom:80}}>
          <div >
          <DeleteIcon style={{width:150,height:150,marginTop:80}}/>
          <span className="location">Location:Sinza</span><br />
          <span><p className = "text-dust">
            Volume:<CircularProgressbar value = {sinza}
            maxValue={240} text={`${sinza}L`} styles={buildStyles({
            rotation: 1,
            strokeLinecap: 'butt',
            textSize: '30px',
            
            pathTransitionDuration: 0.5,
            
            textColor: 'blue',
            trailColor: '#d6d6d6',
            pathColor:`rgba(62,152,199,${240/240})`,
            width:50,
            height:50
          })} className="progress-circle" />
          </p>
          </span>
          </div>
          </Col>
          
          <Col xs = "auto" style={{marginBottom:80}}>
          <div >
          <DeleteIcon style={{width:150,height:150,marginTop:80}}/>
          <span className="location">Location:Mikocheni</span><br />
          <span><p className = "text-dust">
            Volume:<CircularProgressbar value = {mikocheni}
            maxValue={240} text={`${mikocheni}L`} styles={buildStyles({
            rotation: 1,
            strokeLinecap: 'butt',
            textSize: '30px',
            
            pathTransitionDuration: 0.5,
            
            textColor: 'blue',
            trailColor: '#d6d6d6',
            pathColor:`rgba(62,152,199,${240/240})`,
            width:50,
            height:50
          })} className="progress-circle" />
          </p>
          </span>
          </div>
          </Col>
          

          <Col xs = "auto" style={{marginBottom:80}}>
          <div >
          <DeleteIcon style={{width:150,height:150,marginTop:80}}/>
          <span className="location">Location:Oysterbay</span><br />
          <span><p className = "text-dust">
            Volume:<CircularProgressbar value = {oysterbay}
            maxValue={240} text={`${oysterbay}L`} styles={buildStyles({
            rotation: 1,
            strokeLinecap: 'butt',
            textSize: '30px',
            
            pathTransitionDuration: 0.5,
            
            textColor: 'blue',
            trailColor: '#d6d6d6',
            pathColor:`rgba(62,152,199,${240/240})`,
            width:50,
            height:50
          })} className="progress-circle" />
          </p>
          </span>
          </div>
          </Col>
          
        </Row>*/}
          < Row style={{paddingLeft:97}} >
          {data1.map((one)=>(
             <Col xs = "auto" style={{marginBottom:80}}>
             <div >
             <DeleteIcon style={{width:150,height:150,marginTop:80}}/>
             <span className="location">Location:{one.name}</span><br />
             <span><p className = "text-dust">
               Volume:<CircularProgressbar value = {takeValue(one.name)}
               maxValue={240} text= {`${takeValue(one.name)}L`} styles={buildStyles({
               rotation: 1,
               strokeLinecap: 'butt',
               textSize: '30px',
               
               pathTransitionDuration: 0.5,
               
               textColor: 'blue',
               trailColor: '#d6d6d6',
               pathColor:`rgba(62,152,199,${240/240})`,
               width:50,
               height:50
             })} className="progress-circle" />
             </p>
             </span>
             </div>
             </Col>
          )
          )}
       </Row>
         </div>
         </div>
      </div>
      </div>
  )
 }

 Home.getInitialProps = async()=>{
   const response = await fetch('https://obscure-eyrie-17710.herokuapp.com/pata')
   const response1 = await fetch('https://obscure-eyrie-17710.herokuapp.com/obtain')
   const data = await response.json()
   const data1 = await response1.json()
   return{data,data1}
   console.log(data)
 }
      
 export default Home;