fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, callback) {
      let numArr = Object.values(array)
      for (let i = 0; i < numArr.length; i++) {
        callback(numArr[i])
      }
      return array
    },

    map: function(collection, callback) {
      let finalArr = []
      let newArr = Object.values(collection)
      for (let i = 0; i < newArr.length; i++) {
        finalArr.push(callback(newArr[i]))
      }
      return finalArr
    },

    reduce: function(collection, callback, acc = 0) {
      //callback(acc=0,val,collection)
      let sum = acc
      let newArr = Object.values(collection)
      for (let i = 0; i < newArr.length; i++) {
        sum += callback(acc = 0, newArr[i], newArr)
      }
      return sum
    },

    find: function(collection, predicate) {
      let newArr = Object.values(collection)
      for (let i = 0; i < newArr.length; i++) {
        if (predicate(newArr[i])) {
          return newArr[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let final = []
      let newArr = collection
      for (let i = 0; i < newArr.length; i++) {
        if (predicate(newArr[i])) {
          final.push(newArr[i])
        }
      }
      return final
    },

    size: function(collection){
      let newArr = Object.values(collection)
      return newArr.length
    },

    first: function(array, n = 1) {
      let elements = array.slice(0, n)
      if (elements.length > 1) {
        return elements
      } else {
      return elements[0]
      }
    },

    last: function(array, n = 1) {
      let elements = array.slice(-n)
      if (elements.length > 1) {
        return elements
      } else {
      return elements[0]
      }
    },

    compact: function(array) {
      let finArr = []
      for (let i = 0; i < array.length; i++) {
        if (!!array[i]) {
          finArr.push(array[i])
        }
      }
      return finArr
    },

    sortBy: function(array, callback) {
      let finArr = []
      for (let i = 0; i < array.length; i++) {
        finArr.push(callback(array[i]))
      }
      return finArr.sort(function(a, b){return a - b})
    },

    flatten: function(array, shallow = false) {
      let flatArr = []
      if (!shallow) {
        for (let i = 0; i < array.length; i++) {
          if (typeof(array[i]) === 'object') {
            flatArr = flatArr.concat(fi.flatten(array[i]))
          } else {
            flatArr.push(array[i])
          }
        }
      } else {
        for (let i = 0; i < array.length; i++) {
          flatArr = flatArr.concat(array[i])
        }
      }
      return flatArr
    },

    uniq: function(array, [isSorted], [callback]) {

    },

    keys: function(object) {
      let newArr = []
      for (const key in object) {
        newArr.push(key)
      }
      return newArr
    },

    values: function(object) {
      let newArr = []
      for (const key in object) {
        newArr.push(object[key])
      }
      return newArr
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
