fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(let key in collection) {
        callback(collection[key])
      }
      return collection
    },

    map: function(collection, callback) {
      let newAr = []
      for(let key in collection) {
        newAr.push(callback(collection[key]))
      }
      return newAr
    },

    reduce: function(collection, callback, acc=0) {
      for(let i = 0; i < collection.length; i++) {
         current = collection[i]
         acc = callback(acc, current)
      }
      return acc
    },

    find: function(collection, callback) {
      for (let key in collection) {
        if(callback(collection[key]) == true) {
          return collection[key]
        }
      }
    },

    filter: function(collection, callback) {
      let newAr = []
      for (let key in collection) {
        if(callback(collection[key])) {
          newAr.push(collection[key])
        }
      }
      return newAr
    },

    size: function(collection, callback) {
      let newAr = []
      for (let key in collection) {
        newAr.push(key)
      }
      return newAr.length
    },

    first: function(collection, n) {
      if (!n) {
        return collection[0]
      }
      else {
        return collection.slice(0, n)
      }
    },

    last: function(collection, n) {
      if (!n) {
        return collection[collection.length - 1]
      }
      else {
        return collection.slice(-n)
      }
    },

    compact: function(collection) {
      let newAr = []
      for (let key in collection) {
        if (collection[key]) {
          newAr.push(collection[key])
        }
      }
      return newAr
    },

    sortBy: function(collection, callback) {
      let newAr = collection.slice();
      return newAr.sort(function(a, b) {return callback(a) - callback(b)
      })
    },

    flatten: function(collection) {

    },

    uniq: function(collection, callback) {
      
    },


  }
})()

fi.libraryMethod()
