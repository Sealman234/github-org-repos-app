# GitHub Organization Repositories App

透過串接 [GitHub REST API](https://docs.github.com/en/rest)，讓我們可以直接快速地搜尋並瀏覽某一個 Organization 的所有 Repository。

## 實作功能

- 搜尋與瀏覽特定 Organization 的 Repositories
- 使用 Infinite Scroll 載入更多資料
- 篩選與排序

**TL;DR** [the demo page](https://github-org-repos-app.web.app/repos)

## 如何使用

將專案下載至本地後，您可以使用以下指令，在 localhost 中執行此專案：

- `npm install`：安裝 package.json 裡面的 Dependencies
- `npm start`：啟動 App，可以在瀏覽器中訪問 [http://localhost:3000](http://localhost:3000) 檢視專案

## Folder Structure

架構方面，我習慣將 Components 區分為 Page、Global、UI 三個種類，在本專案中分別對應到 pages、components/layout、components/UI 這三個資料夾。

至於 components/repos 則是一般頁面上用到的元件，雖然它並沒有被共用，但由於我希望讓專案裡的元件盡量不要超過 300 行，因此我也對這個部分做了元件的拆分，目的是減少耦合，並增加可讀性。

- `src`
  - `pages`: Page components，每個獨立頁面的元件
  - `components`
    - `layout`: Global components，在每個頁面都會出現的元件，像是 Header 或 Footer 等等
    - `repos`: Repository 列表會用到的 Building-block components
    - `UI`: 拆分 Global components 所產出的 Building-block components，用來 Handle UI stack
  - `store`: Handling state processing used by Redux Toolkit

## 實作步驟、實作方式、功能設計

1. 以 CRA 建構專案並安裝所需套件，包含 styled-components、React Router、Redux Toolkit、Axios 等等，可在 `package.json` 中查看使用了哪些套件
2. 新增 Layout、Container、Loading、Header 等元件，建立網站的基礎外觀樣式
3. 創造 Axios Instance 來管理 GitHub REST API
4. 實作 Infinite Scroll 列表，並且透過 Debounce 減少觸發 Scroll 事件的頻率以提升效能
5. 為 Repositories 列表新增 Loading、Error、Empty 等 UI Stack，改善使用上的體驗
6. 實作篩選器功能，可用 Type、Sort、Direction 等方式進行篩選
7. 將 API 等非同步行為從 Components 提取至 Action Creators，讓 Infinite Scroll 與 Filters 重複使用邏輯，也讓元件更精簡
8. 新增搜尋 Organization 功能，並且避免空值、重複查詢等情況
9. 改以 Intersection Observer API 實作 Infinite Scroll，改善效能負擔問題

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
