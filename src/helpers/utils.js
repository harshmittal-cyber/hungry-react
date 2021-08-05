export function getFormBody(params) {
  let formBody = [0];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + "=" + encodedValue);
  }
  return formBody.join("&"); // 'username=aakash&password=123213'
}
