import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    Questions:[
        {
          id:1,
          question:"Site hızını puanlayın"
        },
        {
          id:2,
          question:"Resim optimizasyonu ve boyutlarını puanlayın"
        },
        {
          id:3,
          question:"Web site kullanılabilirliği ve UI/UX süreçlerini puanlayın"
        },
        {
          id:4,
          question:"Site tasarımının özgünlüğünü puanlayın"
        },
        {
          id:5,
          question:"Renk uyumunu puanlayın"
        },
        {
          id:6,
          question:"Sitenin reklam düzenlemesini puanlayın"
        },
        {
          id:7,
          question:"İstenileni arama ve bulma/site içi aramayı puanlayın"
        },
        {
          id:8,
          question:"Site içi amaca uygun link eklenmesini puanlayın"
        },
        {
          id:9,
          question:"Yazım kurallarına uygunluğu puanlayın"
        },
        {
          id:10,
          question:"Yabancı dil desteğini puanlayın"
        },
        {
          id:11,
          question:"İletişim bilgieri ve ulaşılabilirliği puanlayın"
        }
      ],
      sitetop4:[]

  },
  getters: {
    getStateQuestions(state){
      return state.Questions
    },
    getStateSitetop4(state){
      return state.sitetop4
    }
  },
  mutations: {
    setStateTop4(state,payload){
      state.sitetop4.push(payload)
    }
  },
  actions: {
    setMutationTop4(context){
      /*context.commit("setStateTop4",data)*/

      axios.get("http://localhost:3000/api/site/top4")
      .then((site)=>{
        //console.log(site.data)
        context.commit("setStateTop4",site.data)

      }).catch((err)=>{
        console.log(err)
      })

    }
  },
})
