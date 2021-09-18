(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{447:function(e,s,a){"use strict";a.r(s);var t=a(25),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"mac-前端开发环境搭载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mac-前端开发环境搭载"}},[e._v("#")]),e._v(" mac 前端开发环境搭载")]),e._v(" "),a("h2",{attrs:{id:"_1-科学上网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-科学上网"}},[e._v("#")]),e._v(" 1. 科学上网")]),e._v(" "),a("h2",{attrs:{id:"_2-安装-homebrew"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装-homebrew"}},[e._v("#")]),e._v(" 2. 安装 "),a("code",[e._v("homebrew")])]),e._v(" "),a("p",[e._v("1.直接去官网")]),e._v(" "),a("ul",[a("li",[e._v("如果"),a("code",[e._v("curl: (7) Failed to connect to raw.githubusercontent.com port 443: Connection refused")])]),e._v(" "),a("li",[e._v("使用下面的命令：(这里是从 "),a("a",{attrs:{href:"https://www.zhihu.com/question/35928898?sort=created",target:"_blank",rel:"noopener noreferrer"}},[e._v("知乎"),a("OutboundLink")],1),e._v(" 找到的，感谢)")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("2.初步介绍几个brew命令")]),e._v(" "),a("ul",[a("li",[e._v("本地软件库列表："),a("code",[e._v("brew ls")])]),e._v(" "),a("li",[e._v("查找软件："),a("code",[e._v("brew search google")]),e._v("（其中google替换为要查找的软件关键字）")]),e._v(" "),a("li",[e._v("查看brew版本："),a("code",[e._v("brew -v")])]),e._v(" "),a("li",[e._v("更新brew版本："),a("code",[e._v("brew update")])])]),e._v(" "),a("h2",{attrs:{id:"_3-nvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-nvm"}},[e._v("#")]),e._v(" 3. nvm")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("brew install nvm\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('echo "source $(brew --prefix nvm)/nvm.sh" >> .bash_profile\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(". ~/.bash_profile\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nvm list\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js"}},[e._v("#")]),e._v(" node.js")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nvm install v15\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"npm-换源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-换源"}},[e._v("#")]),e._v(" NPM 换源")]),e._v(" "),a("p",[a("code",[e._v("step1")]),e._v(" 安装 npm")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i nrm -g --registry=http://registry.npm.taobao.org\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("step2")]),e._v(" 使用 taobao 镜像源")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("nrm use taobao\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("step3")]),e._v(" 安装 yarn")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i yarn -g\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("step4")]),e._v(" 安装 yrm")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i yrm -g\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("code",[e._v("step5")]),e._v(" 让yarn使用taobao源")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yrm use taobao\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_4-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue"}},[e._v("#")]),e._v(" 4. vue")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm i -g @vue/cli\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"_5-vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-vscode"}},[e._v("#")]),e._v(" 5. vscode")]),e._v(" "),a("p",[e._v("必备插件")]),e._v(" "),a("ul",[a("li",[e._v("Code Spell Checker (拼写检查插件，检查单词拼写错误，必须)")]),e._v(" "),a("li",[e._v("Todo Tree (查看项目中TODO标记)")]),e._v(" "),a("li",[e._v("Bracket Pair Colorizer (括号高亮匹配插件)")]),e._v(" "),a("li",[e._v("Git History (Git相关插件)")]),e._v(" "),a("li",[e._v("GitLens — Git supercharged (Git相关插件)")]),e._v(" "),a("li",[e._v("DotENV (用于解析env文件，前后台都要装)")]),e._v(" "),a("li",[e._v("Prettier - Code formatter (格式化代码插件）")]),e._v(" "),a("li",[e._v("ESLint (代码风格插件)")]),e._v(" "),a("li",[e._v("Vetur (vue项目必备)")]),e._v(" "),a("li",[e._v("SCSS Formatter (scss语法插件)\n可选")]),e._v(" "),a("li",[e._v("Highlight Line (当前行高亮插件)")]),e._v(" "),a("li",[e._v("vscode-icons (图标插件，美化项目图标)")]),e._v(" "),a("li",[e._v("markdown-formatter (markdown语法插件)")]),e._v(" "),a("li",[e._v("Power Mode (酷炫写代码插件-保守者勿用)")])])])}),[],!1,null,null,null);s.default=r.exports}}]);