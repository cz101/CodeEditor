import './text-editor.css'
import React,{useState,useEffect,useRef} from "react";

import MDEditor from '@uiw/react-md-editor'

// interface TextEditorpPros{

// }



const TextEditor : React.FC =()=>{

    const [value, setValue] = useState("Enter the Context")
    const [editing, setEditing] =useState(false)
    const ref = useRef<HTMLDivElement |null>(null)

    useEffect(()=>{
        const listener =(event :MouseEvent)=>{

            if(ref.current && event.target && ref.current.contains(event.target as Node) )
                { 
                    //setEditing(true)
                    return
                
                }
            setEditing(false)
        }
        document.addEventListener('click',listener,{capture :true})

        return () =>{

            document.removeEventListener('click',listener,{capture : true})
        }
    },[])
    const onChange =(value = "")=>{ setValue(value)}

    if(editing)
    {
        return (     
        <div className='text-editor' ref={ref}>
              <MDEditor 
                value={value}
                // onChange={(value = "") => {
                //     setValue(value);
                //   }}
                onChange={onChange}/>

        </div>)
    }

    return(
        <div  className='text-editor card' onClick={()=>{setEditing(true)}}>
            <div className='card-content'>
                 <MDEditor.Markdown source={value}/>
            </div>   
         
        </div>
        )
   
}

export default TextEditor;