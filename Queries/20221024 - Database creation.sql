/*
    Author: Arthur Coutinho
    Description: Database creation in PostgreSQL
*/

CREATE DATABASE "PIM_Seguro"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE "PIM_Seguro"
    IS 'Database created for pim';