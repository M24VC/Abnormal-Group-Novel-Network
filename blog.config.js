// blog.config.js

const blogConfig = {
  siteTitle: '小说网站', // 网站标题
  siteLogo: '/images/logo.png', // 网站 logo 图片路径
  favicon: '/images/favicon.ico', // 网站 favicon 路径
  author: '默认作者', // 默认作者
  footerText: '© 2024 小说网站', // 页脚文本
  categories: ['科幻', '爱情', '悬疑'], // 文章分类
  tags: ['热门', '推荐'], // 默认标签
  login: {
    username: 'admin', // 默认用户名
    password: 'password', // 默认密码
  },
  jwtSecret: process.env.JWT_SECRET || 'fallback_jwt_secret', // 使用环境变量的 JWT 密钥，带有默认值
};

export default blogConfig; // 导出配置对象
