import {useState,useEffect} from "react";
import axios from "axios";

function Countries(){

const [countries,setCountries]=useState([])
const [filter,setFilter]=useState("")

useEffect(()=>{

axios
.get("https://studies.cs.helsinki.fi/restcountries/api/all")
.then(response=>{
setCountries(response.data)
})

},[])

const filtered=countries.filter(c=>
c.name.common
.toLowerCase()
.includes(filter.toLowerCase())
)

return(

<div>

<h2>الدول</h2>

<input
value={filter}
onChange={(e)=>setFilter(e.target.value)}
placeholder="ابحث عن دولة"
/>

<ul>

{filtered.slice(0,10).map(c=>(

<li key={c.cca3}>
{c.name.common}
</li>

))}

</ul>

</div>

)

}

export default Countries;