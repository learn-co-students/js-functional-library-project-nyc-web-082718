fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (i=0; i < collection.length; i++) {
          callback(collection[i])
        }
      } else {
        for (variable in collection) {
          callback(collection[variable])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []

      if (Array.isArray(collection)) {
        for (i=0; i < collection.length; i++) {
          newCollection.push(callback(collection[i]))
        }
      } else {
        for (variable in collection) {
          newCollection.push(callback(collection[variable]))
        }
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      // let sum = 0
      for (i=0; i < collection.length; i++) {
        if (acc) {
          acc = callback(acc, collection[i], collection);
        } else {
          acc = acc || 0
          acc = callback(acc, collection[i], collection);
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      for (i=0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      const newArray = []
      for (i=0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          newArray.push(collection[i])
        }
      }
      return newArray
    },

    size: function(collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return (Object.keys(collection)).length
      }
    },

    first: function(array, n) {
      if (n === undefined) {
        return array[0]
      } else {
        const newArray = array.slice(0, n)
        return newArray
      }
    },

    last: function(array, n) {
      if (n === undefined) {
        return array[array.length-1]
      } else {
        const newArray = array.slice(array.length - n)
        return newArray
      }
    },

    compact: function(array) {
      const newArray = []
      for (i=0; i < array.length; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback) {
      const newArray = [...array]
      newArray.sort(function(a, b) {
        return (callback(a) - callback(b))
      })
      return newArray
    },

    flatten: function(array, shallow) {
      newArray = []
      if (shallow) {
        for (const key in array) {
          if (typeof array[key] === 'object') {
            for (const nestedKey in array[key]) {
              newArray.push((array[key][nestedKey]))
            }
          } else {
            newArray.push((array[key]))
          }
        }
      return newArray
      } else {
        // if (typeof array === 'object') {
        //   for (const key in array) {
        //     fi.flatten(array[key])
        //   }
        // } else {
        //   newArray.push(array)
        // }

      //   const stack = [...array];
      //   const res = [];
      //   while (stack.length) {
      //     const next = stack.pop();
      //     if (Array.isArray(next)) {
      //       stack.push(...next);
      //     } else {
      //       res.push(next);
      //     }
      //   }
      // return res.reverse();
      return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(fi.flatten(val)) : acc.concat(val), [])
      }
    },

    uniq: function(array, isSorted, callback) {
      const newArray = []
      const callbackArray = []
      for (i=0; i < array.length; i++) {
        if (callback) {
          if (callbackArray.includes(callback(array[i]))) {

          } else {
            newArray.push(array[i])
            callbackArray.push(callback(array[i]))
          }
        } else {
          if (newArray.includes(array[i])) {

          } else {
          newArray.push(array[i])
          }
        }
      }
      return newArray
    },

    keys: function(object) {
      const newArray = []
      for (const key in object) {
        newArray.push(key)
      }
      return newArray
    },

    values: function(object) {
      const newArray = []
      for (const key in object) {
        newArray.push(object[key])
      }
      return newArray
    },

    functions: function(object) {
      const newArray = []
      for (const key in object) {
        if (typeof(object[key]) === "function") {
          newArray.push(key)
        }
      }
      return newArray
    },
  }
})()

fi.libraryMethod()
