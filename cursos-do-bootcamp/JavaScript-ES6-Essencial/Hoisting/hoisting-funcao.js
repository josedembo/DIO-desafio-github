function fn() {
    log("exemplo de hoisting de funcões");

    function log(text) {
        console.log(text);
    }
}

fn();