---
author: 星火燎原@vxhly
title: Mac 下 brew 切换为国内源
category: [liunx]
tag: [Brew, Homebrew]
date: 2016-09-10 14:04:39
---

::: tip 前言

Homebrew 是一款自由及开放源代码的软件包管理系统, 用以简化 macOS 和 linux 系统上的软件安装过程。以下是提供 Homebrew 的国内切源方法。

:::

<!-- more -->

## 简介

Homebrew 是一款自由及开放源代码的软件包管理系统, 用以简化 macOS 和 linux 系统上的软件安装过程。它拥有安装、卸载、更新、查看、搜索等很多实用的功能, 通过简单的一条指令, 就可以实现包管理, 十分方便快捷。

`Homebrew` 主要有四个部分组成: `brew`、`homebrew-core` 、`homebrew-bottles`、`homebrew-cask`。

| 名称             | 说明                            |
| ---------------- | ------------------------------- |
| brew             | Homebrew 源代码仓库             |
| homebrew-core    | Homebrew 核心软件仓库           |
| homebrew-bottles | Homebrew 预编译二进制软件包     |
| homebrew-cask    | 提供 macOS 应用和大型二进制文件 |

## 官网安装

首先，这里是官网：[Homebrew](https://rumosky.com/go/aHR0cHM6Ly9icmV3LnNo)，用官网的脚本安装，执行

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

如果网络没问题，会直接一路安装成功，但如果提示：

需要修改/etc/hosts，在这个网站 [IP address](https://rumosky.com/go/aHR0cHM6Ly93d3cuaXBhZGRyZXNzLmNvbQ)，检测一下 `raw.githubusercontent.com`，会得到这个域名的 A 解析，将对应的 IP 和域名，添加到 hosts 文件的最后，然后就可以顺利执行脚本了

## 国内脚本

上面的那个官网的，速度不是很理想，可以手动替换源地址，阿里，清华，中科大，腾讯都有。直接百度即可

```bash
# 科大
https://mirrors.ustc.edu.cn/help/brew.git.html

# 阿里
https://developer.aliyun.com/mirror/homebrew/

# 腾讯
https://mirrors.cloud.tencent.com/homebrew/

# 清华
https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/
```

脚本地址：[HomebrewCN](https://rumosky.com/go/aHR0cHM6Ly9naXRlZS5jb20vY3Vua2FpL0hvbWVicmV3Q04)

这个脚本，很简单，可以自主选择要使用的国内源，很方便，安装完之后，根据提示运行命令即可

安装脚本命令

```bash
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

### 问题

下面记录遇到的几种问题以及解决办法

1、执行 `brew update` 遇到如下报错：

```bash
Error: Failed to download https://formulae.brew.sh/api/formula.jws.json!
Failed to download https://formulae.brew.sh/api/cask.jws.json!
==> Downloading https://formulae.brew.sh/api/formula.jws.json
                                                                           0.7%curl: (28) Operation too slow. Less than 100 bytes/sec transferred the last 5 seconds

Warning: formula.jws.json: update failed, falling back to cached version.
==> Downloading https://formulae.brew.sh/api/formula.jws.json
#                                                                          2.2%curl: (28) Operation too slow. Less than 100 bytes/sec transferred the last 5 seconds

Warning: formula.jws.json: update failed, falling back to cached version.
==> Downloading https://formulae.brew.sh/api/formula.jws.json
curl: (28) Operation too slow. Less than 100 bytes/sec transferred the last 5 seconds

Error: Failure while executing; `/usr/bin/env /opt/homebrew/Library/Homebrew/shims/shared/curl --disable --cookie /dev/null --globoff --user-agent Homebrew/4.0.4-86-g7c15dce\ \(Macintosh\;\ arm64\ Mac\ OS\ X\ 13.2.1\)\ curl/7.86.0 --header Accept-Language:\ en --fail --progress-bar --location --remote-time --output /Users/rumosky/Library/Caches/Homebrew/api/formula.jws.json --compressed --speed-limit 100 --speed-time 5 --progress-bar https://formulae.brew.sh/api/formula.jws.json` exited with 28. Here's the output:
curl: (28) Operation too slow. Less than 100 bytes/sec transferred the last 5 seconds
```

执行这个命令即可

```bash
export HOMEBREW_NO_INSTALL_FROM_API=1
```

2、执行 `brew doctor` 时，遇到下面的提示：

```bash
Please note that these warnings are just used to help the Homebrew maintainers
with debugging if you file an issue. If everything you use Homebrew for is
working fine: please don't worry or file an issue; just ignore this. Thanks!

Warning: Suspicious https://github.com/Homebrew/brew git origin remote found.
The current git origin is:
  https://mirrors.aliyun.com/homebrew/brew.git

With a non-standard origin, Homebrew won't update properly.
You can solve this by setting the origin remote:
  git -C "/opt/homebrew" remote set-url origin https://github.com/Homebrew/brew

Warning: Suspicious https://github.com/Homebrew/homebrew-core git origin remote found.
The current git origin is:
  https://mirrors.aliyun.com/homebrew/homebrew-core.git

With a non-standard origin, Homebrew won't update properly.
You can solve this by setting the origin remote:
  git -C "/opt/homebrew/Library/Taps/homebrew/homebrew-core" remote set-url origin https://github.com/Homebrew/homebrew-core
```

这个忽略就好，不用管。

3、执行 `brew update`，遇到下面的提示：

```bash
Warning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-cask, skipping update!
Warning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-core, skipping update!
Warning: No remote 'origin' in /opt/homebrew/Library/Taps/homebrew/homebrew-services, skipping update!
Already up-to-date.
```

再执行 `brew -v` 命令看看是不是有两个 warning，这说明你的 `homebrew-core`、`homebrew-cask` 和 `homebrew-services` 目录被 git 认为不是一个安全的目录，需要手动添加

```bash
git config --global --add safe.directory 你的homebrew-core路径
git config --global --add safe.directory 你的homebrew-cask路径
git config --global --add safe.directory 你的homebrew-services路径
```

### 关于文档

阿里的文档很旧，内容没有更新，腾讯直接就没有文档，建议用清华和科大的，文档很详细，我最后用的是清华的，按照文档一步一步来，一点问题都没有，最后附上我的配置文件 `.zprofile`

```bash
eval "$(/opt/homebrew/bin/brew shellenv)"
# Set PATH, MANPATH, etc., for Homebrew.
export HOMEBREW_INSTALL_FROM_API=1
export HOMEBREW_API_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles/api"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"
eval "$(/opt/homebrew/bin/brew shellenv)"
```

优先使用官方的脚本，觉得慢，就替换成国内的，实在不行，再用国内的脚本。

## 查看本地的源

```bash
# 查看 brew.git 当前源
$ cd "$(brew --repo)" && git remote -v
origin    https://github.com/Homebrew/brew.git (fetch)
origin    https://github.com/Homebrew/brew.git (push)

# 查看 homebrew-core.git 当前源
$ cd "$(brew --repo homebrew/core)" && git remote -v
origin    https://github.com/Homebrew/homebrew-core.git (fetch)
origin    https://github.com/Homebrew/homebrew-core.git (push)
```

## 替换为阿里源

```bash
# 修改 brew.git 为阿里源
$ git -C "$(brew --repo)" remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# 修改 homebrew-core.git 为阿里源
$ git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# zsh 替换 brew bintray 镜像
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
$ source ~/.zshrc

# bash 替换 brew bintray 镜像
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.bash_profile
$ source ~/.bash_profile

# 刷新源
$ brew update
```

## 替换为清华源

```bash
# 替换各个源
$ git -C "$(brew --repo)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
$ git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
$ git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git

# zsh 替换 brew bintray 镜像
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.zshrc
$ source ~/.zshrc

# bash 替换 brew bintray 镜像
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles' >> ~/.bash_profile
$ source ~/.bash_profile

# 刷新源
$ brew update
```

## 替换为中科大源

```bash
# 替换各个源
$ git -C "$(brew --repo)" remote set-url origin https://mirrors.ustc.edu.cn/brew.git
$ git -C "$(brew --repo homebrew/core)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git
$ git -C "$(brew --repo homebrew/cask)" remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

# zsh 替换 brew bintray 镜像
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
$ source ~/.zshrc

# bash 替换 brew bintray 镜像
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.bash_profile
$ source ~/.bash_profile

# 刷新源
$ brew update
```

## 重置为官方源

```bash
# 重置 brew.git 为官方源
$ git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git

# 重置 homebrew-core.git 为官方源
$ git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git

# 重置 homebrew-cask.git 为官方源
$ git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask

# zsh 注释掉 HOMEBREW_BOTTLE_DOMAIN 配置
$ vi ~/.zshrc
# export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx

# bash 注释掉 HOMEBREW_BOTTLE_DOMAIN 配置
$ vi ~/.bash_profile
# export HOMEBREW_BOTTLE_DOMAIN=xxxxxxxxx

# 刷新源
$ brew update
```
