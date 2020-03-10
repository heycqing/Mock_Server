## Mock_server

### 描述

本项目不采取访问服务器文件实体的方式，而是直接访问由js文件生成的数据的形式

<br />

如果想要通过访问服务器文件实体的方式，可以参考本人的另一个项目 [localhost_node](https://github.com/heycqing/localhost_node) 🚀

### 什么情况下创造？

做好了前端样式，然后需要在测试环境中进行测试，但是测试环境的数据坏了，然后后端需要修复测试环境的数据，那我只能进行完当前的需求才可以进行下一步开发，于是在苦等....后端修复后，然后又出情况...我前端没法等啊..只能写了一个简陋版的mock_server服务。

<br />

ps: 后来，在工作和实践中不断健壮这个项目，亲测在现实工作中使用此项目参与到前端开发中，主要模拟后端数据，同时可以模拟后端路由的编写的规则，为了减少重复劳动。




### 使用方法

<br />

可以使用手写原始数据，也可以使用 mockJs 自动化模拟数据.

1. git拉取项目
`git clone https://github.com/heycqing/Mock_Server.git `

2. 安装依赖
`cd Mock_Server && npm install`

3. 开启服务
`npm run mock`

### 如何编写自己的数据服务

1. 编写路由 和 路由数据
   **关键是关联路由和对应的路由数据**

   1.1 编写路由
   在根目录的 `mock.router` 下, 可参考 `mock.router/test_router/mock_router.js`
   <br />

   1.2 编写路由数据
   在根目录的 `mock.data` 下, 可参考 `mock.data/test_data/mock_data.js`

2. 引用编写好的路由
   在根目录的 `index.js` 中, 可参考 `test_router` 
   <br />

   ```js
    // mock 路由
    let test_router = require('./mock.router/test_router/mock_router.js')

    // 加载不同的路由
    App.use(test_router.routes())
   ```

<br />

### 简陋版和健壮版

**简陋版的 mock_server** 是在当前仓库的分支上[simple_mock_server]，想了解简单原理的可以切换到这个分支上查看。
- nodeJs 原生的 http 服务
- mockJs 的简单使用
- nodeJs 的简单 http中间件(主要是处理跨域问题)

**健壮版的 mock_server** 是在主支 [master] 上
- 采用 KoaJs 框架来替换原生的 http 服务
- mockJs 会更健全更自动化
- nodeJs 中间件会封装好。
- 可手动编写数据