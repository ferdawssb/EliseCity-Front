import axios  from 'axios';
import { accountService } from '@/_services'


const Axios = axios.create({
    baseURL: 'https://localhost:7217'

})

// Axios.interceptors.request.use(request => {
//     console.log(request)
//     let token = accountService.getToken()
//     if(token){
//         request.headers.Authorization = 'Bearer ' + token;

//     }
//     console.log(request)
//     return request
// })




export default Axios


