# 🚀 Deployment

## ⚙️ Install tools
1. Docker - [link](https://docs.docker.com/engine/install/ubuntu/)
2. Docker-compose - [link](https://docs.docker.com/compose/install/)

## 🐳 How to deploy with docker
1. go to **ROOT_PROJECT** path

2. create **.env** file and put into folder **dev** or **prod**. It's depend on what are you doing right now

**for dev**

```
sudo docker-compose -f deployment/dev/docker-compose.build.yaml build
```

**for production**
```
sudo docker-compose -f deployment/prod/docker-compose.build.yaml build
```

## 🎊 Starting service

1 Go to `deployment`
```
cd deployment
```

2 Export variable to environment **Remark run this script for dev outside docker only**
```
source setup_env_dev.sh
```

**for dev**
```
sudo docker-compose -f deployment/dev/docker-compose.yaml -p cpe-ctfd-dev up -d
```

**for production**
```
sudo docker-compose -f deployment/prod/docker-compose.yaml -p cpe-ctfd-prod up -d
```
