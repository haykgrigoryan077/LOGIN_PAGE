export const changeData = (data, email, newPass) => {
    const user = data.find((i) => i.email === email)
    if (!user) {
        alert("Invalid Email")
        return
    }
    user.password = newPass
    console.log(user);
}