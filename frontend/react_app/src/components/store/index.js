import { createStore } from "redux"

function loginReducer(state="login", action){
    switch(action.type){
        case "nologin":
            return "nologin"
        case "haslogin":
            return "haslogin"
        case "logout" :
            return "logout"
        default :
            return state
    }
}
const store = createStore(loginReducer)
export default store;