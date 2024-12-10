import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Box, TextField } from '@mui/material';

const TablaEmpleados = () => {
  const [empleado, setEmpleados] = useState([]);
  const [nuevo_empleado, setNuevoEmpleado] = useState({ nombre: '', tipo_documento: '', numero_documento: '', email: '', direccion: '', telefono: '', cargo:'', rol: '', imagen_emp: null });

  useEffect(() => {
    // Obtener empleados desde la API
    fetch('http://localhost:5000/empleados')
      .then((res) => res.json())
      .then((data) => setEmpleados(data));
  }, []);

  const manejarAgregar = () => {
    const formData = new FormData();
    formData.append('nombre', nuevo_empleado.nombre);
    formData.append('tipo_documento', nuevo_empleado.tipo_documento);
    formData.append('numero_documento', nuevo_empleado.numero_documento);
    formData.append('email', nuevo_empleado.email);
    formData.append('direccion', nuevo_empleado.direccion);
    formData.append('telefono', nuevo_empleado.telefono);
    formData.append('cargo', nuevo_empleado.cargo);
    formData.append('rol', nuevo_empleado.rol);
    formData.append('foto', nuevo_empleado.imagen_emp);

    fetch('http://localhost:5000/empleados', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setEmpleados([...empleado, data]);
        setNuevoEmpleado({ nombre: '', tipo_documento: '', numero_documento: '', email: '', direccion: '', telefono: '', cargo:'', rol: '', imagen_emp: null });
      });
  };

  const manejarEliminar = (id) => {
    fetch(`http://localhost:5000/empleados/${id}`, { method: 'DELETE' }).then(() => {
      setEmpleados(empleado.filter((e) => e.id !== id));
    });
  };

  return (
    <Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Nombre"
          value={nuevo_empleado.nombre}
          onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, nombre: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Tipo Documento"
          value={nuevo_empleado.tipo_documento}
          onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, tipo_documento: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Número Documento"
          value={nuevo_empleado.numero_documento}
          onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, numero_documento: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Email"
          value={nuevo_empleado.email}
          onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, email: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Direccion"
          value={nuevo_empleado.direccion}
          onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, direccion: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Telefono"
          value={nuevo_empleado.telefono}
          onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, telefono: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Cargo"
          value={nuevo_empleado.cargo}
          onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, cargo: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="Rol"
          value={nuevo_empleado.rol}
          onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, rol: e.target.value })}
          sx={{ marginRight: 2 }}
        />
        <Button variant="contained" component="label">
          Subir Foto
          <input
            type="file"
            hidden
            onChange={(e) => setNuevoEmpleado({ ...nuevo_empleado, imagen_emp: e.target.files[0] })}
          />
        </Button>
        <Button variant="contained" color="primary" onClick={manejarAgregar} sx={{ marginLeft: 2 }}>
          Agregar Empleado
        </Button>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo Documento</TableCell>
            <TableCell>Número Documento</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Direccion</TableCell>
            <TableCell>Telefono</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell>Foto</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {empleado.map((empleado) => (
            <TableRow key={empleado.id}>
              <TableCell>{empleado.id}</TableCell>
              <TableCell>{empleado.nombre}</TableCell>
              <TableCell>{empleado.tipo_documento}</TableCell>
              <TableCell>{empleado.numero_documento}</TableCell>
              <TableCell>{empleado.email}</TableCell>
              <TableCell>{empleado.direccion}</TableCell>
              <TableCell>{empleado.telefono}</TableCell>
              <TableCell>{empleado.cargo}</TableCell>
              <TableCell>{empleado.rol}</TableCell>
              <TableCell>
                <img src={empleado.imagen_emp} alt="foto" style={{ width: 50, height: 50 }} />
              </TableCell>
              <TableCell>
                <Button color="error" onClick={() => manejarEliminar(empleado.id)}>
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

export default TablaEmpleados;
