# Circle CI Crawing Test

## 検証内容
- CircleCIでpuppeteerによるクローリングが可能であるか

## 結果
- CircleCIでpuppeteerによるクローリングは可能だった
    - クローリングのために、以下の指定が必要だった
    ```
    puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
    ```
## 参考
- https://discuss.circleci.com/t/puppeteer-fails-on-circleci/22650/5


## index.js について
- AWS CLIの最新バージョンであるかをGithub上のリリースページで確認するツール

### 仕様
- 引数に指定した値がAWS CLIの最新バージョンだったら、終了ステータス0を返す。最新でなかったら1を返す。

### 使い方
```
$ npm install
$ node index.js 1.16.81 
```
