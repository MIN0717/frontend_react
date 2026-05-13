import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

const score = [
  {이름:"plo",국어:90,수학:80,영어:90,과학:72},
  {이름:"plk",국어:90,수학:80,영어:90,과학:72},
  {이름:"plj",국어:90,수학:80,영어:90,과학:72},
  {이름:"pli",국어:90,수학:80,영어:90,과학:72}  
]
/*
const source = [0, 1, 2, 3]
tmp = []
for (let iitem of source){
  tmp.push(item*2)
}

source.map(item => (item*2))
*/
function App() {

  return (
    <table>
            <tr>
        {
          Object.keys(score[0]).map(key=>(
          <th>{key}</th>
        ))
        }
        
      </tr>

      {score.map(item => 
       (
       <tr>
        {
          Object.values(item).map(
            value => (<td>{value}</td>)
          )
        }
      </tr>
      )
    )
  }
    </table>
  )
}

export default App
