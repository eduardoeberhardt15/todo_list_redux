export const loadState = () =>{
    
    try{
    const serialized = localStorage.getItem("reduxStore");
    if(serialized===null) return undefined;
        return JSON.parse(serialized);
    }
    catch(err){
        return undefined;
    }
}

export const saveState = (state:any) =>{
    
    try{
        const serialized = JSON.stringify(state);
        localStorage.setItem("reduxStore", serialized);
    }catch(err){

    }
}