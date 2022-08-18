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

1. in `./config/index.js`, please change all the `assetsPublicPath: '/',` to assetsPublicPath: `./`; they are in the 12th and 46th row.

2. in `./build/utils.js`, please add `publicPath: '../../',` between the 49th and 50th row.

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

When you want to cancel the icon "#" in your http path, please add ```mode: 'history'``` under the ```new Router()``` in the `router.js`.   

In nginx, please add these in the `ngnix.conf`:  
```
    upstream cvsite{
    	server $YOUR_IP$:$YOUR_PORT$;
	}
	server {
	    listen 80; #拦截端口
		server_name $YOUR_DOMAIN$; #域名配置
		root $YOUR_ROOT$;
		index index.html;
		try_files $uri $uri/ /index.html;
		location / {
			proxy_set_header Host $host;
			proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
			proxy_pass http://cvsite; #如果是ssl更改成https
		}
		location @router {
            rewrite ^.*$ /index.html last;
        }
    }
```