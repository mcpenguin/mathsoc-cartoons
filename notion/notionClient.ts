const { Client } = require('@notionhq/client');

export default class NotionClient {
    // token for notion
    client: typeof Client;

    constructor(token: string) {
        // initialize client
        this.client = new Client({ auth: token });
    }
    
    async addItem(databaseId, item) {
        const response = await this.client.pages.create({
            parent: { database_id: databaseId },
            properties: item,
        })
        return response;
    }
}
