<template>
    <v-container v-if="!me">
        <v-card>
            <v-form ref="form" v-model="valid" @submit.prevent="onSubmitLogin">
                <v-container>
                    <v-text-field 
                        label="이메일"
                        type="email"
                        v-model="email"
                        :rules ="[v=> !!v||'이메일을 입력해주세요.',
                        v => /.+@.+/.test(v) || '이메일이 유효하지 않습니다']"
                        required />
                    <v-text-field 
                        label="비밀번호"
                        type="password"
                        v-model="password"
                        :rules ="[v => !!v||'패스워드를 입력해주세요.']"
                        required/>
                    <v-btn color="green" type="submit" :disabled="!valid" >로그인</v-btn>
                    <v-btn nuxt to ="/signup">회원가입</v-btn>
                </v-container>
            </v-form>
        </v-card>
    </v-container>

    <v-container v-else>
        <v-card>
            <v-container>

            {{me.nickName}}님 로그인되었습니다.
            <v-btn @click="onLogout">로그아웃</v-btn>
            
            </v-container>
        </v-card>
    </v-container>

</template>

<script>
export default {
    data(){
        return {
            valid : false,
            email: '',
            password :'',


        }
    },
    methods: {
        onSubmitLogin (){
            if(this.valid){
                    alert('로그인 시도');
                    this.$store.dispatch('users/login',{
                        email: this.email,
                        nickName : "영이에요"
                    });

                }else{
                    alert('폼이 유효하지않음');
                }
                // this.$refs.form.validate()
        },
        // onLogin(){
        //     if(this.valid){
        //         this.$store.dispatch('users/login');
        //     }
        // },
        onLogout (){
            this.$store.dispatch('users/logOut');
        }
    },
    computed  :{
        me() {
            return this.$store.state.users.me;
        }
    }
    
}
</script>

<style >

</style>