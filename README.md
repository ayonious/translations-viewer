# Travel Blog content viewer

[![Netlify Status](https://api.netlify.com/api/v1/badges/475d5800-8d51-4327-a1d6-b834d3ff8a65/deploy-status)](https://app.netlify.com/sites/travel-blog-translations/deploys)

> View all contents of my travel blog in a very fast viewing UI

It helps for reviewing the content and tranlations overview

<p align="center">
  <img height="auto" width="1000px" alt="Screenshot" src="https://cdn.jsdelivr.net/gh/ayonious/translations-viewer@master/documentation/screenshot.desktop.2.png">
</p>

## 🔬 Currently showing

1. Translations
2. Pictures

## 📱 Responsiveness

Thanks to amazing media query this single page website is responsive

| Desktop                                                                                                            | Tablet                                                                                                           | Mobile                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ![Desktop](https://cdn.jsdelivr.net/gh/ayonious/translations-viewer@master/documentation/screenshot.desktop.2.png) | ![Tablet](https://cdn.jsdelivr.net/gh/ayonious/translations-viewer@master/documentation/screenshot.tablet.2.png) | ![Mobile](https://cdn.jsdelivr.net/gh/ayonious/translations-viewer@master/documentation/screenshot.mobile.2.png) |

## 🆕 How to update content

1. Update your contentful api keys in .env.develpment file

```text
// setttings > apikeys > travel-blog-translations-viewer > Content Preview API - access token
CONTENTFUL_SPACE_ID=<>
CONTENTFUL_PREVIEW_API_ACCESS_TOKEN=<>
```

2. yarn translations
3. Commit all translations and push the changes

## 🏃‍♂️ Local Running instruction

```
yarn
yarn run start
```

## 🚀 See deployed

https://travel-blog-translations.netlify.app
