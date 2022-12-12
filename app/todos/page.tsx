type todo={
  name:string;
}
const getData=async()=>{
  const res=await fetch('http://localhost:3000/api/todos',
    {
      cache:"no-store"
    }
  );
  return res.json()
}


export default async function Page() {
  const data:todo[]=await getData();
  return (
  <>
    <h1>Todos!!!</h1>
    <ul>
      {data.map((item:todo,index:number)=>(
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  </>
   
  );
}
