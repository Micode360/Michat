import axios from "axios"
import { SIGNUP_SUCCESS } from '../types'
import { SIGNUP_FAIL } from '../types'



   export const signInAction = (state) => {
         axios.post('http://localhost:5000/auth/signUp', state.state)
         .then((data) => {
            console.log(data, 'data')
            return { type:SIGNUP_SUCCESS, state:data.data.message }
         }).catch((err) => {                 
                           if (err) {
                           return{ type:SIGNUP_FAIL, payload:'error'}
                  }
         })
         // return{ type:SIGNUP_SUCCESS, state: state}
   }

//  export const registerationAction = (state) => {
//    return (dispatch, getState) => {
//             axios.post('http://localhost:5000/auth/signUp', state)
//               .then(() => {
//                 dispatch({ type:REGISTER_SUCCESS, payload:'Registeration success' })
//               }).catch((err) => {                 
//                if (err.response) {
//                dispatch({ type:REGISTER_FAIL, payload: err.response.data })
//            }
//               })
//    }
// }