import apiManager from "./apiManager"

export default Object.create(apiManager, {
  get: {
     value: function (id) {
        return  apiManager.get("stores", id)
      }
  },
getAll: {
    value: function (){
        return apiManager.all("stores")
    }
},
delete: {
  value: function(id){
      return apiManager.delete("stores", id)
  }
}

})
