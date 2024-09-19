import * as React from 'react';
import "./styleSimpleText.css"
export default function simpletext({name,checkAll}){
    const [checked , setCheck] = React.useState(false)
    React.useEffect(()=>{
        setCheck(checkAll)

    },[checkAll])  
    const handleClick = ()=>{
        setCheck(!checked)
    }
    return(
        <div className='box'>
            <input type='checkbox' checked={checked} onClick={handleClick} readOnly/>
            <p>{name}</p>
        </div>
    )

}
