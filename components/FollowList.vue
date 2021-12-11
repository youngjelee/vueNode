<template>
<div>
    <v-container>
        <v-subheader> 팔로잉</v-subheader>
    <v-list>
        <v-list-item v-for="following in followingList" :key="following.id">
            <span>{{following}}
                <v-icon @click="removeFollowing(following)">mdi-minus</v-icon>
            </span>
        </v-list-item>
    </v-list>
    </v-container>
    <v-container>
        <v-subheader> 팔로워</v-subheader>
        <v-list>
        <v-list-item v-for="(follower) in followerList" :key="follower.id">
            <span>{{follower}}
                <v-icon @click="removeFollwer(follower)">mdi-minus</v-icon>
            </span>
        </v-list-item>
    </v-list>
     </v-container>
</div>

</template>
<script>
export default {
    computed : {

        followingList (){
            return this.$store.state.users.followingList;
        },
        followerList (){
            return this.$store.state.users.followerList;
        }
    },
    methods : {
        removeFollowing(person){
            this.$store.dispatch('users/removeFollowing',{
                name : person
            })
        },
        removeFollwer(person){
            this.$store.dispatch('users/removeFollwer',{
                name : person
            })
        }
    }   

 
}
</script>
<style>

</style>