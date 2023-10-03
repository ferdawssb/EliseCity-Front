
//import des modules nécessaires 
import Axios from './caller.services'

let login =  (credentials) => {
  
     return  Axios.post('/api/Auth/login', credentials)
      
   
   }
  
    
      
   

let logout =() => {

    localStorage.removeItem('token')
}
let saveToken = (token)=> {
    localStorage.setItem('token', token)
}
let getToken =()=>{
  return localStorage.getItem('token')
}
let isLogged =()=>{
    let token = localStorage.getItem('token')
  return !!token
}

export const accountService = {
     login,
     logout, 
     saveToken,
     getToken,
     isLogged


}