// load env
require('dotenv').config();

// initialize Notion client
const { Client } = require('@notionhq/client');

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

const addItem = require('./databases/addItem.ts');

// get database id of comics
const testId = require("./databases/databases.ts").test;

addItem(client, testId, {
    title: {
        title: [
            {
                "text": {
                    "content": "Yurts in Big Sur, California"
                }
            }
        ]
    }
})
.then(console.log)
.catch(console.error);
