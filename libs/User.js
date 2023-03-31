let data = [
    { username: "test1", password: "1111", first_name: "Emma", last_name: "Watson" },
    { username: "test2", password: "2222", first_name: "John", last_name: "Wick" }
];

module.exports = {
    login: (username, password) => {
        for (var i = 0; i < data.length; i++) {
            var item = data[i];

            if (username == item.username && password == item.password) {
                return item;
            }

            return null;
        }
    }
};