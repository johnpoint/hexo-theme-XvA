# <div align="center"><img src="https://raw.githubusercontent.com/johnpoint/hexo-theme-XvA/master/logo.png"></img></div>
<p align="center"><img src="https://img.shields.io/badge/Version-3.6.17-green"> <img src="https://img.shields.io/github/license/johnpoint/hexo-theme-XvA"> <img src="https://img.shields.io/badge/hexo-3.7%2B-green"> <img src="https://travis-ci.org/johnpoint/hexo-theme-XvA.svg?branch=master"> <a href="https://codebeat.co/projects/github-com-johnpoint-hexo-theme-xva-master"><img alt="codebeat badge" src="https://codebeat.co/badges/4ff53f5f-f14a-4c02-b359-f70508088cef" /></a></p>

一个简~~约~~单的 HEXO 主题

# Contents 目录

- [Install 安装](#Install-安装)
- [Version number specification 版本号规范](#Version-number-specification-版本号规范)
- [Configuration 配置](#Configuration-配置)
- [Demo 演示](#Demo-演示)
- [Font 字体](#Font-字体)
- [TODO 待实现](#TODO-计划)
- [Thanks 致谢](#Thanks-致谢)
- [LICENSE 许可协议](#LICENSE-许可协议)

# Install 安装

```bash
git clone https://github.com/johnpoint/hexo-theme-XvA themes/XvA
cd themes/XvA
cp _config.example.yml _config.yml
```

# Version 版本号

A . B . C

当 C 变化时配置文件无需修改，其余两位数字变化时有可能需要对配置文件进行修改

# Configuration 配置

## Theme configuration 主题全局配置

```yml
# 导航栏
menu:
  Home: /
  Archives: /archives

post_copyright:
  enable: false
  author: 
  copyright_text: 本作品采用<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">知识共享署名-相同方式共享 4.0 国际许可协议</a>进行许可。

loading: false
totop: true
fancybox: true
sitesince: #页脚版权信息，年份 Footer copyright information, filled in the year
yiyan: false #一言 https://www.jinrishici.com

bigimg: #首页巨幕图片
  enable: false
  background: 
  RSS: # URL
  Github: https://github.com/ #URL
  Telegram: https://t.me/ #URL
  Mail: #mail
  wikipedia: 

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


# 评论 二选一
# pick one of two
comment:
  disqus:
    enable: false
    shortname: 
    lazyload: false
  gitalk: # See https://github.com/gitalk/gitalk#Install
    enable: false
    owner:
    repo:
    oauth:
      client_id:
      client_secret:
    admin:
#     - johnpoint

# 网站统计
analytics:
  google:
    enable: false
    id: #UA-xxxxxx-x
  LA:
    enable: false
    id: 
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

AdSense:
  enable: false
  google_ad_client: 
```

## 页面配置

**本主题自带代码高亮，请关闭 hexo 自带高亮功能!**
```yaml
highlight:
  enable: false
  auto_detect: false
  line_number: false
  tab_replace: false
```

```yaml
copyright: false #默认显示版权信息，设置为 false 可以隐藏
toc: true #显示目录
sidebar: true #独立页面默认不显示侧边栏，设置为 true 可以显示
bigimg: #直接填入背景参数，详情看示例
#示例
bigimg: url('//cdn.lvcshu.info/img/20200426001.jpg')
# or
bigimg: cadetblue
# or
bigimg: #6f5fa0 
# or
bigimg: rgb(111, 95, 160)
```

# Demo 演示

- [hexo-theme-xva.github.io/](https://hexo-theme-xva.github.io/)
- [johnpoint's blog](https://blog.lvcshu.com)

# Font 字体

参见 [配置CORS小记](https://blog.lvcshu.com/2019/10/07/配置CORS小记/)

# Thanks 致谢

- [twbs/bootstrap](https://github.com/twbs/bootstrap)
- [jQuery](https://github.com/jquery)
- [HubSpot/pace](https://github.com/HubSpot/PACE)
- [hexojs/hexo](https://github.com/hexojs/hexo)
- [gitalk/gitalk](https://github.com/gitalk/gitalk)
- [古诗词·一言API](https://www.jinrishici.com)
- [iconfont](https://www.iconfont.cn/)

- 字体
  - Times New Roman
  - Titillium Web
  - Times
  - serif

- 图片
  - Photo by Teo Duldulao on [Unsplash](https://unsplash.com/photos/4op9_2Bt2Eg)
  - Photo by Ash Edmonds on [Unsplash](https://unsplash.com/photos/gcINRBbUxl0)
  - Photo by Ash Edmonds on [Unsplash](https://unsplash.com/photos/azkczZ4rOgk)
  - Photo by Jon Tyson on [Unsplash](https://unsplash.com/photos/vksdfuY2d6M)
  - Photo by Roman Serdyuk on [Unsplash](https://unsplash.com/photos/DL9Wz4YDa2s)

# LICENSE 许可协议

[GNU General Public License v3.0](https://github.com/johnpoint/hexo-theme-XvA/blob/master/LICENSE)
