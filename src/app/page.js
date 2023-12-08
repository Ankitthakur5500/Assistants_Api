"use client"
import { useState } from 'react'
import {GetAssistant,GetThread,CreateMessage,Run,RunStatus,Response} from '../url/url.js'


export default function Home() {
  const [data,setData] = useState("");
  const [dataArray,setDataArray] = useState([]);

  async function handleClick(){
    const assistantId = await GetAssistant();
    console.log("hello",assistantId);

    const threadId = await GetThread();
    console.log("hello",threadId);

    const message = await CreateMessage(threadId,data);
    // console.log("MessageId-->",message);
    console.log("MessageId-->",message.id);

    const run = await Run(assistantId,threadId);
    console.log("page-->",run);
    const runID = run.id;
    
    let runstatus = await RunStatus(threadId,runID);
    console.log("page2-->",runstatus.status);
    let response = {name:"ankit"};


    const regularUpdate = setInterval(
      async ()=>{ 
       let status = await RunStatus(threadId,run.id);
       if(status.status=="completed"){
           response = await Response(threadId);
           console.log("-page->",response);

          setDataArray(response);
           clearInterval(regularUpdate);
          response.map((item)=>{
            const content = item.content[0].text.value; 
               console.log( `${content}`);
               });
            
       }
     },2000);

  }

  return (
  <div className='container'>
    <div className='sidebar'>
      <div className='assistants'>Assistant</div>
      <div className='assistants2'>Assistant 1</div>
      <div className='assistants2'>Assistant 2</div>
      <div className='assistants2'>Assistant 3</div>
    </div>
    <div className='messagebody'>
      <div className='user'>{dataArray.map((items,id)=>(<div key={id}>{items.content[0].text.value}</div>))}</div>
      {/* <div className='user'>Hello,How are you?</div>
      <div className='bot'>I am fine</div> */}
      <input className='input' style={{fontSize:"15px"}} type="text" onChange={(event)=>setData(event.target.value)}></input>
      <button className='btn' onClick={handleClick}>Search</button>
    </div>
    <div className='rightbar'></div>
  </div>
  )
}
