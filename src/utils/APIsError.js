class APIsError extends Error{
    constructor(message, statusCode){
        super(message);
        this.status = `${statusCode}`.startsWith(4) ? "fail" : "error";
        this.statusCode = statusCode
    }
}
export default APIsError