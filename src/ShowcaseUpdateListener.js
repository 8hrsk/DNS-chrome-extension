import { Requests } from './Requests.js';

class ShowcaseListener {
  async init() {}

  async watch() {
    setInterval( async () => {
      await Requests.getDocuments((documents) => {

      });
    }, 10000);
  }
}

export default ShowcaseListener;