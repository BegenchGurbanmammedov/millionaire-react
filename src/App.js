import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css'
import {useState,useEffect,useMemo} from 'react';
import Trivia from './components/Trivia'
import Timer from './components/Timer'

function App() {
  const [questionNumber,setQuestionNumber]=useState(1)
  const [stop,setStop]=useState(false)
  const [earned,setEarned]=useState("$ 0")
  const data=[
    {
      id:1, 
      question:"Who is founder of facebook",
      answers:[
          {
            text:"Stive Jobs",
            correct:false
          },
          {
            text:"Jack Ma",
            correct:false
          },
          {
            text:"Elon Mask",
            correct:false
          },
          {
            text:"Mark Zukenberg",
            correct:true
          },
        ]
    },
        {
      id:2, 
      question:"where dp play Karim Benzema",
      answers:[
          {
            text:"Liverpool",
            correct:false
          },
          {
            text:"Real Madrid",
            correct:true
          },
          {
            text:"West Ham",
            correct:false
          },
          {
            text:"Lion",
            correct:false
          },
        ]
    },
    {
      id:3, 
      question:"Which footbal club champion in world cup 2018",
      answers:[
          {
            text:"England",
            correct:false
          },
          {
            text:"Argentina",
            correct:false
          },
          {
            text:"Brasil",
            correct:false
          },
          {
            text:"France",
            correct:true
          },
        ]
    },       {
      id:4, 
      question:"where dp play Karim Adeyami",
      answers:[
          {
            text:"Liverpool",
            correct:false
          },
          {
            text:"Bayern",
            correct:true
          },
          {
            text:"West Ham",
            correct:false
          },
          {
            text:"Lion",
            correct:false
          },
        ]
    },
    ]
    
  const moneyPyramid=useMemo(()=>

    [
      {id:1,amount:'$ 100'},
      {id:2,amount:'$ 200'},
      {id:3,amount:'$ 300'},
{id:4,amount:'$ 500'},
{id:5,amount:'$ 1000'},
{id:6,amount:'$ 2000'},
{id:7,amount:'$ 4000'},
{id:8,amount:'$ 8000'},
{id:9,amount:'$ 16000'},
{id:10,amount:'$ 32000'},
{id:11,amount:'$ 64000'},
{id:12,amount:'$ 125000'},
{id:13,amount:'$ 250000'},
{id:14,amount:'$ 500000'},
{id:15,amount:'$ 1000000'},
    ].reverse()
  ,[])
  useEffect(() => {
    questionNumber >1 && setEarned(moneyPyramid.find(m=>m.id===questionNumber-1).amount)
  }, [moneyPyramid, questionNumber])
  return (
    <div className="app">
        <div className='main'>
        {stop ? <h1 className="endText">You earned: {earned}</h1>:(
          <>
          <div className="top">
            <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
          </div>
          <div className="bottom">
           <Trivia data={data} 
           setStop={setStop} 
           setQuestionNumber={setQuestionNumber}
           questionNumber={questionNumber}/>
          </div>
      
        </>
          )}
        </div>
          
        <div className="pyramid">
        <ul className="moneyList">
        {moneyPyramid.map((m)=>
          <li className={m.id === questionNumber ? "moneyListItem active":"moneyListItem"} key={m.id}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>

          )}
          
          
        </ul>
      </div>
  
    </div>
  );
}

export default App;


//npm i use-sound
//13 minut  galanda