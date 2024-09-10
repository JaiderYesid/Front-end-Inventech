DROP DATABASE IF EXISTS proyecto;

CREATE DATABASE proyecto CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

use proyecto;
 
create table Categoria (
  ID INT PRIMARY KEY AUTO_INCREMENT,
  NOMBRE VARCHAR(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  DESCRIPCIÓN VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

create table Modelo (
 ID int primary key auto_increment,
 NOMBRE VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
 TAMAÑO INT NOT NULL,
 TOTAL INT NOT NULL,
 ID_CATEGORIA INT NOT NULL,
 FOREIGN KEY (ID_Categoria) references Categoria (ID)
 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
 
create table Proveedor (
ID INT PRIMARY KEY AUTO_INCREMENT,
NOMBRE VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
EMAIL VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
DIRECCIÓN VARCHAR(30) COLLATE utf8mb4_unicode_ci NOT NULL,
TELEFONO INT NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

create table Funcionario (
ID INT PRIMARY KEY AUTO_INCREMENT,
NOMBRE VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
CARGO VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 EMAIL VARCHAR(50)COLLATE utf8mb4_unicode_ci NOT NULL,
 CONTRASEÑA VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 REP_CONTRASEÑA VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
 TELEFONO INT NOT NULL
 ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
 
create table Cliente (
ID INT PRIMARY KEY AUTO_INCREMENT,
NOMBRE VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
EMAIL VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
DIRECCIÓN VARCHAR(30) COLLATE utf8mb4_unicode_ci NOT NULL,
TELEFONO INT NOT NULL,
CONTRASEÑA VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
REP_CONTRASEÑA VARCHAR(50) COLLATE utf8mb4_unicode_ci NOT NULL,
ID_funcionario INT NOT NULL, 
FOREIGN KEY (ID_funcionario) REFERENCES Funcionario (ID) 
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Create table Inventario (
ID INT PRIMARY KEY AUTO_INCREMENT,
FECHA DATE,
STOCK INT 
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Create table Tipo_Movimiento (
ID INT PRIMARY KEY AUTO_INCREMENT,
DESCRIPCIÓN VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
ID_inventario INT NOT NULL,
FOREIGN KEY (ID_Inventario) REFERENCES Inventario (ID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Create Table Factura (
ID INT PRIMARY KEY AUTO_INCREMENT,
FECHA DATE,
VALOR_TOTAL INT NOT NULL,
IVA INT NOT NULL,
ID_Inventario INT NOT NULL,
FOREIGN KEY (ID_Inventario) REFERENCES Inventario (ID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Create table Venta (
ID INT PRIMARY KEY AUTO_INCREMENT,
ESTADO VARCHAR(20) COLLATE utf8mb4_unicode_ci NOT NULL,
FECHA DATE NOT NULL,
ID_Factura INT NOT NULL,
ID_Cliente INT NOT NULL,
FOREIGN KEY (ID_Factura) REFERENCES Factura (ID),
FOREIGN KEY (ID_Cliente) REFERENCES Cliente (ID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

 create table FUNCIONARIO_has_VENTA (
 ID_Funcionario INT NOT NULL,
 Id_Venta INT NOT NULL,
 FOREIGN KEY (ID_Funcionario) REFERENCES Funcionario (ID),
 FOREIGN KEY (ID_Venta) REFERENCES Venta (ID)
 );
 
Create table Producto (
ID INT PRIMARY KEY AUTO_INCREMENT,
ESTADO VARCHAR(100) COLLATE utf8mb4_unicode_ci NOT NULL,
STOCK INT NOT NULL,
COLOR VARCHAR (20) COLLATE  utf8mb4_unicode_ci NOT NULL,
FECHA_CADUCIDAD DATE NOT NULL,
ID_Proveedor INT NOT NULL,
ID_Categoria INT NOT NULL,
ID_Inventario INT NOT NULL,
ID_Venta INT NOT NULL,
ID_Modelo INT NOT NULL,
foreign key (ID_Proveedor) REFERENCES Proveedor(ID),
foreign key (ID_Categoria) REFERENCES Categoria(ID),
foreign key (ID_Inventario) REFERENCES Inventario (ID),
foreign key (ID_Venta) REFERENCES Venta(ID),
Foreign key (ID_Modelo) REFERENCES Modelo(ID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
