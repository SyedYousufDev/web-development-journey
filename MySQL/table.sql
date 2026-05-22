
CREATE TABLE table_name(
    column_name_1 datatype constraint,
    column_name_2 datatype constraint,
    column_name_3 datatype constraint
);

INSERT INTO table_name
VALUES
  (value_column_1,value_column_2,value_column_3),
   (value_column_1,value_column_2,value_column_3);



-------------------------------------------------------------------------------------------
CREATE TABLE student (
    rollno INT,
    name VARCHAR(30),
    age INT
);

INSERT INTO student
VALUES
(101, "adam", 12),
(102, "bob", 14);


-- Example: Add a new column named 'email' to the student table
ALTER TABLE student ADD email VARCHAR(50);


-- Example: Change Adam's age from 12 to 13
UPDATE student 
SET age = 13 
WHERE rollno = 101;

-- Example: Remove Bob from the table using his roll number
DELETE FROM student 
WHERE rollno = 102;

-- Example: Delete all students at once (the table grid remains)
TRUNCATE TABLE student;

-------------------------------------------------------------------------------------------

-- CREATE TABLE builds a structured grid with defined columns, data types, and rules to act as a blueprint for your data.

-- INSERT INTO ... VALUES injects actual rows of data into that grid, matching the order and type of the defined columns.