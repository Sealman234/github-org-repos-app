# GitHub Organization Repositories App

透過串接 [GitHub REST API](https://docs.github.com/en/rest)，使用 React 實作出可搜尋單一 Organization，並瀏覽其 Repositories 的網站。

## Features

- Searching for a specific organization's repositories
- Infinite Scrolling Repository list
- Sorting and Filtering repositories

**TL;DR** [the demo page](https://github-org-repos-app.web.app/repos)

## Usage

將專案下載至本地後，您可以使用以下指令，在 Localhost 中執行此專案：

- `npm install`：安裝 package.json 裡面的 Dependencies
- `npm start`：啟動 App，可以在瀏覽器中訪問 [http://localhost:3000](http://localhost:3000) 檢視專案

## Folder Structure

- `src`
  - `pages`: Page components
  - `components`
    - `layout`: Building-block components for building layout
    - `repos`: Building-block components for showing repository list
    - `UI`: Building-block components for handling UI stack
  - `store`: Handling state processing used by Redux Toolkit

## 實作方式與功能設計

1. 以 CRA 建構專案並安裝所需套件，包含 styled-components、React Router、Redux Toolkit、Axios 等等，可在 `package.json` 中查看使用了哪些套件
2. 新增 Layout、Container、Loading、Header 等元件，建立網站的基礎外觀樣式
3. 創造 Axios Instance 來管理 GitHub REST API
4. 實作 Infinite Scroll 列表，並且透過 Debounce 減少觸發 Scroll 事件的頻率以提升效能
5. 為 Repositories 列表新增 Loading、Error、Empty 等 UI Stack，改善使用上的體驗
6. 實作篩選器功能，可用 Type、Sort、Direction 等方式進行篩選
7. 將 API 等非同步行為從 Components 提取至 Action Creators，讓 Infinite Scroll 與 Filters 重複使用邏輯，也讓元件更精簡
8. 新增搜尋 Organization 功能，並且避免空值、重複查詢等情況

## Tech Stack

- [Create React App](https://github.com/facebook/create-react-app) - Set up a modern web app by running one command
- [React](https://github.com/facebook/react/) - A declarative, efficient, and flexible JavaScript library for building user interfaces
- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress
- [React Router v6](https://github.com/remix-run/react-router) - Declarative routing for React
- [Redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
- [Redux Toolkit](https://github.com/reduxjs/redux-toolkit) - The official, opinionated, batteries-included toolset for efficient Redux development
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux
- [Firebase](https://firebase.google.com/) - Helps you build and run successful apps
- [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
