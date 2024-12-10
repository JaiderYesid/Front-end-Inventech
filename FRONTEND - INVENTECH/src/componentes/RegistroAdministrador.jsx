import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const RegistroAdministrador = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [foto, setFoto] = useState(null);

  const manejarRegistro = () => {
    const datos = new FormData();
    datos.append('nombre', nombre);
    datos.append('correo', correo);
    datos.append('contraseña', contraseña);
    datos.append('foto', foto);

    fetch('http://localhost:5000/admin', {
      method: 'POST',
      body: datos,
    }).then((response) => {
      if (response.ok) {
        alert('Administrador registrado con éxito');
      } else {
        alert('Error al registrar administrador');
      }
    });
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 3,
        backgroundColor: '#FFE0B2',
        borderRadius: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h5">Registro de Administrador</Typography>
      <TextField
        label="Nombre"
        fullWidth
        margin="normal"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        label="Correo"
        fullWidth
        margin="normal"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <TextField
        label="Contraseña"
        type="password"
        fullWidth
        margin="normal"
        value={contraseña}
        onChange={(e) => setContraseña(e.target.value)}
      />
      <Button
        variant="contained"
        component="label"
        sx={{ marginTop: 2 }}
      >
        Subir Foto
        <input
          type="file"
          hidden
          onChange={(e) => setFoto(e.target.files[0])}
        />
      </Button>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={manejarRegistro}
      >
        Registrar
      </Button>
    </Box>
  );
};

export default RegistroAdministrador;
