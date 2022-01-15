// load env
require('dotenv').config();

import NotionClient from './notion/notionClient';

// get test database id
const databaseId = require('./notion/databases/databases.ts').test;

const client = new NotionClient(process.env.NOTION_ACCESS_TOKEN);

client.addItem(databaseId, {
    Title: {
        title: [
            {
                text: {
                    content: 'Tuscan Kale 2',
                },
            },
        ],
    },
    'Asset Type': {
        multi_select: [
            {
                name: "Logo" 
            },
            {
                name: "Loop"
            }
        ]
    }
})
    .then(res => console.log(res))
    .catch(err => console.error(err))
