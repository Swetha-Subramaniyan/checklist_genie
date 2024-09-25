
import React from 'react';
<<<<<<< HEAD
import { styled} from '@mui/material/styles';
=======
import { styled } from '@mui/material/styles';
>>>>>>> 840e5dadd569e1d2249335d4060139a906ea3221
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
<<<<<<< HEAD
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
=======
>>>>>>> 840e5dadd569e1d2249335d4060139a906ea3221
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TemplateIcon from '@mui/icons-material/Description';
import imagelogo from '../../../Assets/logo.jpg';
<<<<<<< HEAD
import { IoPersonCircleSharp} from "react-icons/io5";
=======
import { IoPersonCircleSharp } from "react-icons/io5";
>>>>>>> 840e5dadd569e1d2249335d4060139a906ea3221
import InboxIcon from '@mui/icons-material/Inbox';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'; 
import SettingsIcon from '@mui/icons-material/Settings'; 
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
<<<<<<< HEAD
import { useTheme } from '@mui/material/styles';
import './Navbar.css';



const drawerWidth = 240;
=======
import './Navbar.css';

const drawerWidth = 240;

>>>>>>> 840e5dadd569e1d2249335d4060139a906ea3221
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: '#25274D',
<<<<<<< HEAD
  variants: [
    {
      props: { open: true },
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
=======
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
>>>>>>> 840e5dadd569e1d2249335d4060139a906ea3221
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
<<<<<<< HEAD
    variants: [
      {
        props: { open: true },
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: { open: false },
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  })
);

export default function MiniDrawer() {
  
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
=======
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setOpen(!open);
>>>>>>> 840e5dadd569e1d2249335d4060139a906ea3221
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
<<<<<<< HEAD
  const navigate=useNavigate();
  const handleLogout = () => {
    navigate('/')
    handleMenuClose();
  };



  return (
    <> 
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton 
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5
              },
              open && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img src={imagelogo} alt='logo' className='hii' />
            <IoPersonCircleSharp 
              className='ir' 
              style={{ 
                position: 'absolute', 
                right: '15px', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                fontSize: '43px',
                cursor: 'pointer'
              }}
              onClick={handleMenuOpen} 
            />
          </Typography>
        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[{
            text : 'Dashboard' ,
            icon: <DashboardIcon  />
            
          },
          {
            text: 'Template',
            icon: <TemplateIcon />
          },
          {
            text: 'Tag',
            icon: <InboxIcon />
          }
         
          ].map(({ text, icon }) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <Link to={`/admin/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                <ListItemButton
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                    },
                    open
                      ? {
                          justifyContent: 'initial',
                        }
                      : {
                          justifyContent: 'center',
                        },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: 'auto',
                          },
                    ]}
                  >
=======

  const handleLogout = () => {
    navigate('/');
    handleMenuClose();
  };

  return (
    <> 
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton 
              color="inherit"
              aria-label="toggle drawer"
              onClick={toggleDrawer}
              edge="start"
              sx={{ marginRight: 5 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              <img src={imagelogo} alt='logo' className='hii' />
              <IoPersonCircleSharp 
                className='ir' 
                style={{ 
                  position: 'absolute', 
                  right: '15px', 
                  top: '50%', 
                  transform: 'translateY(-50%)', 
                  fontSize: '43px',
                  cursor: 'pointer'
                }}
                onClick={handleMenuOpen} 
              />
            </Typography>
          </Toolbar>
        </AppBar>

        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>

        <Drawer variant="permanent" open={open}>
          <DrawerHeader />
          <Divider />
          <List>
            {[{
              text: 'Dashboard',
              icon: <DashboardIcon />
            },
            {
              text: 'Template',
              icon: <TemplateIcon />
            },
            {
              text: 'Tag',
              icon: <InboxIcon />
            },
            {
              text: 'Checklist',
              icon: <TemplateIcon />
            }
            ].map(({ text, icon }) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <Link to={`/admin/${text.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                  <ListItemButton
                    sx={[
                      {
                        minHeight: 48,
                        px: 2.5,
                      },
                      open
                        ? {
                            justifyContent: 'initial',
                          }
                        : {
                            justifyContent: 'center',
                          },
                    ]}
                  >
                    <ListItemIcon
                      sx={[
                        {
                          minWidth: 0,
                          justifyContent: 'center',
                        },
                        open ? { mr: 3 } : { mr: 'auto' },
                      ]}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={[
                        open ? { opacity: 1 } : { opacity: 0 },
                      ]}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}  
          </List>
          <Divider />
          <List>
            {[{
              text: 'Notification',
              icon: <NotificationsIcon />
            },
            {
              text: 'Settings',
              icon: <SettingsIcon />
            },
            {
              text: 'User',
              icon: <PersonIcon />
            }
            ].map(({ text, icon }) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={[
                    { minHeight: 48, px: 2.5 },
                    open ? { justifyContent: 'initial' } : { justifyContent: 'center' }
                  ]}
                  onClick={() => {
                    if (text === 'User') {
                      navigate('/user/dashboard');
                    } else {
                      navigate(`/admin/${text.toLowerCase().replace(' ', '-')}`);
                    }
                  }}
                >
                  <ListItemIcon
                    sx={[
                      { minWidth: 0, justifyContent: 'center' },
                      open ? { mr: 3 } : { mr: 'auto' },
                    ]}
                  >
>>>>>>> 840e5dadd569e1d2249335d4060139a906ea3221
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
<<<<<<< HEAD
                    sx={[
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
  {[
    {
      text: 'Notification',
      icon: <NotificationsIcon />
    },
    {
      text: 'Settings',
      icon: <SettingsIcon />
    },
    {
      text: 'User',
      icon: <PersonIcon />
    }
  ].map(({ text, icon }) => (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={[
          { minHeight: 48, px: 2.5 },
          open ? { justifyContent: 'initial' } : { justifyContent: 'center' }
        ]}
        onClick={() => {
          if (text === 'User') {
            navigate('/user/dashboard');
          } else {
            navigate(`/admin/${text.toLowerCase().replace(' ', '-')}`);
          }
        }}
      >
        <ListItemIcon
          sx={[
            { minWidth: 0, justifyContent: 'center' },
            open ? { mr: 3 } : { mr: 'auto' },
          ]}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={[
            open ? { opacity: 1 } : { opacity: 0 },
          ]}
        />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
=======
                    sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                  />
                </ListItemButton>
              </ListItem>
            ))}  
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>
      </Box>
>>>>>>> 840e5dadd569e1d2249335d4060139a906ea3221
    </>
  );
}

