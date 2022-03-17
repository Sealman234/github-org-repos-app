# GitHub Organization Repositories App

本專案是串接 [GitHub REST API](https://docs.github.com/en/rest)，並使用 React 實作瀏覽單一 Organization 的 Repositories 網站。

## How to use

可以使用以下指令執行專案：

- `npm install`：安裝 package.json 裡面的 Dependencies
- `npm start`：啟動 App，可以在瀏覽器中訪問 [http://localhost:3000](http://localhost:3000) 檢視專案

## 資料夾結構

- `src`
  - `pages`: Page components
  - `components`
    - `layout`: Building-block components for building layout
    - `repos`: Building-block components for showing repository list
    - `UI`: Building-block components for handling UI stack
  - `store`: Handling state processing used by Redux Toolkit

## 功能設計

實作面主要圍繞在以下兩項功能：

- Infinite Scrolling Repository List
- Filters

實作方式：

1. 以 CRA 建構專案並安裝所需套件，包含 styled-components、React Router、Redux Toolkit、Axios 等套件
2. 新增 Layout 與 Container、Loading、Header 等 Global 元件
3. 創造 Axios Instance 管理 GitHub REST API
4. 實作 Infinite Scroll 列表，並且透過 Debounce 減少觸發 Scroll 事件的頻率以提升效能
5. 新增 Repo 列表 Loading、Error、Empty 等 UI Stack，改善使用體驗
6. 實作篩選器功能，包含 Type、Sort、Direction 等篩選方式
7. 將元件中的 API 邏輯提取至 Redux，讓 Infinite Scroll 與篩選器都能複用相同的邏輯
8. 新增搜尋 Organization 功能

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
