import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ArrowLeft from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';
import List from '@mui/material/List';
import Transactions from '../../../components/Pages/Transactions';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Nav from '../../../components/Partials/NavBars/HomeAppBar/HomeAppbar';
// import {useRouter} from 'next/router';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(0),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
const router = useRouter();
console.log(router.pathname);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar  color='inherit' position="fixed" open={open}>
        <div style={{display:'flex'}}>
            <div style={{backgroundColor:'#000', display:'flex', ...(open && { display: 'none' })}}>
                <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ml:2, color:'white', ...(open && { display: 'none' }) }}
            >
                <ArrowRight />
                </IconButton>
            </div>
            <Nav />            
        </div>
          
        {/* </Toolbar> */}
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth, 
          border:'none',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader  sx={{backgroundColor:'#000000',}} >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ArrowLeft sx={{color:'white'}} /> : <ArrowLeft />}
          </IconButton>
        </DrawerHeader>
        <List sx={{backgroundColor:'#000000', height:'100%'}}>
          {['Settings', 'Categories, Tags and Fiters', 'User Management', 'Page Management', 'Collection', 'Transactions', 'Messages', 'IP Case Management', 'Analyctics & Anctivities', 'Drops and Events'].map((text, index) => (
            <ListItem className='active'  key={text} disablePadding>
              <ListItemButton>
                    <Navlink

                        sx={{textDecoration:'none', 
                            fontFamily: 'Kern',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '18px',
                            lineHeight: '22px',
                            color: '#fafafa'
                           }}
                        href={`/admin/${text.toLowerCase()}`}><ListItemText  primary={text} /> </Navlink>                
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
            <Transactions />
      </Main>
    </Box>
  );
}

const Navlink = styled(Link)`

`
