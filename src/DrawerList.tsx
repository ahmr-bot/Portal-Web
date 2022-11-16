import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Divider from '@mui/material/Divider';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton href="#">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="首页" />
    </ListItemButton>
    <Divider sx={{ my: 1 }} />
    
    </React.Fragment>
);