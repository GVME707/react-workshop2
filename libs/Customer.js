var data = [
    { customer_id: 1, title: "Mr.", first_name: "Alan", last_name: "Henson", gender: "M" },
    { customer_id: 2, title: "Ms.", first_name: "Linda", last_name: "Travor", gender: "F" },
    { customer_id: 3, title: "Mrs.", first_name: "Elizabeth", last_name: "Benzer", gender: "F" }
];

module.exports = {
    getAll: () => {
        return data;
    },

    getById: (customerId) => {
        function getElem(customerId) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i];

                if (item.customer_id == customerId) {
                    return item;
                }
            }

            return null;
        }

        return getElem(customerId);
    },

    createCustomer: (customerId, title, firstName, lastName, gender) => {
        data.push({
            customer_id: customerId, 
            title: title, 
            first_name: firstName, 
            last_name: lastName, 
            gender: gender
        });

        return data;
    },

    updateCustomer: (customerId, title, firstName, lastName, gender) => {
        function getElem(customerId) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i];

                if (item.customer_id == customerId) {
                    return item;
                }
            }

            return null;
        }

        var item = getElem(customerId);

        if (item != null) {
            item.customer_id = customerId;
            item.title = title;
            item.first_name = firstName;
            item.last_name = lastName;
            item.gender = gender;
        }

        return data;
    },

    deleteCustomer: (customerId) => {
        function getIndex(customerId) {
            for (var i = 0; i < data.length; i++) {
                var item = data[i];

                if (item.customer_id == customerId) {
                    return i;
                }
            }

            return -1;
        }

        var id = getIndex(customerId);

        console.log(id);

        if (id != -1) {
            data.splice(id, 1);
        }

        return data;
    }
}