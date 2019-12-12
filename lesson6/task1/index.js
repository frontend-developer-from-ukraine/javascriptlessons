  function getArrayBounds(arr) {
      if (!Array(arr)) {
          return null;
      }
      return [arr.length, arr[0], arr[arr.length - 1]]
  }