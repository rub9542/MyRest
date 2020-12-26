export const fetchData = async () =>{
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users/3/todos");
        const data = await response.json();
        return data;
    }catch(e){
        console.log(e);
    }
}