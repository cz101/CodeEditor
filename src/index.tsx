// //import * as esbuild from '..public/';
// import 'bulmaswatch/superhero/bulmaswatch.min.css';
// import'./components/code-editor.css'
// import { createRoot } from 'react-dom/client';


// import ReactDOM from "react-dom";
// import CodeCell from './components/code-cell';

// const root = createRoot(document.getElementById('root')!)

// const App =()=>{

//     return (
//             <div>                
//                     <CodeCell/>             
//             </div>         
//         )
         
// }

// root.render(
//         <App />

// )
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import ReactDOM from 'react-dom';
//import CodeCell from './components/code-cell';
import TextEditor from'./components/text-editor'

const App = () => {
  return (
    <div>
      <TextEditor />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
