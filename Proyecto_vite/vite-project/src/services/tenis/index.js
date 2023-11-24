const URL = '';
const Get_tenis = async() =>{
    const request = await fetch(URL);
    const response = await request.json();
    console.log('response',response)
}

export {Get_tenis}