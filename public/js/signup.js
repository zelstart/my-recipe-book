const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && password) {
        try {
            const response = await fetch('/api/users/signup', {
                method: 'POST',
                body: JSON.stringify({ name, password }),
                headers: { 'Content-Type': 'application/json' },
            });
  
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to sign up');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
  };
  
  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);
  