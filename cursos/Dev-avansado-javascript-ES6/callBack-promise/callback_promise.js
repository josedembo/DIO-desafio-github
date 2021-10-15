// callBack

function dosomething(callBack) {
    setTimeout(function () {
        //do somthing
        callBack("doing something");
    }, 1000);
}

function doOtherthing(callBack) {
    setTimeout(function () {
        //do somthing
        callBack("doing Other thing");
    }, 1000);
}


function log(msg) {
    console.log(msg);
}

dosomething(function (data) {
    console.log(data);
});