import React, { useEffect, useState } from 'react';
import { useNavigate, Redirect, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from 'mdi-material-ui/Menu';
import ChevronLeftIcon from 'mdi-material-ui/ChevronLeft';
import ChevronRightIcon from 'mdi-material-ui/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from 'mdi-material-ui/AccountCircle';
import AccountMultiple from 'mdi-material-ui/AccountMultiple';
import AccountMultiplePlus from 'mdi-material-ui/AccountMultiplePlus';
import FilePlus from 'mdi-material-ui/FilePlus';
import PlusBoxMultiple from 'mdi-material-ui/PlusBoxMultiple';
import FormSelect from 'mdi-material-ui/FormSelect';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  

}));

const EmployeeList = () => {
  const classes = useStyles();
  const [employees,setEmployees] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/employeelist/${token}/${id}/`)
    .then(response => {
      return response.json();
    }).then(response=>{
      if(response.status === 200){
        setEmployees(response);
      }
      
    })
  },[]);

  return (
        <List>
            {}
        </List>
  );
}
export default EmployeeList;
