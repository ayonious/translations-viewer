const axios = require('axios');
const fs = require('fs');

require('dotenv').config({
  path: `.env.development`,
});

// setttings > apikeys > travel-blog-translations-viewer > Content Preview API - access token
const headers = {
  Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN}`,
  'Content-Type': ' application/json',
};

const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;

const runQuery = async (query) => {
  try {
    const {
      data: {
        data: {
          travelBlogsCollection: { items: blogs },
        },
      },
    } = await axios.post(url, query, { headers });
    return blogs;
  } catch (err) {
    console.log('error', err.message);
  }
};

const getAllTranslations = async () => {
  const query = {
    query:
      'query($preview:Boolean){travelBlogsCollection(preview:$preview){items{translations,slug, featured, country, photosCollection{ items { title, description, url } }, image{url, title} }}}',
    variables: { preview: true },
  };

  const res = await runQuery(query);
  return res;
};

const runProg = async () => {
  if (!process.env.CONTENTFUL_PREVIEW_API_ACCESS_TOKEN) {
    console.log('Please set client token first', err);
    return;
  }

  try {
    const data = await getAllTranslations();
    fs.writeFile(
      'src/resources/data.json',
      JSON.stringify(data, null, 2),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
    console.log('Translations Updated Successfully. Please commit this');
  } catch (err) {
    console.log('An error occurred while updating Translations', err);
  }
};

runProg();
