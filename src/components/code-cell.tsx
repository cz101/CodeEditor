import { useState} from "react";
import CodeEditor from '../components/code-editor'
import Preview from '../components/preview';
import bundle from '../bundle';

const CodeCell =()=>{


    const [input, setInput] = useState('')
    const [code ,setCode] =useState('')

    const onClick =async() =>{
        const output =  await bundle(input);
        setCode(output)     
    }

    return (
            <div>
                
                <CodeEditor pass={(value) => setInput(value)}/>
                
                    <textarea value={input} onChange={(e)=>{setInput(e.target.value )}}></textarea>
                <div>
                    <button onClick={onClick} >submit</button>
                </div>
                    <Preview code={code}/>
            </div>         
        )
         
}



export default CodeCell