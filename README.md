## 强缓存机制测试

### 怎么跑？

```javascript
// 启动服务端
yarn server

// 启动网页，其实就是开个网页
yarn client
```

### 看什么？

- 打来浏览器的**开发者工具**，切换到`Network`标签，**关闭**`Disable cache`（对，就是让浏览器能正常缓存）
- 频繁刷新页面，查看图片的请求有没有正常走到强缓存，类似`(disk/memory cache)`

### 这是啥问题？

看看这个文章：[你这Cache-Control保缓存么？](https://mp.weixin.qq.com/s/wmTwnn-z84TPD_xPS5ODTA)