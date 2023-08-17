import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import StyledLink from './StyledLink';
import { useLocation } from 'react-router-dom';

interface MenuProps {
  window?: () => Window;
  isHome: boolean;
}

const drawerWidth = '70%';
const navItems = [
  { name: 'Творби', link: '/stories' },
  { name: 'Рисунки', link: '/illustrations' },
  { name: 'Осмото кралство', link: '/books' },
  { name: 'Отзиви', link: '/feedback' },
  { name: 'За Стефи', link: '/about' },
  { name: 'Контакти', link: '/contacts' },
];

export default function Menu(props: MenuProps) {
  const { window, isHome } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pathname } = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <StyledLink to={item.link}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText
                  sx={{
                    '& span': { color: 'white', fontSize: '1.3rem' },
                  }}
                  primary={item.name}
                />
              </ListItemButton>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: isHome
            ? 'transparent'
            : 'radial-gradient(circle, rgba(171,179,158,1) 0%, rgba(83,141,174,1) 100%)',
          boxShadow: 'none',
          borderBottom: '1px solid white',
        }}
      >
        <Toolbar
          sx={{
            justifyContent: { xs: 'flex-start', sm: 'flex-end' },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {navItems.map((item) => (
              <StyledLink key={item.name} to={item.link}>
                <Button
                  variant="text"
                  sx={{
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: '1rem',
                    textTransform: 'none',
                    borderBottom:
                      item.link === pathname
                        ? '2px solid #fff'
                        : '2px solid transparent',
                    borderRadius: 0,
                    '&:hover': {
                      borderBottom: '2px solid #fff',
                    },
                  }}
                >
                  {item.name}
                </Button>
              </StyledLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          //anchor="top"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background:
                'radial-gradient(circle, rgba(171,179,158,1) 0%, rgba(83,141,174,1) 100%)',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
