
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