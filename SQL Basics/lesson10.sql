SELECT position, AVG(salary) AS average_salary 
FROM staff
WHERE date_of_dismissal IS NULL
GROUP BY position
HAVING average_salary > 10000;

SELECT category.name AS category_name, COUNT(product.id) AS number_of_products
FROM product
INNER JOIN category
ON product.category_id = category.id
GROUP BY category_name
HAVING number_of_products >= 4;

SELECT EXTRACT(MONTH FROM hiring_date) AS month, COUNT(*) AS number_of_employees
FROM employee
GROUP BY month
HAVING number_of_employees >= 3

SELECT category.name AS category_name, SUM(amount) AS total_amount
FROM product
INNER JOIN category
ON product.category_id = category.id
GROUP BY category_name
HAVING total_amount > 80;

SELECT subject, AVG(mark) AS average_mark
FROM scoreboard
INNER JOIN pupil
ON scoreboard.pupil_id = pupil.id
WHERE first_name = 'Eugen' AND last_name = 'Tsven'
GROUP BY subject
HAVING average_mark >= 10;

SELECT category.name AS category_name, MAX(price) AS max_price
FROM product
INNER JOIN category
ON product.category_id = category.id
GROUP BY category_name
HAVING COUNT(product.id) >= 3
ORDER BY max_price;

SELECT department.name AS department_name, SUM(salary) AS amount_of_money
FROM employee
INNER JOIN department
ON employee.department_id = department.id
GROUP BY department_name
HAVING COUNT(employee.id) > 3
ORDER BY amount_of_money DESC;