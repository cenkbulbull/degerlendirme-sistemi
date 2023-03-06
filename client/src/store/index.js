import { createStore } from 'vuex'

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
      sitetop4:[
          {
            sitename:null,
            totalpoint:null
          }

      ]

  },
  getters: {
    getStateQuestions(state){
      return state.Questions
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
