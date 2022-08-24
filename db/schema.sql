DROP DATABASE IF EXISTS fitness_db;
CREATE DATABASE fitness_db;

USE fitness_db;

CREATE TABLE workout (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    w_name VARCHAR (30)
);

CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) NOT NULL, 
    current_weight INT NOT NULL, 
    goal_weight INT NOT NULL, 
    target_calories INT NOT NULL, 
    workout_id INT,
    CONSTRAINT fk_workout FOREIGN KEY (workout_id) REFERENCES workout(id) ON DELETE SET NULL
);