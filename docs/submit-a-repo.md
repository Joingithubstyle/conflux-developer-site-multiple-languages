# Как отправить репо 

- добавить метаданные в файл документа уценки
- создайте pr, чтобы добавить идентификатор файла уценки в [sidebars
  config](../sidebars.js)  файл и добавьте свой репозиторий как подмодуль git в
  [docs](./docs) папку   
- добавьте конфигурацию ci, чтобы запустить рабочий процесс сборки этого репо в ci вашего репо конфигурация 

## Добавьте метаданные в ваш файл уценки 

Вам нужно добавить синтаксис использования метаданных ниже в начале вашего файла уценки. Вам нужно только добавить метаданные к тем файлам, которые вы хотите опубликовать на сайт разработчика. 

Этот `custom_edit_url` URL-адрес github для редактирования текстовых файлов.
`https://github.com/Conflux-Chain/{repo_name}/edit/{branch_name}/{path_to_md}`

```md
---
id: quick_start
title: Quick Start
custom_edit_url: https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/01_Examples/00_Low_Level_CFX_Transfer.md
hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
---
```

Вы можете найти документацию и спецификацию для каждых метаданных
[тут](https://v2.docusaurus.io/docs/markdown-features#markdown-headers
"docusaurus markdown-headers documentation").  

Требуется `id`, `title` а также  `custom_edit_url`. 

## Создайте PR, чтобы добавить свою документацию 

### Добавьте свой репозиторий в `docs`

Используйте `git submodule add https://<your-repo-url>.git docs/<your-repo-folder-name>`
чтобы добавить свое репо в  [docs](./docs).

### Добавьте свой файл уценки в `sidebar.js`

Файл `sidebar.js`похож на тот, что ниже. Каждая уценка может быть добавлена ​​как  `{ type:
"doc", folder: "conflux-portal", id: "quick_start" }`. `id` это идентификатор в метаданные уценки, `folder` папка подмодуля git в [docs](./docs)
папку, `type` is `doc`. 

Вы создаете свою собственную структуру документа с помощью `category`.

```js
module.exports = {
  docs: {
    en: [
      {
        type: "category",
        label: "Learn About Conflux",
        items: [
          { type: "doc", id: "conflux_overview", folder: "introduction" },
          { type: "doc", id: "core_concepts", folder: "introduction" },
          {
            type: "category",
            label: "Concepts",
            items: [{ type: "doc", id: "treegraph", folder: "introduction" }]
          }
        ]
      },
      {
        type: "category",
        label: "Try Conflux",
        items: [
          { type: "doc", folder: "introduction", id: "try_conflux_core" },
          {
            type: "doc",
            folder: "introduction",
            id: "make_your_first_transaction"
          }
        ]
      },
      {
        type: "category",
        label: "Try Conflux Portal",
        items: [{ type: "doc", folder: "conflux-portal", id: "quick_start" }]
      }
    ]
  }
};
```

## Добавьте конфигурацию CI, чтобы запустить рабочий процесс сборки этого репозитория 

Как только вы создадите свой PR, мы проверим ваш репозиторий и отправим PR, чтобы добавить CI конфиг. 

## Почему это работает 

Конфигурация CI в вашем репозитории запустит рабочий процесс сборки этого репо.

Рабочий процесс потянет ваше репо, проверьте, обновляются ли какие-либо файлы документов. между старой версией подмодуля и вашей **основной** веткой используйте сборку docusaurus документ и обновить developer.confluxnetwork.org. 
