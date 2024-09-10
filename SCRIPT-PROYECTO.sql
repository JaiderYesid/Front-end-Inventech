DROP DATABASE IF EXISTS Inventario;
CREATE DATABASE Inventario CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE Inventario;

CREATE TABLE Proveedor(
ID_Proveedor INT PRIMARY KEY AUTO_INCREMENT,
Nombre VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Email VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Direccion VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Telefono INT
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Categoria(
ID_Categoria INT PRIMARY KEY AUTO_INCREMENT,
Nombre VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Descripcion VARCHAR(1000)COLLATE utf8mb4_unicode_ci NOT NULL
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Inventario(
ID_Inventario INT PRIMARY KEY AUTO_INCREMENT,
Registros VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Productos VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Fecha DATE,
Stock INT
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Cliente(
ID_Cliente INT PRIMARY KEY AUTO_INCREMENT,
Nombre VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Email VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Direccion VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Telefono INT(20)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE TipoDeMovimiento(
ID_Movimiento INT PRIMARY KEY AUTO_INCREMENT,
Descripcion VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Inventario_ID INT NOT NULL,
FOREIGN KEY (Inventario_ID) REFERENCES Inventario(ID_Inventario)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Factura(
ID_Factura INT PRIMARY KEY AUTO_INCREMENT,
Fecha DATE,
Valor_Total FLOAT,
IVA INT,
Inventario_ID INT NOT NULL,
FOREIGN KEY (Inventario_ID) REFERENCES Inventario(ID_Inventario)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Venta(
ID_Venta INT PRIMARY KEY AUTO_INCREMENT,
Estado VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Fecha DATE,
Total FLOAT,
Cliente_ID INT NOT NULL,
Factura_ID INT NOT NULL,
FOREIGN KEY (Cliente_ID) REFERENCES Cliente(ID_Cliente),
FOREIGN KEY (Factura_ID) REFERENCES Factura(ID_Factura)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE Producto(
ID_Producto INT PRIMARY KEY AUTO_INCREMENT,
Descripcion VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Precio FLOAT,
Cantidad INT,
Estado VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Nombre VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Stock INT,
Tamaño FLOAT,
Color VARCHAR(45)COLLATE utf8mb4_unicode_ci NOT NULL,
Proveedor_ID INT NOT NULL,
Categoria_ID INT NOT NULL,
Inventario_ID INT NOT NULL,
Venta_ID INT NOT NULL,
FOREIGN KEY (Proveedor_ID) REFERENCES Proveedor(ID_Proveedor),
FOREIGN KEY (Categoria_ID) REFERENCES Categoria(ID_Categoria),
FOREIGN KEY (Inventario_ID) REFERENCES Inventario(ID_Inventario),
FOREIGN KEY (Venta_ID) REFERENCES Venta(ID_Venta)
)CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
