import React,{useRef,useEffect, createRef,useState} from 'react'

function Typingbox(props) {
  console.log('nimi',  props);
  const inputTextref=  useRef(null);
   const [currwordIndex,setcurrwordIndex]=  useState(0)
   const [currCharIndex, setCurrCharIndex] = useState(0)
  const wordsspanref= Array(props.words.length).fill(0).map(i=>createRef(null));
  console.log('wordspan array',wordsspanref);
  console.log('array1234', Array[2])
  const handleKeydown=(e)=>{
    console.log('keypressed',e.key);
  }
  const focusInput=()=>{
    inputTextref.current.focus();
  }
  useEffect(() => {
  focusInput();
  }, [])
  return (
    <>
    <div className='typewritter'>
    <div className='words'>
     {props.words.map((item,index)=>(
      
      <span className='word' ref={wordsspanref[index]}>
      {item.split("").map((char, indx)=>(
      <span>{char}</span>
     ))}
      </span>
     ))
    } 
    </div>


    </div>
    <div className='gapping'>

    </div>
    <input type='text' className='hiddeninput' ref={inputTextref} onKeyDown={((e)=>handleKeydown(e))}></input>
    </>
  )
}

export default Typingbox