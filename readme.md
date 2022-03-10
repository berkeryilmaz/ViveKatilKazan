# Noodle Api


## Status Checking

### API Status
#### `GET` Request
```http
/api/check/status
```
#### Response
```javascript
{
    "status": "active"
}
```
---
## User

### User Register
#### `POST` Request
```http
/api/user/register
```
#### Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `username` | `string` | exampleUser |  `Required` Your User Name|
| `email` | `string` | example@email.com |  `Required` Your Email|
| `password` | `string` | examplePassword |  `Required` Your Password |
| `role` | `string` | exampleRole | Role|

#### Response
```javascript
{
    "key": "f20653c5880784ea54af8895e1b6f544",
    "secret": "936ab7d873089dec886d8f2bb985a51d0.5997921718769104"
}
```
#### You should save `key` code because you will never be able to access it again. 

---
### User Login
#### `POST` Request
```http
/api/user/login
```
#### Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `email` | `string` | example@email.com |  `Required` Your Email|
| `password` | `string` | examplePassword |  `Required` Your Password |

#### Response
```javascript
{
    "secret": "acc06521fe47fe11cc215359fa990c750.4384380461316266"
}
```
Every `login` request changes `secret` code.

---
### User Change Key
#### `POST` Request
```http
/api/user/changeKey
```
#### Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `email` | `string` | example@email.com |  `Required` Your Email|
| `password` | `string` | examplePassword |  `Required` Your Password |

#### Response
```javascript
{
    "key": "6db6c212c189a64824644e8becf403bb"
}
```
#### You should save `key` code because you will never be able to access it again.

---
### Get All Users
#### `Get` Request
```http
/api/user?key={{key}}&secret={{secret}}
```
#### Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `key` | `string` | 6db6c212c189a64824644e8becf403bb |  `Required`  Key Code|
| `secret` | `string` | acc06521fe47fe11cc215359fa990c750.4384380461316266 | `Required` Secret Code|

#### Response
```javascript
[
    {
        "_id": "6229d2a681cc9ad6f93b11fb",
        "username": "exampleUser",
        "email": "example@email.com",
        "role": "Admin",
        "__v": 0
    },
    {
        "_id": "6229d8d69b37964f050347a9",
        "username": "exampleUser2",
        "email": "example2@email.com",
        "role": "exampleRole2",
        "__v": 0
    },
    {
        "_id": "6229d8e49b37964f050347ab",
        "username": "exampleUser3",
        "email": "example3@email.com",
        "role": "exampleRole3",
        "__v": 0
    }
]
```
---
## Post

### Get All Posts
#### `GET` Request
```http
/api/post/?key={{key}}&secret={{secret}}
```

#### Url Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `key` | `string` | 6db6c212c189a64824644e8becf403bb |  `Required`  Key Code|
| `secret` | `string` | acc06521fe47fe11cc215359fa990c750.4384380461316266 | `Required` Secret Code|


#### Response
```javascript
[
    {
        "_id": "6229da7b9b37964f050347b5",
        "title": "exampleTitle",
        "description": "exampleDescription",
        "user": {
            "_id": "6229d2a681cc9ad6f93b11fb",
            "username": "exampleUser",
            "email": "example@email.com",
            "role": "Admin",
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "6229db429b37964f050347ba",
        "title": "exampleTitle2",
        "description": "exampleDescription2",
        "user": {
            "_id": "6229d2a681cc9ad6f93b11fb",
            "username": "exampleUser",
            "email": "example@email.com",
            "role": "Admin",
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "6229db479b37964f050347bd",
        "title": "exampleTitle3",
        "description": "exampleDescription3",
        "user": {
            "_id": "6229d2a681cc9ad6f93b11fb",
            "username": "exampleUser",
            "email": "example@email.com",
            "role": "Admin",
            "__v": 0
        },
        "__v": 0
    }
]
```
---

### Get Post
#### `GET` Request
```http
/api/post/{{postID}}?key={{key}}&secret={{secret}}
```

#### Url Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `key` | `string` | 6db6c212c189a64824644e8becf403bb |  `Required`  Key Code|
| `secret` | `string` | acc06521fe47fe11cc215359fa990c750.4384380461316266 | `Required` Secret Code|
| `postID` | `string` | 6229da7b9b37964f050347b5 | `Required` Post ID|


#### Response
```javascript
{
    "_id": "6229db479b37964f050347bd",
        "title": "exampleTitle3",
        "description": "exampleDescription3",
        "user": {
        "_id": "6229d2a681cc9ad6f93b11fb",
            "username": "exampleUser",
            "email": "example@email.com",
            "role": "Admin",
            "__v": 0
    },
    "__v": 0
}
```

---
### Insert Post
#### `POST` Request
```http
/api/post/?key={{key}}&secret={{secret}}
```
#### Request Body Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | exampleUser |  `Required` Post Title|
| `description` | `string` | example@email.com |  `Required` Post Description|

#### Url Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `key` | `string` | 6db6c212c189a64824644e8becf403bb |  `Required`  Key Code|
| `secret` | `string` | acc06521fe47fe11cc215359fa990c750.4384380461316266 | `Required` Secret Code|


#### Response
```javascript
{
    {
        "title": "exampleTitle",
        "description": "exampleDescription",
        "user": {
        "_id": "6229d2a681cc9ad6f93b11fb",
            "username": "exampleUser",
            "email": "example@email.com",
            "role": "Admin",
            "__v": 0
    },
        "_id": "6229da7b9b37964f050347b5",
        "__v": 0
    }
}
```

---
### Update Post
#### `PUT` Request
```http
/api/post/{{postID}}?key={{key}}&secret={{secret}}
```
#### Request Body Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `title` | `string` | exampleUser |  `Required` Post Title|
| `description` | `string` | example@email.com |  `Required` Post Description|

#### Url Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `key` | `string` | 6db6c212c189a64824644e8becf403bb |  `Required`  Key Code|
| `secret` | `string` | acc06521fe47fe11cc215359fa990c750.4384380461316266 | `Required` Secret Code|
| `postID` | `string` | 6229da7b9b37964f050347b5 | `Required` Post ID|


#### Response
```javascript
{
    "acknowledged": true,
    "modifiedCount": 1,
    "upsertedId": null,
    "upsertedCount": 0,
    "matchedCount": 1
}
```
---
### Delete Post
#### `DELETE` Request
```http
/api/post/{{postID}}?key={{key}}&secret={{secret}}
```

#### Url Parameters
| Parameter | Type | Example Value | Description |
| :--- | :--- | :--- | :--- |
| `key` | `string` | 6db6c212c189a64824644e8becf403bb |  `Required`  Key Code|
| `secret` | `string` | acc06521fe47fe11cc215359fa990c750.4384380461316266 | `Required` Secret Code|
| `postID` | `string` | 6229da7b9b37964f050347b5 | `Required` Post ID|


#### Response
```javascript
{
    "message": "post deleted"
}
```