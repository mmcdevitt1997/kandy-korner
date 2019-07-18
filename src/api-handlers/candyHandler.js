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
}

})
