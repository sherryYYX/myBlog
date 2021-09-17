## markDown 语法

* 基本语法

* 表格语法

# `Markdown` 表格

## 基本表格

基本表格即标准分割的表格，无合并单元格等格式，规整的行列结构。

**基本表格语法：**

```markdown
|表头1|表头2|表头3|……|表头n|
|-----|-----|-----|-----|-----|
|列1|列2|列3|……|列n|
|列1|列2|列3|……|列n|
```

**实际效果：**

|表头1|表头2|表头3|……|表头n|
|-----|-----|-----|-----|-----|
|列1|列2|列3|……|列n|
|列1|列2|列3|……|列n|

**居中显示：**

```markdown
|表头1|表头2|表头3|……|表头n|
|:-----:|:-----:|:-----:|:-----:|:-----:|
|列1|列2|列3|……|列n|
|列1|列2|列3|……|列n|
```

**实际效果：**

|表头1|表头2|表头3|……|表头n|
|:-----:|:-----:|:-----:|:-----:|:-----:|
|列1|列2|列3|……|列n|
|列1|列2|列3|……|列n|


## 甘特图

```mermaid
  gantt         
       dateFormat  YYYY-MM-DD   
       title 使用mermaid语言定制甘特图

       section 任务1
       已完成的任务           :done,    des1, 2014-01-06,2014-01-08
       正在进行的任务               :active,  des2, 2014-01-09, 3d
       待完成任务1               :         des3, after des2, 5d
       待完成任务2              :         des4, after des3, 5d
```

```mermaid
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid
excludes weekdays 2014-01-10

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d           
```

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

```mermaid
gantt
dateFormat  YYYY-MM-DD
title       Adding GANTT diagram functionality to mermaid
excludes    weekends
%% (`excludes` accepts specific dates in YYYY-MM-DD format, days of the week ("sunday") or "weekends", but not the word "weekdays".)

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2              :         des4, after des3, 5d

section Critical tasks
Completed task in the critical line :crit, done, 2014-01-06,24h
Implement parser and jison          :crit, done, after des1, 2d
Create tests for parser             :crit, active, 3d
Future task in critical line        :crit, 5d
Create tests for renderer           :2d
Add to mermaid                      :1d

section Documentation
Describe gantt syntax               :active, a1, after des1, 3d
Add gantt diagram to demo page      :after a1  , 20h
Add another diagram to demo page    :doc1, after a1  , 48h

section Last section
Describe gantt syntax               :after doc1, 3d
Add gantt diagram to demo page      :20h
Add another diagram to demo page    :48h
```