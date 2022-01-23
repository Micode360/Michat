import axios from "axios"
import { SIGNUP_SUCCESS } from '../types'
import { SIGNUP_FAIL } from '../types'
import { SIGNIN_SUCCESS } from '../types'



   export const signUpAction = (state, dispatch) => {
      console.log(state, "in progress")
         axios.post('http://localhost:8000/auth/signUp', state)
         .then((data) => {
            console.log(data, 'data')
            return dispatch({type: SIGNUP_SUCCESS, payload: { type:SIGNUP_SUCCESS, state:data.data.message }})
         }).catch((err) => {      
            console.log(err.response, 'error')           
                           if (err) {
                           return{ type:SIGNUP_FAIL, payload:'error'}
                  }
         })

   }



      export const signInAction = (state) => {
      console.log(state)
         // axios.post('http://localhost:5000/auth/signin', state)
         // .then((data) => {
         //    console.log(data, 'data');
         //     return { type:SIGNIN_SUCCESS, state: data }
         // }).catch((err) => {                 
         //                   if (err) {
         //                   return{ type:SIGNUP_FAIL, payload:'error'}
         //          }
         // })
         return;
   }


