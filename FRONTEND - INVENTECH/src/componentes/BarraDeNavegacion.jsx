import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const BarraDeNavegacion = ({ titulo, onCerrarSesion }) => {
  const [menuAbierto, setMenuAbierto] = React.useState(false);

  const manejarMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FF5722' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {titulo}
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={manejarMenu}
        >
          <MenuIcon />
        </IconButton>
        {menuAbierto && (
          <Menu
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={menuAbierto}
            onClose={manejarMenu}
          >
            <MenuItem onClick={onCerrarSesion}>Cerrar Sesión</MenuItem>
          </Menu>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default BarraDeNavegacion;
