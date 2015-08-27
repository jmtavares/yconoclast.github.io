"use strict";

//Import this scripts into the worker namespace, it won't to added to the window object
importScripts('http.js', 'friends.service.js');

var friendsService = new FriendsService();

onmessage = function (e) {
    switch (e.data.action) {
        case 'getFriends':
            friendsService.requestListFriends().
                then(function (data) {
                    postMessage({
                        action: 'getFriends',
                        status: 'success',
                        results: data
                    });
                }).
                catch(function (error) {
                    postMessage({
                        action: 'getFriends',
                        status: 'error',
                        results: error
                    });
                });
            break;
    }
};
