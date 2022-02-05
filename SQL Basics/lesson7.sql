SELECT city, COUNT(*) AS number_of_pupils
FROM pupil
GROUP BY city;

SELECT sex, COUNT(*) AS number_of_staff
FROM staff
WHERE date_of_dismissal IS NULL
GROUP BY sex;

SELECT first_name, COUNT(*) AS number_of_pupils
FROM pupil
GROUP BY first_name
ORDER BY first_name;

SELECT position, MAX(salary) AS max_salary
FROM staff
GROUP BY position;

SELECT publish_year AS year, SUM(number_of_pages) AS number_of_pages
FROM book
WHERE publish_year BETWEEN 2011 AND 2015
GROUP BY publish_year
ORDER BY publish_year DESC;

SELECT subject, AVG(mark) AS average_mark
FROM scoreboard
INNER JOIN pupil
ON scoreboard.pupil_id = pupil.id
WHERE first_name = 'Anna' AND last_name = 'Ivaniuk'
GROUP BY subject
ORDER BY AVG(mark) DESC;

SELECT name AS department_name, AVG(salary) AS average_salary, COUNT(employee.*) AS number_of_employees
FROM employee
INNER JOIN department
ON employee.department_id = department.id
GROUP BY department_name;

SELECT first_name, last_name, AVG(mark) AS average_mark
FROM scoreboard
INNER JOIN pupil
ON scoreboard.pupil_id = pupil.id
GROUP BY first_name, last_name
ORDER BY pupil.id;

SELECT subject, year, AVG(mark) AS average_mark
FROM scoreboard
INNER JOIN pupil
ON scoreboard.pupil_id = pupil.id
WHERE birth_date > '2005-01-01'
GROUP BY subject, year
ORDER BY subject, year DESC;

SELECT name AS department_name, first_name, last_name
FROM employee
RIGHT JOIN department
ON employee.department_id = department.id;

SELECT name AS department_name, first_name, last_name
FROM employee
LEFT JOIN department
ON employee.department_id = department.id;