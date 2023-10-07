const newRecipeFormHandler = async (event) => {
  event.preventDefault();

  //get the user input from the title and content field sections.
  const title = document.querySelector('#recipeName').value.trim();
  const ingredients = document.querySelector('#ingredients').value.trim();
  const instructions = document.querySelector('#instructions').value.trim();
  const image = document.querySelector('#image').value.trim();

  //check if the fields are null.
  if (title && ingredients && instructions && image) {
    //create a post request to create a new blog.
    const response = await fetch(`/api/recipes`, {
      method: 'POST',
      body: JSON.stringify({ 
        title: title, 
        ingredients: ingredients,
        instructions: instructions,
        image: image 
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create recipe');
    }
  }
};

document
  .querySelector('.create-recipe')
  .addEventListener('submit', newRecipeFormHandler);

