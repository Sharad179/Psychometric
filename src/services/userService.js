import config from 'config';

export const userService = {
    login,
    logout
};

function login(username, password) {

    return fetch('/api/authenticate?', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "username": username, "password": password })
    }).then(function (handleResponse) {
        return handleResponse.json()
    }).then(function (user) {
        if (user.token) {
            if (user.status == "Inactive") {
                alert("User is inactive");
            }
            else {
                localStorage.setItem('user', JSON.stringify(user));
            }
        }
        else {
            alert("Invalid Username or Password");
        }
        return user;
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}