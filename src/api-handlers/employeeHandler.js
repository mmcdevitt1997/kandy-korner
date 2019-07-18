import apiManager from "./apiManager"

export default Object.create(apiManager, {
  get: {
     value: function (id) {
        return  apiManager.get("employees", id)
      }
  },
getAll: {
    value: function (){
        return apiManager.all("employees")
    }
},
delete: {
    value: function(id){
      return apiManager.delete("employees", id)

    }
}


})
