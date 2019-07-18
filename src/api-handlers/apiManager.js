const remoteURL = "http://localhost:5002"

export default Object.create(null, {
   get: {
       value: function (resource, id) {
           return fetch(`${remoteURL}/${resource}/${id}`).then(data => data.json())
       }
   },
   all: {
       value: function (resource) {
           return fetch(`${remoteURL}/${resource}`).then(data => data.json())
       }
   },

   delete: {
       value: function (resource, id) {
           return fetch(`${remoteURL}/${resource}/${id}`, {
               method: "DELETE"
           }).then(e => e.json())
       }
   },
   search: {
       value: function (resource, id) {
           return fetch(`${remoteURL}/${resource}/${id}`).then(data => data.json())
       }
   },

})