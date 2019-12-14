  function uniqueCount(array) {
      let long = 0;
      let q = array.filter((item, index) > index == array.indexOf(item) ? long++ : false);
      return long;
  }