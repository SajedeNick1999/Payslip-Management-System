import React,{useState, useEffect} from 'react';
import { useNavigate, Redirect, useParams } from 'react-router-dom';
import {Button, Grid, Card, Typography, Divider, TextField} from '@material-ui/core';
import Drawer from './Drawer';
import {makeStyles} from '@material-ui/core/styles';
import Green from '@material-ui/core/colors/green';
import Background from './images/Login_Background.png';
import EditFieldimg from './images/EditFieldimg.png';
import MenuItem from '@material-ui/core/MenuItem';
import CurrentForm2 from './CurrentForm2';


const useStyles = makeStyles(theme=>({
    container:{
      width:'100%', 
      height: '100vh', 
      overflowX: 'hidden',
      backgroundImage: `url(${Background})`,
      backgroundPositionX: '70%',
      backgroundPositionY: '20%',

    },
    innerContainer:{
        width:'70%', 
        height: '80%', 
        overflowX: 'hidden',
        backgroundColor: theme.palette.common.white,
        boxShadow:theme.shadows[15],
      },

    FillContainer:{
        width: "25%",
        height: "70%",
        backgroundColor:"white",
        borderRadius: 20,
        

    },
    cardStyle: {
      [theme.breakpoints.down('sm')]: {
          width:200,
          height:400,
        },
        [theme.breakpoints.up('md')]: {
          width:250,
          height:500,
        },
        [theme.breakpoints.up('lg')]: {
          width:450,
          height:520,
        },
      backgroundColor: theme.palette.common.white,
      padding:20,
  },
    cardButtons:{
        [theme.breakpoints.down('sm')]: {
            width:150,
            height:200,
          },
          [theme.breakpoints.up('md')]: {
            width:150,
            height:200,
          },
          [theme.breakpoints.up('lg')]: {
            width:200,
            height:250,
          },
          backgroundColor: theme.palette.common.white,
          padding:20,
          borderRadius:20,
    },
    imageStyle: {
        width: 300,
        height: 400,
        marginBottom: 60,
    },
    imageCardButtons:{
        width: 100,
        height: 100,
        marginBottom: 60,
    },
    textFieldContainer:{
        width: '80%',
        height: '80%',
    },
    griditemTextField:{
        width:'50%',
        color:theme.palette.text.primary,
    },
    textField:{
        color: theme.palette.common.black,
    },
    addCard:{
        color: Green[500],
    },
    item:{
        width: "100%",
    },
}))

const EditField = () => {
    const props = useParams();
    const classes = useStyles();
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const [data, setData] = useState({});
    const [target,setTarget]=useState('');

    
  const onEditClick = () => {
      fetch(`http://127.0.0.1:8000/editfield/${target}/`)
      .then(response => {
        return response.json();
      }).then(response=>{
        if(response.status === 200){
          setData(response);
          localStorage.setItem("token",response.Token);
          localStorage.setItem("id",response.ID);
          navigate(`dashboard/form/edit`);
        }
        else{
          setError("something was wrong");
          navigate(`/`);
        }
        
      })
    }

    return (
        <>
            <Drawer />
            <Grid container alignItems="center" justify="center" className={classes.container}>
            <Grid item container spacing={5} alignItems="center" className={classes.innerContainer}>
                <Grid item>
                <img src={EditFieldimg} className={classes.imageStyle} />
                <Typography variant="h4" color="textPrimary" align="center">
                    Edit Field
                </Typography>
                </Grid>
            <Divider orientation="vertical" flexItem/>
            
            <Grid item>
            <CurrentForm2 />
            </Grid>


            <Grid item
            container       
            direction="column"
            className={classes.FillContainer}
            justify="center"
            spacing={3} 
            alignItems="center"
            >
                
            <Grid item>
                <Button 
                variant="contained"
                color="primary"
                onClick={onEditClick}
                size="large"
                >
                confirm
                </Button>
            </Grid>

            </Grid>

            

            </Grid>
            </Grid>

           
        </>
        
    )
};

export default EditField;
