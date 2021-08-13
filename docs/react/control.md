## 受控组件 和 非受控组件
接触`react`,在博客上经常看到人写受控组件和非受控组件的分析，刚开始看了好几篇，都是满头雾水
在使用了一段时间的 react 后，开始看看 react 文档，发现官网文档比市面上各种分析的文章都清晰，本来很简单的问题非要复杂化，这就是IT的通病。

### 大致概念
1. 官网讲的很清晰，在使用表单时，我们会遇到 受控组件 和 非受控组件的问题。
2. 因为 React 的特殊性，它是用 state 来作状态管理的。
3. 受控组件：表单元素类似常见的 input、select 之类的，值由 react 的 state 来控制。
4. 非受控组件：很简单，就是不受 react 的 state 控制啦！
   
是不是感觉很智障！！！
### 受控组件 
::: details 受控组件
```javaScript

import { useState } from "react";

// 受控组件
const Form1 = () => {
  const [data, setdata] = useState({ name: "", gender: "" });

  const handleChange = (event) =>
    setdata({ ...data, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    console.log(data); // {name: "tony", gender: "男"}
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          名字：
          <input
            name="name"
            type="text"
            value={data.name}
            onChange={handleChange}
          ></input>
          性别:
          <input
            name="gender"
            type="text"
            value={data.gender}
            onChange={handleChange}
          ></input>
        </label>
        <input type="submit" value="提交" />
      </form>
    </>
  );
};

export default Form1;

```
:::

### 非受控组件
::: details 非受控组件
```javaScript
import { createRef } from "react";

// 非受控组件
const Form = () => {
  const userName = createRef();
  const gender = createRef();
  const handleSubmit = (event) => {
    let form = {
      userName: userName.current.value,
      gender: gender.current.value
    };
    console.log(form); // {name: "eee", gender: "ddd"}
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={userName} />
          gender:
          <input type="text" ref={gender} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

// 可以看出，这里非受控，使用的是ref来建数据
export default Form;

```
:::