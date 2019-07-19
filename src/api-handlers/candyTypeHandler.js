import apiManager from "./apiManager"

export default Object.create(apiManager, {
  get: {
     value: function (id) {
        return  apiManager.get("candyTypes", id)
      }
  },
getAll: {
    value: function (){
        return apiManager.all("candyTypes")
    }
},
delete: {
    value: function(id){
        return apiManager.delete("candyTypes", id)
    }
},
post: {
    value: function(){
        return apiManager.post("candyTypes")
    }
}



})
