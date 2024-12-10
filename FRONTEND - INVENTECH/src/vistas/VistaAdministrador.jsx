import React from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import TablaProveedores from '../componentes/TablaProveedores';
import TablaEmpleados from '../componentes/TablaEmpleados';
import BarraDeNavegacion from '../componentes/BarraDeNavegacion';

const VistaAdministrador = () => {
  const [vistaActual, setVistaActual] = useState('proveedores');

  const menuOpciones = [
    { nombre: 'Gestión de Proveedores', vista: 'proveedores' },
    { nombre: 'Gestión de Empleados', vista: 'empleados' },
  ];

  return (
    <>
      <BarraDeNavegacion titulo="INVENTECH" />
      <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#FFEBEE' }}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            backgroundColor: '#FFE0B2',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ width: 100, height: 100, marginBottom: 2 }}
            src="/ruta-a-la-foto" // Cambiar por la foto real
          />
          <Typography variant="h6">Administrador</Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            correo@ejemplo.com
          </Typography>
          <List>
            {menuOpciones.map((opcion) => (
              <ListItem key={opcion.vista} disablePadding>
                <ListItemButton onClick={() => setVistaActual(opcion.vista)}>
                  <ListItemText primary={opcion.nombre} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box sx={{ flex: 1, padding: 3 }}>
          {vistaActual === 'proveedores' && <TablaProveedores />}
          {vistaActual === 'empleados' && <TablaEmpleados />}
        </Box>
      </Box>
    </>
  );
};

export default VistaAdministrador;
