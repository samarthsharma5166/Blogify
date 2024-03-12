export const API_NOTIFICATION_MESSAGE = {
        loading:{
            title:'Loading...',
            message:'Data is being loaded, please wait'
        },
        success:{
            title:'success',
            message:'Data successfully loaded'
        },
        responseFailure:{
            title:'Error',
            message:'An error occured while fetching response from the server. please try again'
        },
        requestFailure:{
            title:'Error',
            message:'an error occured while requesting data'
        },
        networkError:{
            title:'Error',
            message:'unable to connect with server. please check your connection and try again later'
        }
} 

export const SERVICE_URLS = {
    userSignup : {url:'/signup',method:'post'},
    userLogin : {url:'/login',method:'post'}
}