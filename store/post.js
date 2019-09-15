//用来存储登录信息的
export const state = () => {
    return {
     draft:[]
    }
  };
  export const mutations = {
    setAddText(state,data) {
      // state.addText = data;
      // console.log(data)
      state.draft.push(data);
    },
    setDraft(state,data){
      state.draft=data
    }
  };

  export const actions = {};
  