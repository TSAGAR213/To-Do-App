import { useState } from "react";
import React from "react";
import "../styles/App.css"

let main={textAlign:"center",marginBottom:"0px"};
let ip1={color:"#db279f",width:'450px',height:"30px",marginTop:"0px",fontSize:"30px",
backgroundColor:"black",border:"2px solid #db279f",textAlign:"center"};

let b1={width:"80px",padding:'10px',marginTop:"10px",backgroundColor:"#db279f",color:"white",borderRadius:"5px",border:"2px solid #db279f"};
let edbtn={width:"80px",marginLeft:"20px",padding:'10px',marginTop:"10px",backgroundColor:"#db279f",color:"white",borderRadius:"5px",border:"2px solid #db279f"};
let delbtn={width:"80px",marginLeft:"10px",padding:'10px',marginTop:"10px",backgroundColor:"#db279f",color:"white",borderRadius:"5px",border:"2px solid #db279f"};
let inptxt={color:"#db279f",width:'450px',height:"30px",marginTop:"20px",fontSize:"30px",backgroundColor:"black",border:"2px solid #db279f",textAlign:"center"};
let savebtn={width:"80px",marginLeft:"10px",padding:'10px',paddingTop:"10px",backgroundColor:"#db279f",color:"white",borderRadius:"5px",border:"2px solid #db279f"};
function List()
{     
    const [list,setList]=useState([]);
    const[item,setItem]=useState('');
    const [editItem,setEditItem]=useState('');
    const[edit,setEdit]=useState('')
return <div style={main}>
<h1><label htmlFor="item">Add To-Do</label></h1>
<br/>
<input style={ip1}
data-testid={"task"}
type="text"
id="item"
value={item}
onChange={(e)=>{
    let val=e.target.value
    setItem(val)
}}
/>
<br/>
<button style={b1}
data-testid={"btn"} onClick={()=>{
    if(item)
    {
        setList((old)=>{
            let x=item;
            setItem('')
        return [...old,x]
        })
    }
}}>Add Item</button>
<ul >
    <h1 style={{marginTop:"60px"}}>List Of Items</h1>
{
    list.map((data,i)=>{
return <li 
className={"list"} key={data}>{i+1}{')'}{data}

<button 
style={edbtn}
className={"edit"} onClick={()=>{
    setEdit(data);
    setEditItem(data)
}}>Edit</button>
<button
style={delbtn}

className={"delete"} onClick={()=>{
    setList((old)=>{
        return old.filter(val=>val!==data)
    })
}}>Delete</button>





{edit===data && <div>
<input 
style={inptxt}
className={"editTask"} type="text" value={editItem}
onChange={(e)=>{
    
    let val=e.target.value
    setEditItem(val)
}}
/>
<span>
<button 
style={savebtn}
className={"saveTask"} onClick={()=>{
    setList((old)=>{
        if(editItem)
        {
            let z=editItem
            setEditItem('')
            setEdit('')
        return old.map((val)=>val==data?z:val)
        }
        else
        {
            setEditItem('')
            setEdit(false)  
            return old
        }
    })
}}>Save</button>
</span>
</div>}

</li>
    })
}
</ul>

    </div>
}

export default List;