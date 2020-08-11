import React, {useState,useEffect} from 'react';
import { useNavigate, Redirect, useParams } from 'react-router-dom';
import {Button, Grid, Card, Typography, Divider, TextField} from '@material-ui/core';
import Drawer from './Drawer';
import {makeStyles} from '@material-ui/core/styles';
import PayIcon from './images/PayslipManagement1.png';
import AddManual from './images/manual.png';
import AddByFile from './images/Excel.png';
import Delete from 'mdi-material-ui/TrashCan';
import Green from '@material-ui/core/colors/green';
import Background from './images/Login_Background.png';
import EmployeeList from './EmployeeList';

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
            width:380,
            height:600,
          },
        backgroundColor: theme.palette.common.white,
        padding:20,
    },
    cardButtons:{
        [theme.breakpoints.down('sm')]: {
            width:200,
            height:250,
          },
          [theme.breakpoints.up('md')]: {
            width:200,
            height:250,
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
        width: 150,
        height: 150,
        marginBottom: 60,
    },
    textFieldContainer:{
        width: '70%',
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
    }
}))

const AddPayslipManual = () => {
    const props = useParams();
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <>
        <Drawer />
        <EmployeeList />

        </>
    )
};

export default AddPayslipManual;