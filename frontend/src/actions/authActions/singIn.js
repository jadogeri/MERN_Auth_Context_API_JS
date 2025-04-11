
export const signIn = (dispatch)=>{
    return (value)=>{
        try{
            console.log("calling signin in auth context")

            localStorage.setItem("AUTHKEY",value)
            dispatch({ type: 'SIGN_IN', payload: { token: value } });
            
        }catch(e){

        }
    }

}
