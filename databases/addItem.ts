const notion = require('notion');

/**
 * @description Add a new item to Notion database
 * @param databaseId 
 * @param item 
 */
async function addItem(databaseId, item) {
    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId },
            properties: item,
        })
        return response;
    } catch (error) {
        console.error(error.body)
    }
}

module.exports = addItem;
