/**
 * Created by wolfmanzeroua on 06.07.2015.
 */
var request = require('request');
var request2 = require('request');

var request = request.defaults({jar: true});
var request2 = request2.defaults({jar: true});
var async = require('async');

if (request === request2 ) console.log('__________________________');

var USERS = {
    ADMIN_DEFAULT: {
        login: 'defaultAdmin',
        pass: 'defaultAdmin'
    },
    CLIENT: {
        login: 'client777',
        pass: 'pass1234',
        userType: 'client'
    }
};

var res = {
    body:
    {
        url:'http://localhost:7791/'
    }
};
var SERVICE_ANIMAL_MARKET = {
    serviceProvider: 'LION MARKET',
    serviceName: 'Lion, tiger, leopard and other animal  MARKET',
    serviceType: 'animals',
    baseUrl: 'http://www.animalToHome24.net/',
    profile: {
        description : 'BIG Fast animal market with fasted curiers'},

    forUserType: ['client'],
    inputItems: [{
        order: 11,
        name: 'eeee',
        inputType: 'IMG',
        placeHolder: 'base64 sdasd sfdsd fkjjbkzbhkzashe2kj421u34hejrb lkj32  ',
        options: []
    },
        {
            order: 12,
            name: 'BUY LION',
            type: 'Button',
            placeHolder: '',
            options: [{onClick: '/sdadsadsa sadasdas'}]
        }
    ],
    method: 'POST',
    url: 'http://www.animalToHome24.net/speedtest/',
    params: [{onClick: '/sdadsadsa sadasdas'}]
};

var url = res.body.url;
var tasks =[];
tasks.push(getServices(), AdminLogIn(), AddService(),getCookiesRequest(), userLogIn(), AddService());
async.series(tasks, function (err,results)   {
    if (err) {
        console.log(err)
    }
});

///ANYBODY GET SERVICES LIST
function getServices(){
    return function (callback)
    {
        var serviceUrl = res.body.url + 'service';

        request(serviceUrl, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                console.log(body); // Show the HTML for the Google homepage.
                return callback()
            }
            return callback(err)
        });
    }
}


///ADMIN LOGIN

function AdminLogIn(){
    return function (callback)
    {
        var loginData = USERS.ADMIN_DEFAULT;
        var   serviceUrl = res.body.url + 'user/signIn';
        var url = res.body.url;

        request.post(serviceUrl, {json: true, body: loginData }, function (err, res, body) {
            if (!err && res.statusCode == 200) {
                console.log(res.body);
                return callback()
            }
            return callback(err)
        });
    }
}

///ADMIN ADD SERVICE

function AddService(){
    return function (callback)
    {
        var data = SERVICE_ANIMAL_MARKET;
        var serviceUrl = url + 'adminService/';

        request.post(serviceUrl, {json: true, body: data }, function (err, res, body) {

            if (!err && res.statusCode == 201) {
                console.log(res.body);
                return  callback(null,res.body)
            }
            return callback(err + body)
        });
    }
}

function getCookiesRequest(){
    return function (callback)
    {
        var data = SERVICE_ANIMAL_MARKET;
        var serviceUrl = url + 'adminService/';

        var j = request.jar();
        request(serviceUrl, {jar: j}, function (err, res, body) {

            var cookie_string = j.getCookieString(serviceUrl); // "key1=value1; key2=value2; ..."
            var cookies = j.getCookies(serviceUrl);
            console.log('Cookies ADMIN  REQUEST:',cookies );

            if (!err) {
                // console.log(res.body);
                return  callback(null,cookies)
            }
            return callback()
        });
    }
}

///USER LOGIN
function userLogIn(){
    return function (callback)
    {

        var loginData = USERS.CLIENT;
        serviceUrl = res.body.url + 'user/signIn';
        var url = res.body.url;

        request2.post(serviceUrl, {json: true, body: loginData }, function (err, res, body) {
            //request.post(serviceUrl, {'content-type': 'application/json', body:JSON.stringify(loginData)}, function (error, response, body) {
            if (!err && res.statusCode == 200) {
                console.log('User LogIn:',body);// Show the HTML for the Google homepage.


                    //var data = SERVICE_ANIMAL_MARKET;
                    //var serviceUrl = url + 'adminService/';
                    //
                    //request.post(serviceUrl, {json: true, body: data }, function (err, res, body) {
                    //
                    //    if (!err && res.statusCode == 201) {
                    //        console.log(res.body);
                    //        return  callback(null,res.body)
                    //    }
                    //    return callback(err + body)
                    //});
                return  callback(null,res.body)

            }
            return callback(err)
        });
    }
}

function getCookiesRequest2(){
    return function (callback)
    {

        var serviceUrl = url + 'adminService/';

        var j = request2.jar();
        request2(serviceUrl, {jar: j}, function (err, res, body) {

            var cookie_string = j.getCookieString(serviceUrl); // "key1=value1; key2=value2; ..."
            var cookies = j.getCookies(serviceUrl);
            console.log('Cookies User REQUEST:', cookies );

            if (!err) {
                // console.log(res.body);
                return  callback(null, cookies)
            }
            return callback()
        });
    }
}

