# laravel インストール方法

1. `cd docker`
2. `docker compose build --no-cache` (ビルドする)
3. `docker compose up -d` (コンテナをたてる)
4. `docker compose exec app bash` (app コンテナに入る)
5. `composer create-project --prefer-dist laravel/laravel . "9.*"` (src 配下に laravel 9 をインストール)
6. ブラウザで`http://localhost`にアクセスし、「laravel」が表示されることを確認。

# db接続設定
src/.envを以下のように変更して下さい
```
DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=password
```
<img width="202" alt="スクリーンショット 2022-06-07 16 16 15" src="https://user-images.githubusercontent.com/74942852/172319499-e9457712-e1c6-4f3b-aa64-53a748b39d1a.png">

error対処
viteが定義されてない -> npm i で初期化  
logs -> chmod -R 777 storage logs  
database -> php artisan migrate:refresh --seed  
require index.php -> composer update  

スタート方法  
cd ./docker | docker compose up -d
docker compose exec app sh 
cd ../src | npm run dev

## week61 webapp 投稿処理後の画像
![スクリーンショット 2023-11-04 102254](https://github.com/posse-ap/gen3.0-Yuma-Tsukakoshi/assets/107422037/3f5de6ee-d0e8-4ade-9b89-6fad93c58b27)
![スクリーンショット 2023-11-04 102304](https://github.com/posse-ap/gen3.0-Yuma-Tsukakoshi/assets/107422037/54cdabfc-a1ae-4f14-ba8a-c047d69c35eb)

## week62 削除処理後の画像
![スクリーンショット 2023-11-05 151240](https://github.com/posse-ap/gen3.0-Yuma-Tsukakoshi/assets/107422037/ff4f106a-db00-4384-af35-c6c4628d9ea1)
![スクリーンショット 2023-11-05 151249](https://github.com/posse-ap/gen3.0-Yuma-Tsukakoshi/assets/107422037/cf0b4e7c-1777-4884-b6cc-71db47cea14f)
