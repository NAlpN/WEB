// scripts.js

const signInButton = document.getElementById('signInButton');
const signUpButton = document.getElementById('signUpButton');

signInButton.addEventListener('click', () => {
  window.location.href = 'giris.html';
});

signUpButton.addEventListener('click', () => {
  window.location.href = 'kayit.html';
});

function girisYap(email, password) {
  fetch('users.txt')
    .then(response => response.text())
    .then(data => {
      const users = data.split('\n');
      const userFound = users.find(user => {
        const [savedEmail, savedPassword] = user.split(',');
        return savedEmail === email && savedPassword === password;
      });
      if (userFound) {
        alert('Giriş başarılı!');
        // Giriş başarılı olduğunda yapılacak işlemler buraya gelebilir.
      } else {
        alert('Hatalı e-posta veya şifre!');
      }
    })
    .catch(error => console.error('Hata:', error));
}
