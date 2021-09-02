# 图片遮罩层 小知识记录
做业务开发，我们经常遇到图片预览的问题，本人最近的工作很多涉及图片预览，使用 antd UI库，当然牛逼。
但是问题是，我们的cli只支持 antd `4.3.1` 以下的版本，但是antd 最新都已经 `4.17.0` 了。
那么问题来了，我们无法使用 antd 最新的预览图片可以左右切换的，旋转等功能，所以。。。只能自己搞。 
上网上看了很多预览图片的组件，最终选择 `react-photo-view`
`react-photo-view` 这个组件也很完美，唯一不足的就是，一开始显示的图片没有遮罩层，这就把我的图片显示的很low，于是自己写一写，发现非常简单。

## 示例代码
::: details 示例展示
```html
 <div class="div1">
    <div class="see">预览图片</div>
    <img src="http://file.test.i-cbao.com:88/uploads/pictures/2021/0902/c8888785636116d2.png" class="image"/>
 </div>
```
```css
.div1{
    position: relative;      
    height:200px;
    width:200px;
    background-color: #333;
    opacity: 4;     
    }
 .see{
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
  .image{
    position: absolute;    
    height:200px;
    width:200px;
    background-color: pink;
  }
  .div1:hover .image{
    opacity: 0.2;       
    transition: all .6s ease;
  }
```
:::

## 总结
1. 其实也就是一个父元素包裹图片，父元素就是遮罩层
2. 在鼠标悬浮在遮罩层的时候，给图片搞透明，看到的效果就是遮罩层了
3. [点击查看](http://js.jirengu.com/heqocavebi/15/) 效果图