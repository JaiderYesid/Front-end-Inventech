select * from Categoria;
insert into Categoria values (01, "Crema Hidratante", "Evita sequedad en la piel.");

select * from Modelo;
insert into modelo values (4001, 'Crema', 125 , 4000 , 01); 
insert into modelo values (4002, 'Crema', 500 , 10.000 , 01); 
insert into modelo values (4003, 'Crema', 1.000 , 20000 , 01); 

select * from Proveedor; 

insert into Proveedor values (101, 'Armol', 'ventas@plasticosarmol.com', 'Carrera 30 # 17 - 32', 320960092);
insert into Proveedor values (102, 'Duque Saldarriaga', 'ventas@duquesaldarriaga.co', 'Ave Cra 30 #17-18', 317513510);
insert into Proveedor values (103, 'LegaQuimicos',  'Ventas2@legaquimicos.com', 'Carrera 66 #a 12 a 12', 317714333);
insert into Proveedor values (104, 'Centro Naturista',  'VentasNAturales@centronaturistas.com', 'Carrera 45 #a 23 a 12', 328192834);
delete from Proveedor where ID = 104;

select * from Cliente;

insert into Cliente values (1001, 'Juan', 'juangarni3@gmail.com', 'Cll 2 sur #3-21', 324651447);
insert into Cliente values (1002, 'Maria', 'marialvarez49@gmail.com', 'Cll 3 bis #65-35', 312456789);
insert into Cliente values (1003, 'Julian', 'juliiian@gmail.com', 'Cll 17  #256-19', 318987654);
insert into Cliente values (1004, 'Camilo', 'Camilo239@gmail.com', 'Cll 22 dia #143-97', 320654321);
insert into Cliente values (1005, 'Esteban', 'Mesteban123@gmail.com', 'Cll 04  #42-73', 311234567);
insert into Cliente values (1006, 'Isabella', 'Isabella3092@gmail.com', 'Cll 32 sur #3-83', 322876543);
insert into Cliente values (1007, 'Jhoseph', 'jhosepherr384gmail.com', 'Cll 145 sur #3-10', 314567890);
insert into Cliente values (1008, 'Ivan', 'Ivanera34@gmail.com', 'Cll 2 sur #3-03', 315987321);
insert into Cliente values (1009, 'Sergio', 'SergioSanchez12@gmail.com', 'Calle 72 #15-45', 316654789);
insert into Cliente values (1010, 'Jaider', 'Jaider320132@gmail.com', 'Carrera 11 #82-15', 319876543);
insert into Cliente values (1011, 'Nixson', 'Nixsongarci2871@gmail.com', 'Avenida Carrera 68 #90-35', 313245678);
insert into Cliente values (1012, 'Nelson', 'Nelsonnn999@gmail.com', 'Calle 100 #19A-44', 317654123);
insert into Cliente values (1013, 'Kenneth', 'Kennetherr@gmail.com', 'Carrera 50 #26-10', 321876345);
insert into Cliente values (1014, 'Nicol', 'Nicolasess@gmail.com', 'Calle 45 #9-60', 322345987);
insert into Cliente values (1015, 'Esperanza', 'Esperanza435@gmail.com', 'Avenida Boyacá #13-25', 318765432);
insert into Cliente  values (1016, 'Lucas', 'Lucas45yere@gmail.com', 'Carrera 7 #156-80', 311543210);
insert into Cliente values (1017, 'Hellen', 'Hellencastellano@gmail.com', 'Calle 85 #14-55', 314789654);
insert into Cliente values (1018, 'Luciana', 'LucianaCastellano@gmail.com', 'Transversal 93 #53-25', 317123456);
insert into Cliente values (1019, 'Victoria', 'Victoriagonzales@gmail.com', 'Carrera 24 #57-70', 312789654);
insert into Cliente values (1020, 'Ariana', 'arianarodriguez@gmail.com', 'Avenida Caracas #64-20', 319543876);
insert into Cliente values (1021, 'Karoll', 'KarollCasili@gmail.com', 'Calle 127 #15A-30', 310987654);

Select * from Inventario;

insert into Inventario values (2001,'2024-01-01', 1000);
insert into Inventario values (2002,'2024-02-18', 870);
insert into Inventario values (2003,'2024-04-19', 1044);
insert into Inventario values (2004,'2024-09-29', 1500);
insert into Inventario values (2005,'2024-05-16', 700);

Select * from Tipo_Movimiento;

