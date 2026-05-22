
CREATE TABLE employee (
    -- NOT NULL: Ensures an ID must be provided (cannot be empty)
    emp_id INT NOT NULL,

    -- UNIQUE: Ensures no two employees can share the same email address
    email VARCHAR(50) UNIQUE,

    -- DEFAULT: Automatically assigns 25000 if no salary is specified
    salary INT DEFAULT 25000,

    -- Columns needed for the multi-column CHECK constraint below
    age INT,
    city VARCHAR(30),

    -- CHECK: Limits data entries based on a custom logical rule
    CONSTRAINT age_check CHECK (age >= 18 AND city = "Delhi")
);



----------------------------------------------------------------------------------------------------

-- PRIMARY KEY: Makes a column unique & not null (used as a main unique identifier for a table)
CREATE TABLE temp (
    id int not null,
    PRIMARY KEY (id)
);

-- FOREIGN KEY: Connects this table to another table to prevent actions that would destroy links between them
CREATE TABLE temp (
    cust_id int,
    FOREIGN KEY (cust_id) references customer(id)
);