document.getElementById('login-button').addEventListener('click', function () {
    const userNameId = document.getElementById('user-email')
    const userNane = userNameId.value;
    const userpassword = document.getElementById('login-password')
    const loginPassword = userpassword.value;
    if (userNane == 'joy@gmail.com' && loginPassword == '11111') {
        window.location.href = 'profile.html';
    }
})
