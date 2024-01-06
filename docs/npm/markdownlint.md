---
title: markdownlint-config-zz
categories:
  - 工程规范
tags:
  - 工程规范
author:
  name: amaris10
  link: https://github.com/amaris10/zz-fe-lint
---

# markdownlint-config-zz

:::tip
文档 规范
:::

支持配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

需要先行安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install markdownlint-config-zz markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "markdownlint-config-zz"
}
```
