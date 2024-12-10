import React, { useState } from 'react';
import { Box, Typography, Avatar, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import TablaProductos from '../componentes/TablaProductos';
import TablaVentas from '../componentes/TablaVentas';
import BarraDeNavegacion from '../componentes/BarraDeNavegacion';

const VistaEmpleado = () => {
  const [vistaActual, setVistaActual] = useState('productos');

  const menuOpciones = [
    { nombre: 'Entrada y Salida de Productos', vista: 'productos' },
    { nombre: 'Gestión de Ventas', vista: 'ventas' },
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
          <Typography variant="h6">Empleado</Typography>
          <Typography variant="body1">Documento: Cédula 123456789</Typography>
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
          {vistaActual === 'productos' && <TablaProductos />}
          {vistaActual === 'ventas' && <TablaVentas />}
        </Box>
      </Box>
    </>
  );
};

export default VistaEmpleado;
