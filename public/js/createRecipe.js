const newRecipeFormHandler = async (event) => {
  event.preventDefault();

  //in order to send the form data for the multer.js addition.
  const form = document.getElementById('create-recipe');
  const formData = await new FormData(form);
  
  //get the user input from the title and content field sections.
  const title = document.querySelector('#recipeName').value.trim();
  const ingredients = document.querySelector('#ingredients').value.trim();
  const instructions = document.querySelector('#instructions').value.trim();
  const image = document.querySelector('#recipe-image').value.trim();

  //check if the fields are null.
  if (title && ingredients && instructions && image) {
    //create a post request to create a new blog.
    const response = await fetch('/api/recipes', {
      method: 'POST',
      body: formData,
    });

    console.log(response.id);

    if (response.ok) {
      const data = await response.json();
      document.location.replace(`recipes/${data.id}`);
    } else {
      alert('Failed to create recipe');
    }
  }
};

document
  .querySelector('.create-recipe')
  .addEventListener('submit', newRecipeFormHandler);

