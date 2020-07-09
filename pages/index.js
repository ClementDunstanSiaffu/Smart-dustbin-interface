import React,{useEffect,useState} from 'react';
import Head from 'next/head'
import {Row,Col} from 'reactstrap';
import DeleteIcon from '@material-ui/icons/Delete';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import fetch from 'isomorphic-unfetch';
 function Home({data}) {
   const [masaki,setMasaki] = useState(0)
   const [sinza,setSinza] = useState(0)
   const [mikocheni,setMikocheni] = useState(0)
   const [oysterbay,setOysterbay] = useState(0)

   useEffect(()=>{
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
   },[...data])
  return (
    <div className="container">
      <Head>
        <title>Smart dustbin</title>

      </Head>
      <div>
        <div className = "outer-container">
          <div  className = "inner-container">
         < Row style={{paddingLeft:97}} >
          
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
          
         </Row>
         </div>
         </div>
      </div>
      </div>
  )
 }

 Home.getInitialProps = async()=>{
   const response = await fetch('https://obscure-eyrie-17710.herokuapp.com/pata')
   const data = await response.json()
   return{data}
   console.log(data)
 }
      
 export default Home;