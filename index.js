fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const collKeys = Object.keys(collection)
      for (var i = 0; i < collKeys.length; i++) {
        const thisKey = collKeys[i]
        callback(collection[thisKey])
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = []
      this.each(collection, function(item) {
        const newElement = callback(item)
        newArray.push(newElement)
      })
      return newArray
    },

    reduce: function(collection, callback, acc = 0) {
      let sum = acc
      this.each(collection, function(item) {
        sum = callback(sum, item, collection)
      })
      return sum
    },


    find: function(collection, predicate) {
      let result
      let i = 0
      while (i < collection.length && !result) {
        console.log(i, collection[i])
        if (predicate(collection[i])) {
          result = collection[i]
          return result
        }
        i++
      }
    },

    filter: function(collection, predicate) {
      let result = []
      this.each(collection, function(item) {
        if (predicate(item)) {
          result.push(item)
        }
      })
      return result
    },

    size: function(collection) {
      let count = 0
      this.each(collection, function(item) {
        count++
      })
      return count
    },

    first: function(array, n = 1) {
      if (n === 1) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n = 1) {
      if (n === 1) {
        return array.slice(-1)[0]
      } else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      const result = this.filter(array, function(item) {
        return !!item
      })
      return result
    },

    sortBy: function(array, callback) {
      const newArr = [...array]
      return newArr.sort(function(a, b) {
        return callback(a) > callback(b)
      })
    },

    flatten: function(array, shallow = false) {
      let results = []
      if (!shallow) {
        this.each(array, function(item) {
          // console.log(`array to be flattened: ${array}`)
          // console.log(`current results: ${results}`)

          if (typeof(item) !== 'object') {
            results.push(item)
          } else {
            results = results.concat(fi.flatten(item))
          }
        })
      } else {
        this.map(array, function(item) {
          if (typeof(item) !== 'object') {
            results.push(item)
          } else {
            results = results.concat(item)
          }
        })

      }
      return results
    },

    uniq: function(array, isSorted = false, callback = (x => x)) {
      let result = []
      let callbackArray = array.map(callback)
      if (!isSorted) {
        for (var i = 0; i < array.length; i++) {
          if (!callbackArray.slice(0, i).includes(callbackArray[i])) {
            result.push(array[i])
          }
        }
      } else {
        for (var i = 0; i < array.length; i++) {
          if (callbackArray[i - 1] !== (callbackArray[i])) {
            result.push(array[i])
          }
        }
      }
      return result
    },

    keys: function(obj) {
      const results = []
      for (const key in obj) {
        results.push(key)
      }
      return results
    },

    values: function(obj) {
      const results = []
      for (const key in obj) {
        results.push(obj[key])
      }
      return results
    },


    functions: function(obj) {
      const results = []
      for (const key in obj) {
        if (typeof(obj[key]) === "function") {
          results.push(key)
        }
      }
      return results
    }

  }
})()
