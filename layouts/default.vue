<template>
    <v-app> <!--  vuetify 적용시 꼭 적어줘야함  -->
        <nav>
            <v-toolbar>
                <v-toolbar-title> 
                    <nuxt-link to="/">Node Bird</nuxt-link>
                </v-toolbar-title>
            
            <v-spacer />
            <v-toolbar-items>
                <v-text-field label="검색" hide-details prepend-icon="mdi-search"/>
                <v-btn text nuxt to ="/profile">
                    <div>프로필</div>
                </v-btn>
                <v-btn text nuxt to="/signup">
                    <div>회원가입</div>
                </v-btn>    
            </v-toolbar-items>
            </v-toolbar>
        </nav>
        <!-- <div>{{name}}</div>
        <v-btn @click="onChangeName">바이바이</v-btn> -->
        <v-row no-gutters>
            <v-col cols="12" md="4">
                
                <LoginForm />
           
            </v-col>
            <v-col cols="12" md="8">
                <nuxt />

            </v-col>
        </v-row>
    </v-app>


</template>

<script>
import LoginForm from '~/components/LoginForm';    //~ 는 소스 루트 

export default {

    components : {
        LoginForm : LoginForm,
    },
    computed : {
        name(){
            return this.$store.state.posts.name
        }
    },
    methods: {
            onChangeName (){
                // console.log(this.$store.context)
                return this.$store.commit('posts/bye'); 

            }
    }
    
}
</script>



