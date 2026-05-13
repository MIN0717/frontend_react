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

const source = [0, 1, 2, 3]
tmp = []
for (let iitem of source){
  tmp.push(item*2)
}

source.map(item => (item*2))



function App() {

  return (
    <table>
      <tr>
        <th>이름</th>
        <th>국어</th>
        <th>수학</th>
        <th>영어</th>
        <th>과학</th>
      </tr>
      {[0,1,2,3].map(idx => 
       (
       <tr>
        <td>{score[idx].이름}</td>
        <td>{score[idx].국어}</td>
        <td>{score[idx].수학}</td>
        <td>{score[idx].영어}</td>
        <td>{score[idx].과학}</td>
      </tr>
      )
    )
  }
    </table>
  )
}

export default App
