import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
    Typography,
    List,
    ListItemText,
    Drawer,
    ListItem,
    Button,
    Menu,
    ListSubheader,
} from '@material-ui/core';
import MenuOpen from 'mdi-material-ui/MenuOpen';
const useStyles = makeStyles(theme=>({
 icon:{
   color: 'white',
 },
 List:{
   width: 300,
 },
 subheader:{
   color: `${theme.palette.text.primary}80`,
    fontSize: '30px'
 }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();
  
  const [openDrawer, setOpenDrawer] = useState(false);

  const renderList = () => (
   <List className={classes.List} subheader={<ListSubheader className={classes.subheader}>Personal Panel</ListSubheader>}>
       <ListItem button>
           <ListItemText primary="Payslip Management" />
       </ListItem>
       <ListItem button>
           <ListItemText primary="Employee Management" />
       </ListItem>
       <ListItem button>
           <ListItemText primary="Payslip Form Management" />
       </ListItem>
       <ListItem button>
           <ListItemText primary="Payslip Presentation" />
       </ListItem>
       <ListItem button>
           <ListItemText primary="Payslip Report" />
       </ListItem>
   </List>
  );

  return (
        <React.Fragment key="left">
          <Button onClick={()=> setOpenDrawer(true)}>
            <MenuOpen className={classes.icon} />
          </Button>
          <Drawer anchor="left" open={openDrawer} onClose={()=> setOpenDrawer(false)} >
            {renderList()}
          </Drawer>
        </React.Fragment>
  );
}
