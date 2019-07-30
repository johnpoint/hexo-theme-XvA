# <div align="center">XvA</div>

一个简~~约~~单的 HEXO 主题

# Install 安装

```bash
git clone https://github.com/johnpoint/hexo-theme-XvA themes/XvA
cd themes/XvA
cp _config.example.yml _config.yml
```

# Configuration 配置

```yaml
# 导航栏
menu:
  Home: /
  Archives: /archives

post_copyright:
  enable: false
  author: 
  copyright_text: 本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0 国际许可协议</a>进行许可。

sitesince: #页脚版权信息，填写年份 Footer copyright information, filled in the year

# 侧边栏
# sidebar
widget:
  tag:
    enable: false
    count: 10
  friends: # 友情链接 Links
    enable: false

# Links
# 友情链接
friends:
  pagetitle:
  list:
    - title: # 标题
      img: # 头像 Avatar
      url: # 链接地址
      desc: # 简介 description
      sidebar: false # 显示在侧边栏 Displayed in the sidebar
      page: false # 在独立页面显示 Displayed on a separate page


# 评论
comment:
  disqus:
    enable: false
    shortname: 
    lazyload: false

# 网站统计
analytics:
  google:
    enable: false
    id: #UA-xxxxxx-x
```

# TODO

- [x] 侧边栏友情链接
- [x] disqus
- [x] google analytics
- [x] 文章版权声明
- [x] highlight.js 代码高亮
- [x] 独立友链页面
- [ ] 图片窗口内打开
- [ ] disqus lazyload
- [ ] 添加不蒜子统计