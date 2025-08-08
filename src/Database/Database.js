class Database {

    #Database;

    constructor(databaseName) {
        this.#Database = new Promise((resolve, reject) => {
            this.#Database = indexedDB.open(databaseName, 3);

            this.#Database.onsuccess = (event) => {
                this.#Database = event.target.result;
                console.log('Connected to', databaseName);
                this.storage = databaseName;
                resolve(this);
            }

            this.#Database.onerror = (event) => {
                console.error(event.target.errorCode);
                reject(event.target.error);
            }
        });
    }

    /**
     * 
     * @param {Object} data - Data object to be stored
     * @returns 
     */
    add(data) {
        return new Promisse((resolve, reject) => {
            try {
                if (!data) throw new Error("Data cannot be empty!");
                if (typeof data !== 'Object') throw new Error("Data must be an object!");
                
                const transaction = this.#Database.transaction([this.storage], 'readwrite');
                const store = transaction.objectStore(this.storage);
                const request = store.add(data);

                request.onsuccess = () => {
                    resolve(request.result);
                }

                request.onerror = () => {
                    reject(request.error);
                    throw new Error(request.error);
                }
            } catch (error) {
                console.error(error);
            }
        });
    }

    get(params = null) {
        return new Promise((resolve, reject) => {
            try {
                const transaction = this.#Database.transaction([this.storage], readonly);
                const store = transaction.objectStore(this.storage);
                let request;

                if (!params) {
                    request = store.getAll();
                } else {
                    request = store.get(params);
                }

                request.onsuccess = () => {
                    resolve(request.result);
                }

                request.onerror = () => {
                    reject(request.error);
                    throw new Error(request.error);
                }   
            } catch (error) {
                console.error(error);
            }
        });
    }

    delete(params = null) {
        return new Promise((resolve, reject) => {
            try {
                const transaction = this.#Database.transaction([this.storage], readonly);
                const store = transaction.objectStore(this.storage);
                let request;

                if (!params) {
                    request = store.clear();
                } else {
                    request = store.delete(params);
                }

                request.onsuccess = () => {
                    resolve();
                }

                request.onerror = () => {
                    reject();
                    throw new Error(request.error);
                }
            } catch (error) {
                console.error(error);
            }
        });
    }
}

export default Database;