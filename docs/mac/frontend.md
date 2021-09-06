### mac 前端开发环境搭载
## 1. 科学上网
## 2. 安装 `homebrew`
1.直接去官网
* 如果`curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused`
* 使用下面的命令：(这里是从 [知乎](https://www.zhihu.com/question/35928898?sort=created) 找到的，感谢)
```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```
2.初步介绍几个brew命令

 *  本地软件库列表：`brew ls`
 *  查找软件：`brew search google`（其中google替换为要查找的软件关键字）
 *  查看brew版本：`brew -v`  
 *  更新brew版本：`brew update`
 
## 3. nvm
```
brew install nvm
```
```
echo "source $(brew --prefix nvm)/nvm.sh" >> .bash_profile
```
```
. ~/.bash_profile
```
```
nvm list
```
### node.js
```
nvm install v15
```
### NPM 换源
`step1` 安装 npm
```
npm i nrm -g --registry=http://registry.npm.taobao.org
```
`step2` 使用 taobao 镜像源
```
nrm use taobao
```
`step3` 安装 yarn
```
npm i yarn -g
```
`step4` 安装 yrm
```
npm i yrm -g
```
`step5` 让yarn使用taobao源
```
yrm use taobao
```
## 4. vue
```
npm i -g @vue/cli
```
## 5. vscode
必备插件
* Code Spell Checker (拼写检查插件，检查单词拼写错误，必须)
* Todo Tree (查看项目中TODO标记)
* Bracket Pair Colorizer (括号高亮匹配插件)
* Git History (Git相关插件)
* GitLens — Git supercharged (Git相关插件)
* DotENV (用于解析env文件，前后台都要装)
* Prettier - Code formatter (格式化代码插件）
* ESLint (代码风格插件)
* Vetur (vue项目必备)
* SCSS Formatter (scss语法插件)
可选 
* Highlight Line (当前行高亮插件)
* vscode-icons (图标插件，美化项目图标)
* markdown-formatter (markdown语法插件)
* Power Mode (酷炫写代码插件-保守者勿用)