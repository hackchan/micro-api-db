CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name VARCHAR(80) NOT NULL CHECK(name <> ''),
  avatar VARCHAR(80) NOT NULL CHECK(avatar <> ''),
  email VARCHAR(80) NOT NULL CHECK(email <> ''),
  password VARCHAR(80) NOT NULL CHECK(password <> ''),
);

CREATE TABLE satelital(
  id_sate INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  nombre VARCHAR(50) NOT NULL CHECK(nombre <> '')
);
INSERT INTO satelital(nombre) values('SATELITAL ORIENTE');

CREATE TABLE departamentos(
  id_depart INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  nombre VARCHAR(50) NOT NULL CHECK(nombre <> ''),
  id_sate INTEGER REFERENCES satelital(id_sate),
  longitud NUMERIC,
  latitud NUMERIC

);
INSERT INTO departamento(nombre,id_sate,longitud,latitud) values('Boyacá',1,5.53528	,-73.36778);

CREATE TABLE ENTIDAD(
  id_entidad INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  nombre VARCHAR(50) NOT NULL CHECK(nombre <> ''),
  id_depart INTEGER REFERENCES departamento(id_depart),
  db VARCHAR(80) NOT NULL,
  userFtp VARCHAR(80) NOT NULL,
  claveFtp VARCHAR(80),
  longitud NUMERIC,
  latitud NUMERIC
);
INSERT INTO ENTIDAD(nombre,id_depart,db,userFtp,claveFtp ) VALUES('Alcaldía Municipal de Tunja',1,'GPIF_ORIENTE_Mpio_TunjaBoy','AlcMayorTunja','admin123');

CREATE TABLE REPORTE (
   id_report INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
   nombre VARCHAR(50) NOT NULL CHECK(nombre <> ''),
   diccionary VARCHAR(50) NOT NULL CHECK(diccionary <> '')
);

INSERT INTO reporte(nombre,diccionary)
VALUES
('Ejecución presupuestal de ingresos','ejecucionIngreso'),
('Relación de ingresos','relacionIngreso'),
('Ejecución presupuestal de gastos','ejecucionGastos'),
('Relación de CDPS','relacioncdps'),
('Relación de compromisos','relacioncompromiso'),
('Relación de obligaciones','relacionObligaciones'),
('Relación de pagos','relacionPagos'),
('Auxiliar con saldos','auxliarSaldos'),
('Libro mayor y balance','libroMayor'),
('Estado de situacion financiera','estadoFinanciero'),
('Programas y Proyectos','programasProyectos'),
('Contratación','contratacion'),
('Matriz seguimiento obras de infraestructura','obras');


CREATE TABLE VIGENCIA (
   id_vigencia INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
   nombre VARCHAR(50) NOT NULL CHECK(nombre <> ''),
);

INSERT INTO VIGENCIA(nombre) VALUES('2018'),('2019'),('2020'),('2021');

CREATE TABLE DISPUESTO(
  id_disc INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  id_entidad INTEGER REFERENCES ENTIDAD(id_entidad),
  id_report INTEGER REFERENCES REPORTE(id_report),
  id_vigencia INTEGER REFERENCES VIGENCIA(id_vigencia),
  fecha_incial DATE,
  fecha_final DATE,
  freg DATE NOT NULL DEFAULT CURRENT_DATE,
  fecha DATE NOT NULL DEFAULT CURRENT_DATE,
  ruta VARCHAR(250) NOT NULL,
  peso VARCHAR(20) NOT NULL
);
INSERT INTO DISPUESTO (id_entidad,id_report,id_vigencia,fecha_incial,fecha_final,freg,fecha,ruta,peso)
VALUES(2,1,1,'2018-01-31','2018-12-31',current_date,current_date,'/mnt/plata/carpeta/ws_data/','1MB');
--ajpfzmxz2xzj9tu0n59p2oygt
--5klklxsj1afmzazodq8ydi2yu7talu77rwr2vy66ay1b3v5gmg