import apiManager from "./apiManager"

export default Object.create(apiManager, {
  get: {
     value: function (id) {
        return  apiManager.get("candys", id)
      }
  },
getAll: {
    value: function (){
        return apiManager.all("candys")
    }
},
delete: {
    value: function(id){
        return apiManager.delete("candys", id)
    }
},
post: {
    value: function(newData){
        return apiManager.post("candys",newData)
    }
},
put: {
    value: function(editData){
    return apiManager.put("candys",editData)
    }
}

})
