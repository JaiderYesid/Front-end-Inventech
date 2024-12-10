import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioLogin from './componentes/FormularioLogin';
import RegistroAdministrador from './componentes/RegistroAdministrador';
import VistaAdministrador from './vistas/VistaAdministrador';
import VistaEmpleado from './vistas/VistaEmpleado';
import TemaPersonalizado from './tema/TemaPersonalizado';

const App = () => {
  return (
    <TemaPersonalizado>
      <Router>
        <Routes>
          <Route path="/login" element={<FormularioLogin />} />
          <Route path="/registro-administrador" element={<RegistroAdministrador />} />
          <Route path="/administrador" element={<VistaAdministrador />} />
          <Route path="/empleado" element={<VistaEmpleado />} />
        </Routes>
      </Router>
    </TemaPersonalizado>
  );
};

export default App;
