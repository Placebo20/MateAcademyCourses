SELECT MIN(calories) AS calories
FROM dish;

SELECT MIN(number_of_pages) AS number_of_pages
FROM book;

SELECT MIN(date_of_hiring) as hiring_date
FROM staff;

SELECT MAX(birth_date) AS birth_date
FROM staff
WHERE date_of_dismissal IS NOT NULL;

SELECT MAX(salary) AS max_salary
FROM staff
WHERE date_of_dismissal IS NULL AND position = 'teacher';

SELECT MAX(last_name) AS last_name
FROM pupil
WHERE city != 'Kyiv';

SELECT AVG(calories) AS calories
FROM dish
WHERE price >= 100;

SELECT AVG(weight) AS average_weight
FROM dish
WHERE calories < 300;

SELECT AVG(salary) AS average_salary
FROM staff
WHERE date_of_hiring > '2015-01-01';

SELECT SUM(price) AS total_price
FROM dish
WHERE name LIKE 'C%';

SELECT SUM(number_of_pages) AS total_number_of_pages
FROM book
WHERE publish_year > 2012;

SELECT COUNT(*) AS number_of_pupils
FROM pupil
WHERE city = 'Kyiv';

SELECT COUNT(*) AS non_working_staff
FROM staff
WHERE date_of_dismissal IS NOT NULL;

SELECT COUNT(*) AS number_of_books
FROM book
WHERE publish_year BETWEEN 2012 AND 2017;

SELECT COUNT(*) AS number_of_pupils
FROM pupil
WHERE father_phone IS NOT NULL;

SELECT COUNT(*) AS number_of_staff
FROM staff
WHERE salary >= 9000 AND position = 'teacher' AND date_of_dismissal IS NULL;

SELECT COUNT(*) AS number_of_subjects
FROM subject
WHERE name LIKE 'E%';