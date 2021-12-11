export const state = () => ({
    me : null,
    followingList: ["윤성희1","윤성희2","윤성희3"],
    followerList: ["이제영1","이제영2","이제영3"],

});
//보통 mutations 는 단순한 동기작업을 할때 사용한다
export const mutations = {
    setMe(state,payload) {
        state.me = payload;
    },
    changeNickName(state,payload){
        state.me.nickName = payload.nickName;
    },
    removeFollowing(state,payload){
        const index = state.followerList.findIndex(v =>v ===payload.name)
        state.followingList.splice(index,1);
    },
    removeFollwer(state,payload){
        const index = state.followingList.findIndex(v =>v ===payload.name);
        state.followerList.splice(index,1);
    }    
}

//비동기작업들은 actions 에 넣어준다 , 여러가지작업들 포함가능

export const actions = {
    signUp({commit,state}, payload){
        //추후 서버에 회원가입 요청을 보내는 부분
        commit('setMe',payload);
    },
    login({commit},payload){
        commit('setMe',payload);
    },
    logOut({commit},payload){
        commit('setMe',null);
    },
    changeNickName({commit},payload){
        commit('changeNickName',payload);
    },
    removeFollowing({commit},payload){
        commit('removeFollowing',payload);
    },
    removeFollwer({commit},payload){
        commit('removeFollwer',payload);
    },
};