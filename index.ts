// initialize Notion client
const { Client } = require('@notionhq/client');

const client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });

// get database id of comics
const testId = require("./notion/databases.ts").test;
