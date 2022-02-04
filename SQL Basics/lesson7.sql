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