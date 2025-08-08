class CookieParser {

    async getCookies(callback) {
        this.#parse((cookies) => {
            callback(cookies);
        });
    }

    async #parse(callback) {
        // parse the cookies
        await chrome.cookies.getAll(
            {
                url: "https://mow2.sale.partner.ru"
            }, (cookies) => {
                callback(cookies)
            }
        );
    }
}

export default CookieParser;