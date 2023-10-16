# My Recipe Book

## Description
An application that can be used to store your favorite recipes. Users can add their own recipes to easily store their favorites. Users can sign up and login to save their information so it’s all in one convenient spot. This application was created so that there is a new convenient way to share and store recipies. This will also help with indecisiveness when choosing a meal.

## Installation
In the .env.example file, fill in DB_USER spot with 'root' and the DB_PASSWORD with your mysql password in quotations
and then delete .example so the file is named .env

In your terminal run the command, npm install

Then in the command line run, mysql -u root -p , and input your password

Next, in the msql shell run the command, source db/schema.sql; 

From there, open a new terminal and input the command npm run seed

## Usage
When you open the application you will be brought to login, if you are not already signed up there is a sign up button on the most right part of the nav bar.
![Login page](public/assets/Screen%20Shot%202023-10-15%20at%208.45.40%20PM.png)

Once you are logged in you will be brought to the homepage where it will show your favorite recipes and recipes that you might like. In the nav bar there will be several paths for you to use. You can get back to this page by clicking 'Home' in the nav bar.
![Homepage](public/assets/Screen%20Shot%202023-10-15%20at%208.50.50%20PM.png)

When you click on 'My Recipes' in the nav bar, you will be brought to a page that displays your account information, your recipes that you have inputted, and your comments on other recipes.
![My Recipes Page](public/assets/Screen%20Shot%202023-10-15%20at%208.51.46%20PM.png)

Through the 'New Recipe' path you will be able to input the name, ingredients, instructions, and a picture of your recipe. Once all the information is filled out click the 'submitt' button.
![New Recipe Page](public/assets/Screen%20Shot%202023-10-15%20at%208.54.58%20PM.png)

The 'Browse' path will bring you to the page where you can find new recipes.

To logout click on the 'Logout' button on the right most part of the nav bar.

## Credits
Collaborators:
Zel Star (https://github.com/zelstart)
Trevor Blanchard (https://github.com/blanchardt)
Chris Sullivan (https://github.commy/chris-sully)

Unsplash- uesed for the pictures of food (https://unsplash.com/)

Vecteezy- used for background piacture (https://www.vecteezy.com/)

Multer- used for file uploads (https://www.npmjs.com/package/multer)

Youtube- used for extra multer comprehension (https://www.youtube.com/watch?v=EVOFt8Its6I)

UNH Bootcamp- used for README (https://bootcampspot.instructure.com/courses/3906/pages/3-dot-5-3-create-a-professional-project-readme?module_item_id=885925)

## Mockup
![Application Mockup](public/assets/image.png)

## User Story
 AS A... person who cooks food,
 I WANT... to be able to share and store recipies conveniently,
 SO THAT... I am able to find new recipies and keep and store my favorites all in one spot.

## Breakdown of Tasks
Zel- HTML, CSS, Models
Trevor- Multer and Javascript
Chris- Controller and Api routes and README

## License
MIT License

Copyright (c) 2023 Zel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.