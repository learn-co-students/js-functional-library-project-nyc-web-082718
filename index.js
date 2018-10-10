fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, cb) {
      const keys = Object.keys(collection)
      for (var i = 0; i < keys.length; i++) {
        cb(collection[keys[i]])
      }
      return collection
    },



    map: function(collection, cb) {
      const result = []
      const keys = Object.keys(collection)
      for (var i = 0; i < keys.length; i++) {
        result.push(cb(collection[keys[i]]))
      }
      return result
    },

    reduce: function(collection, cb, memo) {
      if (!memo) memo = 0
      for (let i = 0; i < collection.length; i++) {
        memo = cb(memo, collection[i], collection)
      }
      return memo
    },

    find: function(collection, predicate) {
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      const result = []
      for (var i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          result.push(collection[i])
        }
      }
      return result
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    // Array functions

    first: function(array, n = 1) {
      return n === 1 ? array.slice(0, n)[0] : array.slice(0, n)
    },

    last: function(array, n = 1) {
      return n === 1 ? array.slice(-n)[0] : array.slice(-n)
    },

    compact: function(array) {
      return this.filter(array, element => !!element)
    },


    sortBy: function(array, cb) {
      return array.slice().sort(function(elem1, elem2) {
        if (typeof elem1 === 'number' && typeof elem2 === 'number') {
          return cb(elem1) - cb(elem2)
        } else {
          return cb(elem1) > cb(elem2)
        }
      })
    },

    flatten: function(array, shallow = false) {
  	  // if (!Array.isArray(array)) {
      //   return [array]
  	  // }
      //
      // let result = []
      //
      // for (let i = 0; i < array.length; i++) {
      //   result = result.concat(this.flatten(array[i]))
      // }
      // return result


      let keepGoing = true
      let hasArray = true
      let runningResult = []
      while (keepGoing && hasArray) {
        let result = []

        hasArray = !!array.find(elem => Array.isArray(elem))
        array.forEach(function(elem) {
          result = result.concat(elem)
        })
        array = result
        runningResult = result

        if (shallow) {
          keepGoing = false
        }

      }

      return runningResult

    },







    uniq: function(array, isSorted = false, cb = n => n) {
      const result = []
      if (isSorted) {
        array.forEach(function(elem) {
          if (cb(result[result.length - 1]) !== cb(elem)) {
            result.push(elem)
          }
        })
      } else {
        const computed = []
        array.forEach(function(elem) {
          if (computed.indexOf(cb(elem)) === -1) {
            result.push(elem)
            computed.push(cb(elem))
          }
        })
      }
      return result;
    },

    keys: function(mod) {
      return Object.keys(mod)
    },

    values: function(obj) {
      const values = []
      for (let key in obj) {
        values.push(obj[key])
      }
      return values
    },

    functions: function(mod) {
      const result = []
      for (let key in mod) {
        typeof mod[key] === 'function' ? result.push(key) : null
      }
      return result.sort()
    }

  }
})()

fi.libraryMethod()
