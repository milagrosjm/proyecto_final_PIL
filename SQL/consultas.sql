--¿ Cuantos empleados tenemos registrados?
SELECT count(*) as cantidad_empleados 
FROM employees;

--¿ Cuantos empleados hay en cada oficina ?
SELECT e.officeCode as oficina, count(*) as cantidad_empleados 
FROM employees e 
GROUP BY e.officeCode;

--¿ Cuantos productos tenemos por linea ?
SELECT p.productLine as linea, COUNT(*) as cantidad_productos 
FROM products p 
GROUP BY p.productLine;

--Listar los productos de la linea PLANES 
SELECT p.productCode as codigo, p.productName as nombre_producto 
FROM products p 
WHERE p.productLine LIKE "Planes";

--Listar solo los productos que vienen con logos oficiales
SELECT p.productCode as codigo, p.productName as nombre_producto 
FROM products p 
WHERE p.productDescription LIKE "%official logo%";

--¿ Todos los clientes son del mismo pais ? Que paises?
SELECT c.customerName as nombre_cliente, c.country as pais 
FROM customers c;

--¿ Cual fue el ultimo pago que se registro ?
SELECT MAX(p.paymentDate) as utlimo_pago 
FROM payments p;

SELECT pa.paymentDate as fecha_pago, pa.customerNumber as numero_cliente, c.customerName nombre_cliente 
FROM payments pa, customers c 
WHERE c.customerNumber=pa.customerNumber AND pa.paymentDate=(SELECT MAX(p.paymentDate) FROM payments p);

--¿ Cual fue el pago mas chico ?
SELECT MIN(p.amount) as monto 
FROM payments p;

SELECT pa.amount as monto, pa.customerNumber as numero_cliente, c.customerName nombre_cliente 
FROM payments pa, customers c 
WHERE c.customerNumber=pa.customerNumber AND pa.amount=(SELECT MIN(p.amount) FROM payments p);

--Listar los clientes que no tienen pagos
SELECT c.customerNumber as numero_cliente, c.customerName as nombre_cliente 
FROM customers c 
WHERE c.customerNumber NOT IN (SELECT p.customerNumber FROM payments p);

--¿ Cuanto se recaudo en los ultimos 6 meses ?
SELECT SUM(p.amount) as recaudado 
FROM payments p 
WHERE p.paymentDate BETWEEN CURRENT_DATE() AND DATE_ADD(CURRENT_DATE(), INTERVAL 6 MONTH);

--¿ Cual es el producto mas vendido ?
SELECT o.productCode as codigo_producto, p.productName as nombre_producto, COUNT(*) as cantidad 
FROM orderdetails o, products p 
WHERE p.productCode=o.productCode 
GROUP BY o.productCode 
ORDER BY cantidad DESC;

--¿ Cual les son los 10 mejores clientes ?

--¿ Cada cuanto tiempo regresa un cliente ?

--¿ Cuantos clientes no tienen registrado su telefono ? ¿ Quienes son ?
SELECT COUNT(*) as sin_telefono_registrado 
FROM customers c 
WHERE c.phone is null;

SELECT c.customerNumber as numero_cliente, c.customerName as nombre_cliente 
FROM customers c 
WHERE c.phone is null;

--¿ Listar los productos mas vendidos en el ultimo mes registrado y su precio ?
SELECT pr.productCode as codigo_producto, pr.productName as nombre_producto, pr.buyPrice as precio
FROM products pr, orders o, orderdetails od
WHERE od.orderNumber = o.orderNumber AND od.productCode = pr.productCode AND (o.orderDate BETWEEN DATE_ADD((SELECT MAX(rd.orderdate) FROM orders rd), INTERVAL -1 MONTH) AND (SELECT MAX(ord.orderdate) FROM orders ord))

--¿ Quien es el jefe de cada departamento ?
SELECT e.officeCode as oficina, e.firstName as nombre, e.firstName as apellido 
FROM employees e 
WHERE e.jobTitle LIKE "%manager%";

--¿ Cual es el empleado que mas vende?