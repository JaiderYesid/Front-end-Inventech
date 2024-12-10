import React, { useState } from 'react';
import { TextField, Button, Typography, MenuItem, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FormularioLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [rol, setRol] = useState('');
  const navigate = useNavigate();

  const manejarLogin = () => {
    if (usuario && contraseña && rol) {
      if (rol === 'administrador') {
        navigate('/administrador');
      } else if (rol === 'empleado') {
        navigate('/empleado');
      }
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        textAlign: 'center',
        backgroundColor: '#FFE0B2',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Iniciar Sesión
      </Typography>
      <TextField
        label="Usuario"
        variant="outlined"
        fullWidth
        margin="normal"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />
      <TextField
        select
        label="Rol"
        variant="outlined"
        fullWidth
        margin="normal"
        value={rol}
        onChange={(e) => setRol(e.target.value)}
      >
        <MenuItem value="administrador">Administrador</MenuItem>
        <MenuItem value="empleado">Empleado</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={manejarLogin}
      >
        Iniciar Sesión
      </Button>
    </Box>
  );
};

export default FormularioLogin;
