import './code-editor.css'

import { useEffect, useState} from "react";
import CodeEditor from '../components/code-editor'
import Preview from '../components/preview';
import bundle from '../bundle';
import Resizeable from "./resizeable";

const CodeCell =()=>{


    const [input, setInput] = useState('')
    const [err, setErr] = useState('')
    const [code ,setCode] =useState('')
    /*auto compilie and output the results with timer setup */
    // useEffect(()=>{
    //     const timer= setTimeout(async ()=>{
    //                         const output =  await bundle(input);
    //                         setCode(output.code)   
    //                     },1500)
    //     return()=>{
    //             clearTimeout(timer)
    //             }                 
    //   },[input])

      const onClick =async() =>{
        const output =  await bundle(input);
        setCode(output.code)     
        setErr(output.err)
    }              
   

    return (
        <>
      
        <div>
                    <Resizeable direction="vertical">
                <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>    
                    <Resizeable direction="horizontal">
                        <CodeEditor pass={(value) => setInput(value)}/>
                        {/* <textarea value={input} onChange={(e)=>{setInput(e.target.value )}}></textarea> */}        
                        {/* <button onClick={onClick} >submit</button> */}
                    </Resizeable>    
                    <Preview code={code} bundleError={err}/> 
                </div>      
            </Resizeable>    
        </div>
        <div className='divstyle'>
        <button  onClick={onClick} >submit</button>
        </div>
                   
       </>
        )
         
}



export default CodeCell