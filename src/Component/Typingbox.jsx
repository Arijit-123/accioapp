import React,{useRef,useEffect, createRef,useState, useMemo} from 'react'
import { useTestMode } from '../Context/Testmode';
import Uppermenu from './Uppermenu';
var randomwords= require('random-words');

function Typingbox() {
 
  
  const inputTextref=  useRef(null);
  console.log('referty',inputTextref)
  // const words=randomwords(100);
   const [currwordIndex,setCurrwordIndex]=  useState(0)
   const [currCharIndex, setCurrCharIndex] = useState(0)
   const [countDown, setCountDown] = useState(20);
   const [testStart,setTestStart]=useState(false);
   const [testOver,setTestOver]=useState(false);
   const [intervalId,setIntervalId]=useState(null);
   const [wordsArray,setWordsArray]=useState(()=>{
    return randomwords(100);
   });
   const words=useMemo(()=>{
    return wordsArray
   },[wordsArray]);

   const wordsspanref=useMemo(()=>{
    return  Array(words.length).fill(0).map(i=>createRef(null));
   },[words])


   const resetWordspanrefclassName=()=>{
    wordsspanref.map(i=>{
     Array.from(i.current.childNodes).map(j=>{
      j.className='char ';
      console.log('es');
     })
    });
    wordsspanref[0].current.childNodes[0].className='char nowinone';
   }
   const {testTime}=useTestMode();


   
   const startTimer=(e)=>{
   
   const intervalId=setInterval(timer,1000);
   setIntervalId(intervalId);
    function timer(){
      setCountDown((prevCountDown)=>{
        if(prevCountDown===1){
          clearInterval(intervalId);
          setCountDown(0);
          setTestOver(true);
        }
        else{
          return prevCountDown-1;
        }
       
      });
      

  }
}


  
  console.log('wordspan array',wordsspanref);
  console.log('array1234', Array[2])
  const handleKeydown=(e)=>{
    if(!testStart){
      startTimer();
     setTestStart(true);
    }
    // console.log('wording',wordsspanref[currwordIndex].current.childNodes);
    let allchildrendown=wordsspanref[currwordIndex].current.childNodes;
    console.log('typeof',allchildrendown)

    
    //logic for space
    if(e.keyCode===32)
    {
      //removing the cursor from the word     
      if(allchildrendown.length<=currCharIndex){
        allchildrendown[currCharIndex-1].classList.remove('left');
       
      }
      else{
        allchildrendown[currCharIndex].className=allchildrendown[currCharIndex].className.replace('nowinone','');
      }
    
    
     wordsspanref[currwordIndex+1].current.childNodes[0].className='char nowinone';
     
      setCurrwordIndex(currwordIndex+1);
      setCurrCharIndex(0);
      return; 
    }
    if(e.keyCode===8){
      if(currCharIndex!==0){  
        if(currCharIndex===allchildrendown.length){
          if(allchildrendown[currCharIndex-1].className.includes('extra')){
            allchildrendown[currCharIndex-1].remove();
            allchildrendown[currCharIndex-2].className+=' left';
          }
          else{
            allchildrendown[currCharIndex-1].className='char nowinone';
            setCurrCharIndex(currCharIndex-1);
            return;
          }
          allchildrendown[currCharIndex-1].className='char nowinone'
          setCurrCharIndex(currCharIndex-1);
          return;
        }
        allchildrendown[currCharIndex].className='char';
        allchildrendown[currCharIndex-1].className='char nowinone';
        setCurrCharIndex(currCharIndex-1);
        // {
        //   allchildrendown[currCharIndex].className='char nowinone';
        //   setCurrCharIndex(currCharIndex-1);
        //   return;
        // }
       

      }
      return;
     
    }
    if(currCharIndex===allchildrendown.length){
      let newSpan=document.createElement('span');
      newSpan.innerText=e.key;
      newSpan.className='char incorrect right extra';
    allchildrendown[currCharIndex-1].className=allchildrendown[currCharIndex-1].className.replace('left','');
      wordsspanref[currwordIndex].current.append(newSpan);
      setCurrwordIndex(currwordIndex+1);
      return;
    }
  
           if(e.key===allchildrendown[currCharIndex].innerText)
           {
                console.log('this is the correct key');
                allchildrendown[currCharIndex].className='char correct'
            }
             else{
                 console.log('wrong key pressed')
                 allchildrendown[currCharIndex].className='char incorrect'
                 }
                
             if(currCharIndex+1 === allchildrendown.length){
             allchildrendown[currCharIndex].className+=' left'
                 
                 }
                 else{
                  allchildrendown[currCharIndex+1].className='char nowinone';
                 }
                 setCurrCharIndex(currCharIndex+1);
                }

const resetTest=()=>{
  setCurrCharIndex(0);
  setCurrwordIndex(0);
  setTestStart(false);
  setTestOver(false);
  clearInterval(intervalId);
  setCountDown(testTime);
  let random=randomwords(100);
  setWordsArray(random);
  resetWordspanrefclassName();
}

  const focusInput=()=>{
    inputTextref.current.focus();
  }
 
  useEffect(()=>{
   resetTest()
  
  },[testTime])

  useEffect(() => {
  focusInput();
  wordsspanref[0].current.childNodes[0].className='char nowinone';
  }, [])
  return (
    <>
    <Uppermenu countDown={countDown}/>
    {testOver?(<h1>Test Over</h1>):(
    <div className='typewritter  container'>
    <div className='words card'>
     {words.map((item,index)=>(
      
      <span className='word' ref={wordsspanref[index]} key={index}>
      {item.split("").map((char, indx)=>(
      <span className='char '>{char}</span>
     ))}
      </span>
     ))
    } 
    </div>


    </div>)}
    <div className='gapping'>

    </div>
    <input type='text' className='hiddeninput' ref={inputTextref} onKeyDown={((e)=>handleKeydown(e))}></input>
    </>
  )
}



export default Typingbox
