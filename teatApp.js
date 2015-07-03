var iterationCount = [100, 1000, 10000];
var startTime, currTime;

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



for (var j = iterationCount.length-1; j>=0; j--) {
    startTime = new Date();

    for (var i = iterationCount[j]; i >= 0; i--) {
        firstSourceCode();
    }
    console.log(iterationCount[j],'iteration firstSourceCode time:', new Date() - startTime);

    startTime = new Date();

    for (var i = iterationCount[j]; i >= 0; i--) {
        secondSourceCode();
    }
    console.log(iterationCount[j],'iteration secondSourceCode time:', new Date() - startTime);
}