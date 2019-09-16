//用来存储登录信息的
export const state = () => {
    return {
     com:{
         name:'',
         follow:''
     }
    }
  };
  export const mutations = {
    setAddcom(state,data) {
      state.com = data
    }
  };

  export const actions = {};
  