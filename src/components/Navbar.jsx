// src/components/Navbar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { mode, toggleTheme } = useThemeContext();
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    {
      title: 'EMI Calculator',
      path: '/',
      icon: <CalculateOutlinedIcon />,
    },
    {
      title: 'Amortization Schedule',
      path: '/schedule',
      icon: <InsertChartOutlinedIcon />,
    },
    {
      title: 'Currency Conversion',
      path: '/currency',
      icon: <AttachMoneyOutlinedIcon />,
    },
  ];

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Paper
      elevation={4}
      sx={{
        position: 'fixed',
        top: 16,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '95%',
        maxWidth: 950,
        borderRadius: '24px',
        zIndex: 1300,
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        transition: 'background-color 0.3s ease-in-out',
      }}
    >
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          borderRadius: '24px',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              flexShrink: 0,
            }}
          >
            Loan EMI Calculator
          </Typography>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={RouterLink}
                  to={item.path}
                  startIcon={item.icon}
                  variant={location.pathname === item.path ? 'contained' : 'text'}
                  sx={{
                    borderRadius: 20,
                    textTransform: 'none',
                    fontWeight: 500,
                    color:
                      location.pathname === item.path
                        ? theme.palette.getContrastText(theme.palette.primary.main)
                        : theme.palette.text.primary,
                  }}
                >
                  {item.title}
                </Button>
              ))}
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
              </IconButton>
            </Box>
          )}

          {/* Mobile Nav */}
          {isMobile && (
            <Box>
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
              </IconButton>
              <IconButton onClick={toggleDrawer} color="inherit">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
                  <List>
                    {navItems.map((item) => (
                      <ListItem
                        button
                        key={item.path}
                        component={RouterLink}
                        to={item.path}
                        selected={location.pathname === item.path}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Navbar;
