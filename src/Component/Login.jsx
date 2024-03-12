import {Box,TextField,Button,styled,Typography} from '@mui/material';
import { useState,useContext } from 'react';
import { API } from '../service/api';
import {DataContext} from '../context/DataProvider'
import { useNavigate } from 'react-router-dom';
import img from '../images/BLOGIFY.jpg'
const Component = styled(Box)`
    width:400px;
    margin:auto;
    box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
    margin-top:60px;
    background:#fff;
`;
const Image = styled('img')({
    width:150,
    padding:"50px 0 0",
    display:'flex',
    margin:'auto',
})
const Wrapper = styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div, & >Button,&>p{
        margin-top:20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform:none;
    background:#fb541b;
    color:#fff;
    height:48px;
    border-radius:2px;
`;
const SignupButton = styled(Button)`
    text-transform:none;
    background:#fff;
    color:#2874fe;
    height:48px;
    border-radius:2px;
    box-shadow:0 2px 4px 0 rgb(0 0 0/20%)
`;
const Error = styled(Typography)`
    font-size:10px;
    color:#ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`;
const Text = styled(Typography)`
    color:#878787;
    font-size:14px;
`;
const signupInitialValue = {
    name:'',
    username:'',
    password:''
}
const loginInitialValue = {
    username:'',
    password:''
}

const Login=({isUserAuthenticated})=>{
    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
    const[account,toggleaccount]=useState("Login");
    const [signup,setsignup] = useState(signupInitialValue);
    const [login,setLogin] = useState(loginInitialValue);
    const [error,setError] =useState("");
    const {setAccount} = useContext(DataContext);
    const navigate = useNavigate();
    const toggleSignup =()=>{
        account=== 'signup'?toggleaccount("Login"):toggleaccount("signup");
    }
    const onInputChange=(e)=>{
        setsignup({...signup,[e.target.name]: e.target.value})
    }
    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }
    const signupuser=async()=>{
        let response = await API.userSignup(signup)
        if(response.isSuccess){
            setError('')
            setsignup(signupInitialValue)
            toggleaccount('Login');
        }
        else{
            setError('something went wrong ! please try again')
        }
    }
    const loginuser=async()=>{
        let response = await API.userLogin(login)
        if(response.isSuccess){
            setError('')
            sessionStorage.setItem(`accessToken`,`Bearer${response.data.accessToken}`);
            sessionStorage.setItem(`refreshToken`,`Bearer${response.data.refreshToken}`);
            setAccount({username:response.data.username,name:response.data.name});
            isUserAuthenticated(true);
            navigate("/");
        }else{
            setError('something went wrong ! please try again')
        }
    }
    return(
        <Component>
            <Box>
                <Image src={img} alt="Blog logo" />
                {
                    account === "Login"?
                    <Wrapper>
                        <TextField  variant="standard"  onChange={(e)=>onValueChange(e)} name='username' label="Enter username"/>
                        <TextField  variant="standard"  onChange={(e)=>onValueChange(e)} name='password' label="Enter password"/>
                            {error && <Error>{error}</Error>}
                        <LoginButton variant='contained' onClick={()=>loginuser()}>Login</LoginButton>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <SignupButton onClick={toggleSignup}>create an account</SignupButton>
                    </Wrapper>:
                    <Wrapper>
                        <TextField  variant="standard" onChange={(e)=>onInputChange(e)} name='name' label="Enter Name"/>
                        <TextField  variant="standard" onChange={(e)=>onInputChange(e)} name='username' label="Enter Username"/>
                        <TextField  variant="standard" onChange={(e)=>onInputChange(e)} name='password' label="Enter Password"/>
                            {error && <Error>{error}</Error>}
                        <SignupButton onClick={()=>signupuser()}>Signup</SignupButton>
                        <Text style={{textAlign:'center'}}>OR</Text>
                        <LoginButton variant='contained' onClick={toggleSignup}>Already hava an account</LoginButton>
                    </Wrapper>
                }
            </Box>
        </Component>
    )
}

export default Login;