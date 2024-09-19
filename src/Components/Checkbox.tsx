import * as React from 'react';
import {list} from '../list.ts'
import Simpletext from './Simpletext.tsx';
import "./styleSimpleText.css"

export default function Checkbox() {
  const [checkAll , setCheckAll] = React.useState(false)
  const handleClick = ()=>{
    setCheckAll(!checkAll)

  }
  return <div className='all'>
    <div className='selectAll'>
    <input type='checkbox' readOnly checked={checkAll} onClick={handleClick}/>
    <p>Select all</p>
    </div>
      {list.map((item,index)=>{
      return <Simpletext key={index} name={item.name} checkAll={checkAll}/>
    })}
  </div>;
}
