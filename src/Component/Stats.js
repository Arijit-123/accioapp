import React from 'react'
import Graph from './Graph'

const Stats = ({wpm,accuracy,graphdata,correctChar, incorrectChar,extrachar}) => {



  var timeset=new Set();
  const newGraph = graphdata.filter((i)=>{
    if(!timeset.has(i[0])){
     timeset.add(i[0]);
     return i;
    }
  })
  return (
    <div className='statbox'>
    <div className='left-stats'>
     <div className='title'>WPM</div>
     <div className='subtitle'>{wpm}%</div>
     <div className='title'>Accuracy</div>
     <div className='subtitle'>{accuracy}%</div>
     <div className='title'>Character</div>
     <div className='subtitle'>{correctChar}/{incorrectChar}/{extrachar}</div>
     {/* correctChar={correctChar} incorrectchar={incorrectchar} */}
    </div>
      <div className='right-stats'>
    <Graph color={accuracy>50?'gold':'red'} graphdata={newGraph} />
      </div>
    </div>
  )
}

export default Stats
