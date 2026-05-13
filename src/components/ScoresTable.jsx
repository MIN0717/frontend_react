import React from 'react'

const score = [
  {이름:"plo",국어:90,수학:80,영어:90,과학:72},
  {이름:"plk",국어:90,수학:80,영어:90,과학:72},
  {이름:"plj",국어:90,수학:80,영어:90,과학:72},
  {이름:"pli",국어:90,수학:80,영어:90,과학:72}  
]

function ScoresTable() {
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

export default ScoresTable
