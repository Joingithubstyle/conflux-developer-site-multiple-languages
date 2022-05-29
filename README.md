# Веб-сайт разработчика Conflux

Этот веб-сайт создан с использованием [Docusaurus 2](https://v2.docusaurus.io/), современный
генератор статических сайтов. Он поддерживает извлечение документов из любого репозитория и
развертывается на сайте developer.conflux-chain.org.

Чтобы отправить репозиторий, прочитайте документ [тут](./docs/submit-a-repo.md).

### Установка 

```shell
$ git clone --recurse-submodules https://github.com/Conflux-Chain/conflux-developer-site
$ cd conflux-developer-site
$ yarn
```

**Примечание: команда `yarn REINIT` запустит сценарий оболочки, который очищает все
незафиксированные изменения в этом каталоге, включая все подмодули в `docs`
папке. Он установит все в то же состояние, что и ваш `origin/master`.** 

### Локальная разработка

```
$ yarn start
```

Эта команда запускает локальный сервер разработки и открывает окно браузера.
Большинство изменений отражаются в реальном времени без перезапуска сервера.

### Сборка

```
$ yarn build
```

Эта команда создает статический контент в каталоге `build` и может
обслуживается с помощью любой службы хостинга статического содержимого.

### Содействие

Хотите внести свой вклад в сайт разработчиков Conflux? Потрясающе! Вы можете найти информацию о
участие в этом проекте тут
[issues](https://github.com/Conflux-Chain/conflux-developer-site/issues)

Если вы не знаете, как внести свой первый вклад, пожалуйста, обратитесь сюда:
[First Contributions]([https://github.com/firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions/blob/master/translations/README.ru.md)) 

