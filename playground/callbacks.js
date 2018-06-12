var getUser = (id, callback) => {
    var user = {
        id: id,
        name: "Zuka"
    };
    setTimeout(() => {
        callback(user);
    }, 1200);
};

getUser(31, (userObj) => {
    console.log(userObj);
});