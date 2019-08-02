# <div align="center"><img src="https://raw.githubusercontent.com/johnpoint/hexo-theme-XvA/master/logo.png"></img></div>
<p align="center"><img src="https://img.shields.io/badge/Version-1.0.0-green"> <img src="https://img.shields.io/github/license/johnpoint/hexo-theme-XvA"> <img src="https://img.shields.io/badge/hexo-3.7%2B-green"> <img src="https://travis-ci.org/johnpoint/hexo-theme-XvA.svg?branch=master"> <a href="https://codebeat.co/projects/github-com-johnpoint-hexo-theme-xva-master"><img alt="codebeat badge" src="https://codebeat.co/badges/4ff53f5f-f14a-4c02-b359-f70508088cef" /></a></p>

一个简~~约~~单的 HEXO 主题

# Contents 目录

- [Install 安装](#Install-安装)
- [Configuration 配置](#Configuration-配置)
- [Demo 演示](#Demo-演示)
- [TODO 待实现](#TODO-待实现)

# Install 安装

```bash
git clone https://github.com/johnpoint/hexo-theme-XvA themes/XvA
cd themes/XvA
cp _config.example.yml _config.yml
```

# Configuration 配置

```yml
# 导航栏
menu:
  Home: /
  Archives: /archives

post_copyright:
  enable: false
  author: 
  copyright_text: 本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0 国际许可协议</a>进行许可。

totop: true
fancybox: true
sitesince: #页脚版权信息，年份 Footer copyright information, filled in the year

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
  busuanzi: # 不蒜子网站统计
    enable: false
    text:
      head: # 描述 示例:本站访客数 Example: view
      end:  # 描述 单位 示例:人次 Example: times
      # 效果: 本站访客数 233 人次
      # effect: view 233 times

tagscloud:
  color:
    enable: false
    start: # Start color. You can use hex (#b700ff), rgba (rgba(183, 0, 255, 1)), hsla (hsla(283, 100%, 50%, 1)) or color keywords. This option only works when color is true.
    end: # End color. You can use hex (#b700ff), rgba (rgba(183, 0, 255, 1)), hsla (hsla(283, 100%, 50%, 1)) or color keywords. This option only works when color is true.
  text:
    min: 20 # 最小字体大小 Minimal font size
    max: 40 # 最大字体大小 Maximum font size
    unit: px # 字体尺寸单位 Unit of font size
```

# Demo 演示

- [hexo-theme-xva.github.io/](https://hexo-theme-xva.github.io/)
- [johnpoint's blog](https://blog.lvcshu.com)

# TODO 待实现

- [x] 侧边栏友情链接
- [x] disqus
- [x] google analytics
- [x] 文章版权声明
- [x] highlight.js 代码高亮
- [x] 独立友链页面
- [x] 独立标签云
- [x] 添加不蒜子访客统计
- [x] disqus lazyload
- [x] 修复手机部分字体不兼容
- [x] 图片窗口内打开
- [x] 回到顶部
- [ ] 加载进度条
- [ ] 添加动画效果
- [ ] 不蒜子阅读量统计
- [ ] 多语言支持
- [ ] 一言 支持
- [ ] Gitment 支持
- [ ] 代码高亮优化
