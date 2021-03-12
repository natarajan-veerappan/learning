module.exports = () => {

  console.log('\nTriggering string.js')

  // reverse a string
  function reverse(str) {
    if (!str || str.length < 2) {
      return 'nothing to reverse';
    }
    var reversedStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr.push(str[i]);
    }
    return reversedStr.join('');
  }

  let value = reverse("hello world");
  console.log(value);

  function reverse2(str) {
    return str.split('').reverse().join('');
  }

  let value2 = reverse2("natarajan");
  console.log(value2);
  
};