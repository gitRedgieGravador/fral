<template>
    <div>
        <center>
            <h1>Home</h1>
        </center>
    </div>
</template>
<script>
export default {
    name: "home",
    created(){
        this.$router.push({path: "/admin"})
    }
}
</script>
