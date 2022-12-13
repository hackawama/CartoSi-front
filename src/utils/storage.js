export const StoreToken = (authToken) => {
    localStorage.setItem("cartoToken", authToken);
    console.log("token stored");
};
export const getToken = () => {
    return localStorage.getItem("cartoToken");
};
export const removeToken = () => {
    localStorage.removeItem("cartoToken");

};