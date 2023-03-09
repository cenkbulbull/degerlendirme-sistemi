<template>
  <router-view/>
</template>
<script>
  import axios from "axios"
  import {onMounted} from "vue"
  import {useStore} from "vuex"
  export default{
   setup(){
    const store = useStore()

    /*onMounted(()=>{
      axios.get("http://localhost:3000/api/site/top4")
      .then((site)=>{
        //console.log(site.data)
        store.dispatch("setMutationTop4",site.data)

      }).catch((err)=>{
        console.log(err)
      })
    })*/

    onMounted(()=>{
      store.dispatch("setMutationTop4")
      store.dispatch("setMutationRegistered")
    })
  }
}
</script>
