-- RF 001 Registro de los clientes
-- Consulta que permite ver la lista completra de todos los clientes
USE proyecto;
SELECT * FROM cliente;

-- RF002 Registro de funcionario o empleado con su cargo
-- Consulta para obtener la lista de empleados con su cargo
USE proyecto;
SELECT ID_Empleado, Nombre, Apellido, Cargo FROM Empleados JOIN cargos ON ID_Cargo = Cargo_ID;

-- RF003 Registro de productos y sus caracteristicas
-- Consulta para obtener todos los productos con sus caracteristicas
USE proyecto;
SELECT * FROM producto;

-- RF004 Gestion de productos en tiempo real
-- Consulta para ver el inventario actual de todos los productos
USE proyecto;
SELECT ID_Producto, Nombre, Descripcion, Precio, Cantidad FROM inventario WHERE fecha_actual = CURDATE();

-- RF005 Control de entrada y salida de productos
-- Consulta para registrar entradas y salidad de productos
USE proyecto;
SELECT * FROM tipodemovimiento WHERE fecha >= CURDATE() - INTERVAL 30 DAY;

-- RF006 Generacion de informes de inventario
-- Consulta para generar un informe de inventario con productos de bajo stock minimo
USE proyecto;
SELECT ID_Producto, Nombre, Descripcion, Precio, Stock_min FROM inventario WHERE Cantidad < Stock;

-- RF007 Sguimiento de fechas de caducidad
-- Consulta para verificar productos con fecha de caducidad proxima
USE proyecto;
SELECT ID_Producto, Nombre, Fecha_caducidad FROM producto WHERE fecha_caducidad <= CURDATE() + INTERVAL 30 DAY;

-- RF008 Gestión de proveedores y pedidos​
-- Consuta para listar todos los proveedores y sus pedidos pendientes
USE proyecto;
SELECT ID_Proveedor, Nombre, ID_Venta, Estado FROM proveedor JOIN venta ON ID_Proveedor, Proveedor_ID WHERE Estado = 'Pendiente';

-- RF009 Control de stock mínimo y máximo
-- Consultas para productos cuyo stock este fuera del rango definido
USE inventario;
SELECT ID_Producto, Nombre, Cantidad, Stock_min, Stock_max FROM inventario WHERE Cantidad_disponible <= Stock_min OR Cantidad >= Stock_max;

-- RF010 Integracion con sistemas de ventas y facturacion
-- Consulta para obtener ventas recientes y si integracion con inventario
USE proyecto;
SELECT ID_Venta, Fecha, ID_Producto, Cantidad_disponible FROM venta JOIN inventario ON ID_Producto = Producto_ID WHERE Fecha_venta >= CURDATE() - INTERVAL 30 DAY;

-- RF011 Registro de movimiento de productos
-- Consulta para obtener el historial de movimientos de un producto especifico
USE proyecto;
SELECT * FROM Movimientos_inventario WHERE ID_Producto = 1 ORDER BY fceha DESC;

-- RF012 Gestion de devoluciones y reclamaciones
-- Consulta para listar todas la devoluciones y reclamaciones recientes
USE proyecto;
SELECT ID_Devolucion, fecha_devolucion, ID_Reclamacion, Estado_reclamacion FROM devoluciones LEFT JOIN reclamaciones ON ID_Devolucion = Devolucion_ID WHERE fecha_devolucion >= CURDATE() - INTERVAL 30 DAY;
