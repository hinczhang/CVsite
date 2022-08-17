# cvsite

> A kind of website for CV show

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

When you want to build it, please do these tips:

1. in ```./config/index.js```, please change all the 'assetsPublicPath: '/',' to assetsPublicPath: './'; they are in the 12th and 46th row.

2. in ```./build/utils.js```, please add "publicPath: '../../'," between the 49th and 50th row.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

When you want to cancel the icon "#" in your http path, please add ```mode: 'history'``` under the ```new Router()``` in the router.js. Please add the folder under the nginx path: ```vhosts```, create ```my-vue.conf```:
```
server {
    listen 80;
    server_name my.vue.com;

    charset utf-8;

    location / {
        root /Users/libo/Documents/workspace/Vue-me/my-project/dist;
        index index.html index.htm index.php;
        try_files $uri $uri/ /index.html;
    }
    
    location ^~ /ssm_project/ {
        proxy_pass http://127.0.0.1:8081;
        proxy_cookie_path /127.0.0.1:8081/ /;
         proxy_pass_header Set-Cookie;
        proxy_set_header Host 127.0.0.1:8081;
    }
}
```

after that, add these in the ```nginx.conf```'s http module:
'''
include vhosts/*.conf;
include servers/*;
'''

do not forget to add:
```
127.0.0.1 xxx.com(**domain**)
```