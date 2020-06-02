# http-smart-error
Subclass of [SmartError](https://www.npmjs.com/package/smart-error) for handling http errors.

## Installation
```bash
npm install http-smart-error --save
```

## Usage
```javascript
import HttpSmartError from 'http-smart-error';

console.log(HttpSmartError.create(400)); // Http error with 400 status code, message "Bad request" and code "ERR_BAD_REQUEST"

console.log(HttpSmartError.create(403, 'User has no permissions to do that.', 'no_permission', { missing_permission: 'read.something'})); // Http error with 403 status code, message "User has no permissions to do that.", code "ERR_NO_PERMISSION" and extra field "missing_permission" with "read.something" value.
```

## Migration to V4
- `smart-error` module is as peer dependency. It needs to be installed separately.