import { useState} from "react";
import CodeEditor from '../components/code-editor'
import Preview from '../components/preview';
import bundle from '../bundle';
import Resizeable from "./resizeable";

const CodeCell =()=>{


    const [input, setInput] = useState('')
    const [code ,setCode] =useState('')

    const onClick =async() =>{
        const output =  await bundle(input);
        setCode(output)     
    }

    return (
        <Resizeable direction="vertical">
            <div style={{height: '100%', display: 'flex', flexDirection: 'row'}}>    
                <Resizeable direction="horizontal">
                    <CodeEditor pass={(value) => setInput(value)}/>
                    {/* <textarea value={input} onChange={(e)=>{setInput(e.target.value )}}></textarea> */}        
                    {/* <button onClick={onClick} >submit</button> */}
                </Resizeable>    
                 <Preview code={code}/> 

            </div>      
        </Resizeable>      
        )
         
}



export default CodeCell