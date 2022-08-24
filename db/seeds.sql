USE fitness_db;


INSERT INTO workout (w_name)
VALUES ("Upper body"),
       ("Lower body"),
       ("Push"),
       ("Pull");


INSERT INTO user (username, current_weight, goal_weight, target_calories, workout_id)
VALUES ("Dave", 190, 180, 2000, 001),
       ("Greg", 240, 200, 1000, 002),
       ("Jessie", 140, 165, 2500, 002),
       ("Rachel", 190, 175, 1500, 003),
       ("Barb", 130, 120, 1000, 003),
       ("Louise", 160, 150, 2000, 002);
