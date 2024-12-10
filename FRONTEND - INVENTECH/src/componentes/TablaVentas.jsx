import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Box, TextField } from '@mui/material';

const TablaVentas = () => {
  const [ventas, setVentas] = useState([]);
  const [nueva_venta, setNuevaVenta] = useState({ estado: '', fecha: '', factura: 0 });

  useEffect(() => {
    // Obtener ventas desde la API
    fetch('http://localhost:5000/ventas')
      .then((res) => res.json())
      .then((data) => setVentas(data));
  }, []);

  const manejarAgregar = () => {
    fetch('http://localhost:5000/ventas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nueva_venta),
    })
      .then((res) => res.json())
      .then((data) => {
        setVentas([...ventas, data]);
        setNuevaVenta({ estado: '', fecha: '', factura: 0 });
      });
  };

  const manejarEliminar = (id) => {
    fetch(`http://localhost:5000/ventas/${id}`, { method: 'DELETE' }).then(() => {
      setVentas(ventas.filter((v) => v.id !== id));
    });
  };

  return (
    <Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Estado"
          value={nueva_venta.estado}
          onChange={(e) => setNuevaVenta({ ...nueva_venta, estado: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Fecha"
          value={nueva_venta.fecha}
          onChange={(e) => setNuevaVenta({ ...nueva_venta, fecha: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Factura"
          type="number"
          value={nueva_venta.factura}
          onChange={(e) => setNuevaVenta({ ...nueva_venta, factura: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" color="primary" onClick={manejarAgregar}>
          Agregar Venta
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Factura</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ventas.map((venta) => (
            <TableRow key={venta.id}>
              <TableCell>{venta.id}</TableCell>
              <TableCell>{venta.estado}</TableCell>
              <TableCell>{venta.fecha}</TableCell>
              <TableCell>{venta.factura}</TableCell>
              <TableCell>
                <Button color="error" onClick={() => manejarEliminar(venta.id)}>
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default TablaVentas;
