firstSourceCode = function(){
    var bob = {
        serviceProvider: 'HoldGold',
        serviceName: 'GOLD SELL',
        serviceType: 'Payment',
        baseUrl: 'http://www.holdgold.net/',
        profile: {
            description : 'Gold 0.1-1 Kg, in Bankomat or by delivery by courier '
        },

        forUserType: [ 'CLIENT', 'COMPANY', 'GOVERNMENT'],
        inputItems: [{
            order: 11,
            name: 'eeee',
            inputType: 'IMG',
            placeHolder: 'base64 sdasd sfdsd fkjjbkzbhkzashe2kj421u34hejrb lkj32  ',
            options: []
        },
            {
                order: 12,
                name: 'Buy 1 Kg ',
                type: 'Button',
                placeHolder: '',
                options: [{onClick: '/buy'}]
            }
        ],
        method: 'POST',
        url: '/gold/',
        params: [{onClick: '/sdadsadsa sadasdas'}]
    };

    var bill = (JSON.parse(JSON.stringify(bob)));
};

secondSourceCode =  function(){
    var bob = {
        serviceProvider: 'HoldGold',
        serviceName: 'GOLD SELL',
        serviceType: 'Payment',
        baseUrl: 'http://www.holdgold.net/',
        profile: {
            description : 'Gold 0.1-1 Kg, in Bankomat or by delivery by courier '
        },

        forUserType: [ 'CLIENT', 'COMPANY', 'GOVERNMENT'],
        inputItems: [{
            order: 11,
            name: 'eeee',
            inputType: 'IMG',
            placeHolder: 'base64 sdasd sfdsd fkjjbkzbhkzashe2kj421u34hejrb lkj32  ',
            options: []
        },
            {
                order: 12,
                name: 'Buy 1 Kg ',
                type: 'Button',
                placeHolder: '',
                options: [{onClick: '/buy'}]
            }
        ],
        method: 'POST',
        url: '/gold/',
        params: [{onClick: '/sdadsadsa sadasdas'}]
    };

    var bill = cloneObject(bob);

    function cloneObject(obj) {
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }

        var temp = obj.constructor(); // give temp the original obj's constructor
        for (var key in obj) {
            temp[key] = cloneObject(obj[key]);
        }

        return temp;
    }


/* ---------------------------------------- results ---------------------------------------------

10000 'iteration firstSourceCode time:' 143
10000 'iteration secondSourceCode time:' 167
1000 'iteration firstSourceCode time:' 16
1000 'iteration secondSourceCode time:' 28
100 'iteration firstSourceCode time:' 3
100 'iteration secondSourceCode time:' 1

*/

// ==================================================================================================================================

firstSourceCode = function(){
    var bob = {
        serviceProvider: 'HoldGold',
        serviceName: 'GOLD SELL',
        serviceType: 'Payment',
        baseUrl: 'http://www.holdgold.net/',
        description : 'Gold 0.1-1 Kg, in Bankomat or by delivery by courier ',
        forUserType: [ 'CLIENT', 'COMPANY', 'GOVERNMENT'],
        order: 11,
        name: 'eeee',
        inputType: 'IMG',
        placeHolder: 'base64 sdasd sfdsd fkjjbkzbhkzashe2kj421u34hejrb lkj32  ',
        options: [],
        order1: 12,
        name1: 'Buy 1 Kg ',
        type1: 'Button',
        placeHolder1: '',
        options1: ['/buy'],
        method: 'POST',
        url: '/gold/',
        params: ['dadsadsa sadasdas']
    };

    var bill = (JSON.parse(JSON.stringify(bob)));
};

secondSourceCode =  function(){
    var bob = {
        serviceProvider: 'HoldGold',
        serviceName: 'GOLD SELL',
        serviceType: 'Payment',
        baseUrl: 'http://www.holdgold.net/',
        description : 'Gold 0.1-1 Kg, in Bankomat or by delivery by courier ',
        forUserType: [ 'CLIENT', 'COMPANY', 'GOVERNMENT'],
        order: 11,
        name: 'eeee',
        inputType: 'IMG',
        placeHolder: 'base64 sdasd sfdsd fkjjbkzbhkzashe2kj421u34hejrb lkj32  ',
        options: [],
        order1: 12,
        name1: 'Buy 1 Kg ',
        type1: 'Button',
        placeHolder1: '',
        options1: ['/buy'],
        method: 'POST',
        url: '/gold/',
        params: ['dadsadsa sadasdas']
    };

    var bill = {};

    for (var key in bob) {
        bill.k = bob.k;
    }
};

/* ---------------------------------------- results ---------------------------------------------
10000 'iteration firstSourceCode time:' 129
10000 'iteration secondSourceCode time:' 12
1000 'iteration firstSourceCode time:' 20
1000 'iteration secondSourceCode time:' 1
100 'iteration firstSourceCode time:' 1
100 'iteration secondSourceCode time:' 1