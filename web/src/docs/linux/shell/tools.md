## NTFS无法挂载问题
``` bash
apt install ntfs-3g
ntfsfix /dev/sda1
```

## 网站压力测试
``` bash
siege -c 200 -r 100 http://www.baidu.com
ab -c 100 -n 1000 http://www.baidu.com/index.php
```
Transactions: 总共测试次数<br>
Availability: 成功次数百分比<br>
Elapsed time: 总共耗时多少秒<br>
Data transferred: 总共数据传输<br>
Response time: 等到响应耗时<br>
Transaction rate: 平均每秒处理请求数<br>
Throughput: 吞吐率<br>
Concurrency: 最高并发<br>
Successful transactions: 成功的请求数<br>
Failed transactions: 失败的请求数<br>

## 端口扫描
``` bash
nmap www.baidu.com
```

## 查看端口
``` bash
netstat -anp | grep 80
```

# 过滤内容
## 1) grep : 过滤字符
``` bash
cat /etc/passwd | grep 'root'
```

## 2) cut : 截取字段
``` bash
# ":"分割字符,截取第一段
cat /etc/passwd | cut -d ":" -f 1
# 截取段落
head -n 2 /etc/passwd | cut -c 2
head -n 2 /etc/passwd | cut -c 1-10
head -n 2 /etc/passwd | cut -c 2,4
```
语法 : cut -d "分隔字符" [-cf] n 这里的n是数字<br>
-d : 后面跟分隔字符,分隔字符要用双引号括起来<br>
-c : 后面接的是第几个字符<br>
-f : 后面接的是第几个区块<br>