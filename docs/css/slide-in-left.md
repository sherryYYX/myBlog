## css 特效 ---- 从左边滑出

还是老规矩，说一说为什么会做这个特效
其实，这是公司前同事的一个需求，我俩同在试用期的时候，最终决定他是否能留下的一个需求，当然，当时他和我都没有想到。
不说废话，直接开动。

## 示例代码

::: details 示例展示
```html
<div class="slide-in-left">
  欢迎大家，来到我的博客！！！！！！！！！！！！！！！！！！！
</div>
```
```css
.slide-in-left {
  width:100vw;
  height:100px;
  background: #aaa;
	-webkit-animation: slide-in-left 6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-100vw);
            transform: translateX(-100vw);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
```
:::

## 总结
这就完了？
没错，已经结束，完全css
我们前端开发平时大多不怎么对css精耕细作，只要会基本布局，居中，基本都ok了。
但是，有的时候就是那么特别，像官网这种炫技的网页，它就需要这些乱七八糟的东西。
说实话，就这需求，如果当时给我，我和他结果一样。能做出来，但是要花时间。
所以导致，我后来对这个需求念念不忘。
这里的代码都是用的css，术业有专攻，推荐给你，当出来一堆乱七八糟的动效时，不要惊慌，已经给你准备好了，so easy。
* [点击查看](https://animista.net/play/basic/rotate-90/rotate-90-top-cw) css 动效大全
* 最后，附上本次所说从左滑出的效果图
* [点击查看](http://js.jirengu.com/wogaroteqo/22/)  从左滑出动效图


