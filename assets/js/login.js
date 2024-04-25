function showSignUp() {
    document.querySelector('.login-container').style.transform = 'translateX(-100%)';
    setInterval(() => {
        document.querySelector('.signup-container').style.display= 'block';
       

    }, 200); fadeIn(document.querySelector('.signup-container'));
    setTimeout(function() {
      document.querySelector('.signup-container').style.transform = 'translateX(0)';
  }, 210);

  }
  
  function showLogin() {
    document.querySelector('.login-container').style.transform = 'translateX(0)';
    document.querySelector('.signup-container').style.transform = 'translateX(100%)';
  }
  function fadeIn(element) {
    var opacity = 0;
    var intervalId = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.1; // Increase opacity gradually
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalId); // Stop the interval once opacity reaches 1
        }
    }, 100); // Adjust the interval duration as needed
}