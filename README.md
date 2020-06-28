# 用 Vue 和 Express 实现迷你全栈电商应用

<a name="F4RB6"></a>
## 项目预览

![Lark20200323-131207.gif](https://tva1.sinaimg.cn/large/00831rSTgy1gd54z2ym70g30jg0abazr.gif)

<a name="t5Wg4"></a>
## 项目界面说明

<a name="ZKItf"></a>
### 首页

主要有首页头部导航栏以及展示本地商品信息的列表，列表主要展示了本地商品的名称、介绍、价格、生产商以及添加购物车操作。

![](https://tva1.sinaimg.cn/large/00831rSTgy1gd5502geyij311y0i974t.jpg)



<a name="i3VOg"></a>
### 后台管理页面

主要用于对商品以及生产商的后台管理，包括查看商品（可以进行修改商品信息）、添加商品、查看生产商（可以进行修改生产商信息）以及添加生产商。

<a name="BzD1F"></a>
#### 查看商品页面

主要展示了后台商品的名称、价格、制造商以及修改和删除操作。

![](https://tva1.sinaimg.cn/large/00831rSTgy1gd54zzphloj311y0i9wes.jpg)



<a name="mh4op"></a>
#### 添加/修改商品页面

展示一个表单页面，主要用于添加一个新商品或者对指定商品信息进行修改。

![](https://tva1.sinaimg.cn/large/00831rSTgy1gd54zytgmqj311y0hhglk.jpg)

<a name="Dz97A"></a>
#### 查看制造商页面

主要展示了后台制造商的名称以及修改和删除操作。

![](https://tva1.sinaimg.cn/large/00831rSTgy1gd54zwl8yej311t0h2wel.jpg)

<a name="A9Daz"></a>
#### 添加/修改制造商页面

展示一个表单页面，主要用于添加一个新制造商或者对指定制造商信息进行修改。<br />![](https://tva1.sinaimg.cn/large/00831rSTgy1gd54zv65x4j311t0h10sp.jpg)

<a name="9vO3e"></a>
#### 购物车页面

主要用于展示添加到本地购物车的商品信息列表，列表主要展示了购物车商品的名称、介绍、价格、生产商以及移出购物车操作。<br />![](https://tva1.sinaimg.cn/large/00831rSTgy1gd54zu7k4uj311u0h1t95.jpg)

<a name="Su5Ud"></a>
## 体验项目

<a name="nZocL"></a>

### 克隆仓库，开启前端和后端服务服务：

- 克隆仓库然后进入该仓库：
```bash
git clone https://github.com/tuture-dev/vue-online-shop-frontend.git
cd vue-online-shop-frontend
```

### 使用 Docker 一键开启服务

确保安装 Docker，然后执行如下命令：

```bash
docker-compose up
```

### 手动开启服务

#### 数据库

下载安装和启动 MongoDB：[https://www.mongodb.com/](https://www.mongodb.com/)

##### 前端：

在项目目录下：

```bash
cd client
npm install # yarn
npm start # yarn start
```

##### 后端

在项目目录下：

```bash
cd server
npm install # yarn
npm start # yarn start
```
