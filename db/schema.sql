DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;

USE fitness_db;

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL, 
    current_weight INT NOT NULL, 
    goal_weight INT NOT NULL, 
    target_calories INT NOT NULL, 
    workouts VARCHAR(30) NOT NULL,
    
),