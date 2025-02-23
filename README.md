
 JavaScript design pattern ，23 Class 

第一： 开发环境

    webpack / webpack-dev-server / babel 

第二： 安装

    npm install webpack webpack-cli --save 
    npm install webpack-dev-server html-webpack-plugin --save

第三： other 目录

    other 中是所有写过的代码，和结构。
    这里反而是完整的全部代码。

第四： 设计准则

    1. 小即是美
    2. 让每个程序只做好一件事儿
    3. 快速建立原型
    4. 舍弃高效率而取可移植性
    5. 采用纯文本来存储数据
    6. 充分利用软件的杠杠效应（复用）
    7. 使用Shell脚本来提高杠杆效应和可移植性
    8. 避免强制性的用户界面
    9. 让每个程序都称为过滤器
    
    — 允许用户定制环境
    — 操作系统内核小而轻量化
    — 各部分之和大于整体
    
第五： SOLID 五大设计原则

    S —— 单一职责
    O —— 开放封闭
    L —— 李氏置换
    I —— 接口独立
    D —— 依赖导致
