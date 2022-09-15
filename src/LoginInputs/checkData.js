export const checkPassword = (data, email, password) => {
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === email) {
            if (data[i].password === password) {
                return true
            }
        }
    }
    alert("Invalid Data")
    return false
}

