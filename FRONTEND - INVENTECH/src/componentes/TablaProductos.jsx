import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Box, TextField } from '@mui/material';

const TablaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [nuevo_producto, setNuevoProducto] = useState({ nombre: '', estado: '', cantidad_disponible: 0, stock_min: 0, stock_max: 0, color: '', fecha_caducidad: '', proveedor: 0, categoria: 0, inventario: 0, venta: 0 });

  useEffect(() => {
    // Obtener productos desde la API
    fetch('http://localhost:5000/productos')
      .then((res) => res.json())
      .then((data) => setProductos(data));
  }, []);

  const manejarAgregar = () => {
    fetch('http://localhost:5000/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevo_producto),
    })
      .then((res) => res.json())
      .then((data) => {
        setProductos([...productos, data]);
        setNuevoProducto({ nombre: '', estado: '', cantidad_disponible: 0, stock_min: 0, stock_max: 0, color: '', fecha_caducidad: '', proveedor: 0, categoria: 0, inventario: 0, venta: 0 });
      });
  };

  const manejarEliminar = (id) => {
    fetch(`http://localhost:5000/productos/${id}`, { method: 'DELETE' }).then(() => {
      setProductos(productos.filter((p) => p.id !== id));
    });
  };

  return (
    <Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Nombre"
          value={nuevo_producto.nombre}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, nombre: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Estado"
          value={nuevo_producto.estado}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, estado: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Cantidad"
          type="number"
          value={nuevo_producto.cantidad_disponible}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, cantidad_disponible: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Stock Min"
          type="number"
          value={nuevo_producto.stock_min}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, stock_min: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Stock Max"
          type="number"
          value={nuevo_producto.stock_max}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, stock_max: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
        label="Color"
        value={nuevo_producto.color}
        onChange={(e) => setNuevoProducto({ ...nuevo_producto, color: e.target.value })}
        sx={{ marginRight: 2 }}
        />
        <TextField
          label="Fecha Caducidad"
          value={nuevo_producto.fecha_caducidad}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, fecha_caducidad: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Proveedor"
          type="number"
          value={nuevo_producto.proveedor}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, proveedor: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Categoria"
          type="number"
          value={nuevo_producto.categoria}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, categoria: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Inventario"
          type="number"
          value={nuevo_producto.inventario}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, inventario: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Venta"
          type="number"
          value={nuevo_producto.venta}
          onChange={(e) => setNuevoProducto({ ...nuevo_producto, venta: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" color="primary" onClick={manejarAgregar}>
          Agregar Producto
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Cantidad</TableCell>
            <TableCell>Stock Min</TableCell>
            <TableCell>Stock Max</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Fecha Caducidad</TableCell>
            <TableCell>Proveedor</TableCell>
            <TableCell>Categoria</TableCell>
            <TableCell>Inventario</TableCell>
            <TableCell>Venta</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productos.map((producto) => (
            <TableRow key={producto.id}>
              <TableCell>{producto.id}</TableCell>
              <TableCell>{producto.nombre}</TableCell>
              <TableCell>{producto.estado}</TableCell>
              <TableCell>{producto.cantidad_disponible}</TableCell>
              <TableCell>{producto.stock_min}</TableCell>
              <TableCell>{producto.stock_max}</TableCell>
              <TableCell>{producto.color}</TableCell>
              <TableCell>{producto.fecha_caducidad}</TableCell>
              <TableCell>{producto.proveedor}</TableCell>
              <TableCell>{producto.categoria}</TableCell>
              <TableCell>{producto.inventario}</TableCell>
              <TableCell>{producto.venta}</TableCell>
              <TableCell>
                <Button color="error" onClick={() => manejarEliminar(producto.id)}>
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

export default TablaProductos;
