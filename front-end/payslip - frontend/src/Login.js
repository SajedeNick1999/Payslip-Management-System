import React,{useState, useEffect} from 'react';
import {Grid,Button,TextField, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import { useNavigate, Redirect } from 'react-router-dom';
import Background from './images/Login_Background.png';

const useStyles = makeStyles(()=>({
    backgroundStyle:{
        width:'100%', 
        height: '100vh', 
        overflowX: 'hidden',
        backgroundImage: `url(${Background})`,
        backgroundPositionX: '70%',
        backgroundPositionY: '20%',
    },
    container:{
      width: "33%",
      height: "50%",
      backgroundColor:"white",
      borderRadius: 20,
    },
    item:{
      width: "70%",
    },
    
  }));

const Login = () => {
    const classes = useStyles();

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [company, setCompany] = useState('');

    const [data, setData] = useState({});
    const [error,setError] = useState("");

    var options = {
      method: 'get',
      headers: {
          "Access-Control-Request-Headers": "*",
          "Access-Control-Request-Method": "*",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',

      },
      // mode: 'no-cors'
    }

    const onLoginClick = () => {
      fetch(`http://127.0.0.1:8000/login/${userName}/${password}/`)
      .then(response => {
        return response.json();
      }).then(response=>{
        if(response.status === 200 && response.isManager === 1){
          setData(response);
          localStorage.setItem("token",response.Token);
          localStorage.setItem("id",response.ID);
          navigate(`dashboard/`);
        }
        else if(response.status === 200 && response.isManager === 0){
          setData(response);
          localStorage.setItem("token",response.Token);
          localStorage.setItem("id",response.ID);
          navigate(`employee/`);
        }
        else{
          setError("Username or Password is wrong");
          navigate(`/`);
        }
        
      })
    }


  return (
   <Grid 
      className={classes.backgroundStyle}
      container 
      justify="center" 
      alignItems="center"
   >
     <Grid 
     container       
     direction="column" 
     className={classes.container}
     justify="center"
     spacing={3} 
     alignItems="center"
     >
       <Grid item>
         <Typography>
           Payslip management system
         </Typography>
       </Grid>
     <Grid item className={classes.item}>
      <TextField
        variant="outlined"
        label="User Name"
        autoFocus
        fullWidth
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
     </Grid>
     <Grid item className={classes.item}>
      <TextField
        variant="outlined"
        label="Password"
        fullWidth
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
     </Grid>
     <Grid item>
       <Typography color="error">
         {error}
       </Typography>
     </Grid>
     <Grid item>
     <Button 
      variant="contained"
      color="primary"
      onClick={onLoginClick}
      size="large"
     >
       Login
     </Button>
     </Grid>
     </Grid>
   </Grid>
  );
}

export default Login;