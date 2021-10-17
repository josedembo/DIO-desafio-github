class CustomError extends Error {
    constructor({ message, data }) {
        super(message);
        this.data = data;
        debugger;
    }
}

try {
    const myError = new CustomError({
        message: "cunstom error for here",
        data: {
            type: "server error"
        }
    });
    throw myError;
} catch (error) {
    console.log(error);
    if (error.data.type === "server error") {
        console.log("error status code: 500");
    }
} finally {
    console.log("keep going...");
}
