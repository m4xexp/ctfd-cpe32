# ⚔️ Data Service

This service is using for handle request from user to get a data from a database or a structure data. This service using `NestJS`, `GraphQL` and `Prisma (ORM)` for main framework

## ⚙️ How to install

### 🔩 For development
1) With NodeJs

**For this method, please make sure you have [`NodeJS`][1], [`Yarn`][2] on your computer**

1.1) Goto Data service's folder
```
cd ROOT_PROJECT/backend/data-service
```

1.2) Install package
```
yarn install
```

### 💡 For production

1) With NideJs

**For this method, please make sure you have [`NodeJS`][1], [`Yarn`][2] on your computer**

1.1) Goto Data service's folder
```
cd ROOT_PROJECT/backend/data-service
```

1.2) Install package
```
yarn build
```

## 🏋️‍♀️ How to start service
### 🔨 For development
1. With Nodejs

**For this method, please make sure you have [`NodeJS`][1], [`Yarn`][2] on your computer**

1.1) Goto Data service's folder
```
cd ROOT_PROJECT/backend/data-service
```

1.2) Start service
```
# development
yarn run start

# watch mode (Hot-reloading)
yarn run start:dev

# unit tests
yarn run test
```

### 💡 For production
1. With Nodejs
   
**For this method, please make sure you have [`NodeJS`][1], [`Yarn`][2] on your computer**

1.1) Goto Data service's folder
```
cd ROOT_PROJECT/backend/data-service
```

1.2) Start service
```
# production mode
yarn run start:prod
```

## 📟 Setup database

When you first install software, you need to create table and initlize data in database.

For mirgrate database script
1. Create Prisma Class

```
yarn prisma generate --schema=./src/providers/databases/prisma/schema.prisma
```

2. Create Migrate and seed Database
```
yarn prisma db push --force-reset --accept-data-loss --schema=./src/providers/databases/prisma/schema.prisma
```


## 📚 Reference
- Nodejs [link][1]
- Yarn [link][2]


[1]: https://nodejs.org/en/download/
[2]: https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable