import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';

const TablaProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    // Obtener datos de la API
    fetch('http://localhost:5000/proveedores')
      .then((res) => res.json())
      .then((data) => setProveedores(data));
  }, []);

  const agregarProveedor = () => {
    // Lógica para agregar proveedor
  };

  const editarProveedor = (id) => {
    // Lógica para editar proveedor
  };

  const eliminarProveedor = (id) => {
    fetch(`http://localhost:5000/proveedores/${id}`, { method: 'DELETE' }).then(() => {
      setProveedores(proveedores.filter((p) => p.id !== id));
    });
  };

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={agregarProveedor}>
        Agregar Proveedor
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {proveedores.map((proveedor) => (
            <TableRow key={proveedor.id}>
              <TableCell>{proveedor.id}</TableCell>
              <TableCell>{proveedor.nombre}</TableCell>
              <TableCell>{proveedor.email}</TableCell>
              <TableCell>{proveedor.direccion}</TableCell>
              <TableCell>{proveedor.telefono}</TableCell>
              <TableCell>
                <Button onClick={() => editarProveedor(proveedor.id)}>Editar</Button>
                <Button color="error" onClick={() => eliminarProveedor(proveedor.id)}>
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

export default TablaProveedores;
