class Requests {
  /**
   * Main http request class
   */

  static async getProducts() {
    fetch("http://mow2.sale.partner.ru/api/common/showcase/getDataByCategories", {
      "headers": {
      "accept": "*/*",
      "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/json",
      "x-requested-with": "XMLHttpRequest",
      "cookie": "",
      "Referer": "http://mow2.sale.partner.ru/consultant/product-showcase-master",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
      "body": "{\"categories\":[{\"id\":\"B12400151716F9F511DD59D50CF19808\",\"isFullChecked\":true,\"name\":\"Samsung\",\"parentId\":\"AB470002B3552D7511DABBA258483AF9\",\"title\":\"Samsung\"},{\"id\":\"AB470002B3552D7511DABBA258483AF9\",\"isFullChecked\":false,\"name\":\"02. Cмартфоны\",\"parentId\":\"AB470002B3552D7511DABBA258483AD9\",\"title\":\"03. Планшеты, Смартфоны, Сотовые телефоны, Носимая электроника \\\\ 02. Cмартфоны\"},{\"id\":\"AB470002B3552D7511DABBA258483AD9\",\"isFullChecked\":false,\"name\":\"03. Планшеты, Смартфоны, Сотовые телефоны, Носимая электроника\",\"parentId\":\"\",\"title\":\"03. Планшеты, Смартфоны, Сотовые телефоны, Носимая электроника\"},{\"id\":\"A20600155D03332B11E975E9116BEE0E\",\"isFullChecked\":true,\"name\":\"Tecno\",\"parentId\":\"AB470002B3552D7511DABBA258483AF9\",\"title\":\"Tecno\"}]}",
      "method": "POST"
    });
  }
}

export default Requests;