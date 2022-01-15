/**
 * @description Add a new item to Notion database
 * @param {Client} client - Notion client
 * @param databaseId 
 * @param item 
 */
async function addItem(client, databaseId, item) {
    try {
        const response = await client.pages.create({
            parent: { database_id: databaseId },
            properties: item,
        })
        return response;
    } catch (error) {
        console.error(error.body)
    }
}

module.exports = addItem;
