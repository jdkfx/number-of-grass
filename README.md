# jdkfx/number-of-grass
🌱Githubのcontribution数をTwitterのユーザー名に表示する

# Getting Started
[Twitter Developer](https://developer.twitter.com/ja) でアプリを作成して、キーを取得。

GitHubからプロジェクトをクローン
```
$ git clone git@github.com:jdkfx/number-of-grass.git
```

プロジェクトに移動
```
$ cd number-of-grass/
```

npm install
```
$ npm install
```

.envファイルを作成して適宜環境変数を設定
```
APIKey=XXXXX
APISecretKey=XXXXX
AccessToken=XXXXX
AccessTokenSecret=XXXXX
```

index.jsを編集
```
...

var url = `https://github.com/users/jdkfx/contributions`; // 自分のGithubIDを設定

...

client.post('account/update_profile', {"name" : `Haruki Tazoe🍒🌱${result[result.length - 1].count}`}, function(error){ // 自分のTwitterのユーザー名に合わせて編集
    if (!error) {
        console.log('success!');
    } else {
        console.log('error');
    }
});

...

```

スクリプトの実行
```
$ node index.js
```