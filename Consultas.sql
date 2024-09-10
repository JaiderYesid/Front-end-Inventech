-- RF001 Registro de productos y sus caracteristicas
-- Consulta para obtener todos los productos con sus caracteristicas
USE inventario;
SELECT * FROM producto;

-- RF002 Gestion de productos en tiempo real
-- Consulta para ver el inventario actual de todos los productos
USE inventario;
SELECT ID_Producto, Nombre, Descripcion, Precio, Stock FROM inventario WHERE fecha_actual = CURDATE();

-- RF003 Control de entrada y salida de productos
-- Consulta para registrar entradas y salidad de productos
USE inventario;
