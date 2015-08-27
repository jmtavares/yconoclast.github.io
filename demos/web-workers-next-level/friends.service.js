'use strict';

function FriendsService() {
    this.requestListFriends = function () {
        return new Promise(function (resolve, reject) {
            http('/demos/web-workers-next-level/friendsList.json')
                .get()
                .then(function (data) {
                    //Do all logic here
                    resolve(JSON.parse(data));
                    return data;
                })
                .catch(function (error) {
                    //Do all logic here
                    reject(error);
                });
        });
    };
}
