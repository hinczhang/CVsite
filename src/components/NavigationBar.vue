<template>
    <el-menu mode="horizontal" id="bar" class="menu" text-color="#646464" active-text-color="#ffd04b">
        <el-menu-item class="item" index="1"><a href="#summary">HOME</a></el-menu-item>
        <el-menu-item class="item" index="2"><a href="#about">About</a></el-menu-item>
        <el-menu-item class="item" index="3"><a href="#experience">Jobs&Activity</a></el-menu-item>
        <el-menu-item class="item" index="4"><a href="#education">Education</a></el-menu-item>
        <el-menu-item class="item" index="5"><a href="#skill">Skills</a></el-menu-item>
        <el-menu-item class="item" index="6"><a href="#honour">Honours</a></el-menu-item>
        <el-menu-item class="item" index="7"><a href="#recommendation">Recommend</a></el-menu-item>
        <el-menu-item class="item" index="8"><a href="#project">Projects</a></el-menu-item>
        <el-menu-item class="item" index="9"><a href="#funding">Fundings</a></el-menu-item>
        <el-menu-item class="item" index="10"><a href="#seminar">Seminars</a></el-menu-item>
        <el-menu-item class="item" index="11"><a href="#language">Languages</a></el-menu-item>
        <el-menu-item class="item" index="12"><a href="#contact">Contact</a></el-menu-item>
    </el-menu>
</template>

<script>
export default {
    data () {
        return {
            activeIndex: "1"
        }
    },
    methods: {
        resizeWindow () {
            document.getElementById("bar").style.width = document.documentElement.clientWidth+'px'
        }
    },
    mounted() {
        /*
        this.resizeWindow()
        window.onresize = () => {
            return ( () => {
                this.resizeWindow()
            })()
        }*/
    },
}
</script>

<style scoped>
.menu{
    background-color: black;
    float: right;
    width: 100%;
    z-index: 999999;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.item{
    width: 8%;
    height: 60px;
    color: white;
}
</style>