insert into Tipo_Movimiento values (401, 'Efectivo', 2001);
insert into Tipo_Movimiento values (402, 'Nequi', 2002);
insert into Tipo_Movimiento values (403, 'Bancolombia', 2003);
insert into Tipo_Movimiento values (404, 'Daviplata', 2005);
insert into Tipo_Movimiento values (405, 'efectivo', 2004);
insert into Tipo_Movimiento values (406, 'Nequi', 2001);
insert into Tipo_Movimiento values (407, 'Bancolombia', 2002);
insert into Tipo_Movimiento values (408, 'Daviplata', 2003);
insert into Tipo_Movimiento values (409, 'Efectivo', 2004);
insert into Tipo_Movimiento values (410, 'Nequi', 2005);
insert into Tipo_Movimiento values (411, 'Nequi', 2002);
insert into Tipo_Movimiento values (412, 'Nequi', 2001);

Select * from Factura ;

insert into Factura values (500, '2024-01-12', 100.000, 14.000, 2001);
insert into Factura values (501, '2024-02-25', 150.000, 21.000, 2002);
insert into Factura values (502, '2024-03-18', 200.000, 28.000, 2003);
insert into Factura values (503, '2024-04-22', 250.000, 35.000, 2004);
insert into Factura values (504, '2024-05-30', 300.000, 42.000, 2005);
insert into Factura values (505, '2024-06-05', 180.000, 25200, 2001);
insert into Factura values (506, '2024-07-14', 120.000, 16800, 2002);
insert into Factura values (507, '2024-08-19', 210.000, 29400, 2003);
insert into Factura values (508, '2024-09-09', 90.000, 12600, 2004);
insert into Factura values (509, '2024-10-28', 160.000, 22400, 2005);
insert into Factura values (510, '2024-11-11', 220.000, 30800, 2003);
insert into Factura values (511, '2024-12-03', 30.000, 4200, 2002);
insert into Factura values (512, '2024-12-18', 20.000, 2800, 2004);

select * from Venta;
insert into Venta Values (3000, 'Nuevo', '2024-03-14', 501, 1002);  
insert into Venta Values (3001, 'Nuevo', '2024-05-07', 509, 1008);   
insert into Venta Values (3002, 'Nuevo', '2024-08-21', 505, 1014);   
insert into Venta Values (3003, 'Nuevo', '2024-06-19', 512, 1003);  
insert into Venta Values (3004, 'Nuevo', '2024-11-10', 500, 1011);  
insert into Venta Values (3005, 'Nuevo', '2024-01-25', 510, 1006); 
insert into Venta Values (3006, 'Nuevo', '2024-10-13', 507, 1009);   
insert into Venta Values (3007, 'Nuevo', '2024-07-05', 503, 1016);    
insert into Venta Values (3008, 'Nuevo', '2024-12-02', 502, 1010);   
insert into Venta Values (3009, 'Nuevo', '2024-02-18', 508, 1005);   
insert into Venta Values (3010, 'Nuevo', '2024-04-29', 506, 1007);   
insert into Venta Values (3011, 'Nuevo', '2024-09-17', 511, 1013);   
insert into Venta Values (3012, 'Nuevo', '2024-03-30', 504, 1015);  
insert into Venta Values (3013, 'Nuevo', '2024-08-04', 500, 1001);   
insert into Venta Values (3014, 'Nuevo', '2024-06-10', 507, 1012);   
insert into Venta Values (3015, 'Nuevo', '2024-12-25', 510, 1004);   
insert into Venta Values (3016, 'Nuevo', '2024-07-18', 501, 1006);  
insert into Venta Values (3017, 'Nuevo', '2024-11-29', 509, 1016);   
insert into Venta Values (3018, 'Nuevo', '2024-05-14', 503, 1009);   
insert into Venta Values (3019, 'Nuevo', '2024-10-08', 511, 1006);  

select * from producto;

insert into producto values (1001,'Nuevo', 1000 , 'Crema', 102, 01,2001, 3003, 4001);  
insert into producto values (1002, 'Nuevo',  400, 'Crema', 103, 01, 2002,3004, 4003);  
insert into producto values (1003,'Nuevo',  300 , 'Crema', 101, 01,2003, 3001, 4002);  
insert into producto values (1004,'Nuevo',  500 ,'Crema', 103, 01, 2004,3012, 4002);  
insert into producto values (1005,'Nuevo',  1500 ,'Crema', 102, 01, 2005,3015, 4001);  
insert into producto values (1006,'Nuevo',  600 ,'Crema', 103, 01,2001, 3013, 4003);  
insert into producto values (1008,'Nuevo',  200 ,'Crema', 103, 01, 2002,3011, 4003);  
insert into producto values (1009,'Nuevo',  550 ,'Crema', 102, 01, 2003,3007, 4002);  
insert into producto values (1010,'Nuevo',  450 , 'Crema', 103, 01, 2004,3006, 4001);

