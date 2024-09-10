-- RF001 Registro de funcionario o empleado con su cargo
-- Consulta para obtener la lista de empleados con su cargo
USE inventario;
SELECT ID_Empleado, Nombre, Apellido, Cargo FROM Empleados JOIN cargos ON ID_Cargo = Cargo_ID;

-- RF002 Registro de productos y sus caracteristicas
-- Consulta para obtener todos los productos con sus caracteristicas
USE inventario;
SELECT * FROM producto;

-- RF003 Gestion de productos en tiempo real
-- Consulta para ver el inventario actual de todos los productos
USE inventario;
SELECT ID_Producto, Nombre, Descripcion, Precio, Cantidad FROM inventario WHERE fecha_actual = CURDATE();

-- RF004 Control de entrada y salida de productos
-- Consulta para registrar entradas y salidad de productos
USE inventario;
SELECT * FROM tipodemovimiento WHERE fecha >= CURDATE() - INTERVAL 30 DAY;

-- RF005 Generacion de informes de inventario
-- Consulta para generar un informe de inventario con productos de bajo stock minimo
USE inventario;
SELECT ID_Producto, Nombre, Descripcion, Precio, Stock_min FROM inventario WHERE Cantidad < Stock;

-- RF006 Sguimiento de fechas de caducidad
-- Consulta para verificar productos con fecha de caducidad proxima
USE inventario;
SELECT ID_Producto, Nombre, Fecha_caducidad FROM producto WHERE fecha_caducidad <= CURDATE() + INTERVAL 30 DAY;

-- RF007 Gestión de proveedores y pedidos​
-- Consuta para listar todos los proveedores y sus pedidos pendientes
USE inventario;
SELECT ID_Proveedor, Nombre, ID_Venta, Estado FROM proveedor JOIN venta ON ID_Proveedor, Proveedor_ID WHERE Estado = 'Pendiente';

-- RF008 Control de stock mínimo y máximo
-- Consultas para productos cuyo stock este fuera del rango definido
USE inventario;
SELECT ID_Producto, Nombre, Cantidad, Stock_min, Stock_max FROM inventario WHERE Cantidad <= Stock_min OR Cantidad >= Stock_max;

-- RF009 Integracion con sistemas de ventas y facturacion
-- Consulta para obtener ventas recientes y si integracion con inventario
USE inventario;
SELECT ID_Venta, Fecha, ID_Producto, Cantidad FROM venta JOIN inventario ON ID_Producto = Producto_ID WHERE Fecha_venta >= CURDATE() - INTERVAL 30 DAY;

-- RF010 Registro de movimiento de productos
-- Consulta para obtener el historial de movimientos de un producto especifico
USE inventario;
SELECT * FROM Movimientos_inventario WHERE ID_Producto = 1 ORDER BY fceha DESC;

-- RF011 Gestion de devoluciones y reclamaciones
-- Consulta para listar todas la devoluciones y reclamaciones recientes
USE inventario;
SELECT ID_Devolucion, fecha_devolucion, ID_Reclamacion, Estado_reclamacion FROM devoluciones LEFT JOIN reclamciones ON ID_Devolucion = Devolucion_ID WHERE fecha_devolucion >= CURDATE() - INTERVAL 30 DAY;
