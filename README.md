# Circle CI Crawing Test

## 検証内容
- CircleCIでpuppeteerによるクローリングができるか
- CircleCIでチェックアウトしたソースを変更・コミットし、GitHubにpushできるか

## 結果
- CircleCIでpuppeteerによるクローリングはできた
    - クローリングのために、以下の指定が必要だった(https://discuss.circleci.com/t/puppeteer-fails-on-circleci/22650/5)
        ```
        puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']})
        ```

- CircleCIでソースを変更・コミットできた
    - コミットするために、以下を実施しないといけなかった。
        ```
        $ git config --global user.name "hogehoge"
        $ git config --global user.email "hogehoge@herohero.com"
        ```

- CircleCiでGitHubにpushできた
    - [Adding an SSH Key to CircleCI](https://circleci.com/docs/2.0/add-ssh-key/) を実施。CircleCIに登録する秘密鍵とGitHubに登録する公開鍵のペアを以下を実施しないといけなかった。
        ```
        $ ssh-keygen -m pem
        ```

## .circle/config.yml について
- job実行時、config.yml内の環境変数AWSCLI_LATEST_VERSIONの値がAWS CLIの最新バージョンでなかったら、最新バージョンに更新する
- masterブランチへのpush時と15:00(UTC)に実行する

## index.js について
- AWS CLIの最新バージョンをGithub上のリリースページで確認するツール

### 仕様
- AWS CLIの最新バージョンをversionファイルに出力する

### 使い方
```
$ npm install
$ node index.js
```
