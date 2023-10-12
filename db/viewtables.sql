SELECT * FROM users;
SELECT * FROM tags;
SELECT * FROM comments;
SELECT id, title, LEFT(ingredients, 50) AS short_ingredients, LEFT(instructions, 50) AS short_instructions, image, user_id FROM recipes;
