module.exports = function UserService() {
    let users = [];
    const getAllUsers = () => {
        return users;
    };

    const getUserById = userId => {
        return users.find(user => user.id === userId);
    };

    const addUser = user => {
        users = [user, ...users];
    };

    function removeUser(userId) {
        users = users.filter(user => user.id !== userId);
    }

    return {
        getAllUsers,
        addUser,
        getUserById,
        removeUser
    };
};
// function userService(){
//     return {
//         getAllUsers() {
//             return [];
//         }
//     }
// }
// module.exports = function userService() {
//     let users = [];
//     return {
//         getAllUsers() {
//             return users;
//         }
//     }
// };
