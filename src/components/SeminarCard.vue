<template>
    <div id="seminar">
        <h2><p class="title">Conferences & Seminars</p></h2>
        <div class="special-title "><el-divider ></el-divider></div>

        <i class="el-icon-mic" style="font-size:70px;"></i>
        <p class="m-title">Meetings on data analysis of novel coronavirus epidemic situation</p>
        <p class="year-content"><i class="el-icon-date" style="margin-right:10px"></i>2020.04~2020.06</p>
        <p class="content">Assist in processing, researching and discussing the aviation network data.</p>
        <div style="margin-top:160px"></div>
        <i class="el-icon-mic" style="font-size:70px;"></i>
        <p class="m-title">Meetings on data analysis of novel coronavirus epidemic situation</p>
        <p class="year-content"><i class="el-icon-date" style="margin-right:10px"></i>2021.02</p>
        <p class="content">Assist in processing, researching and discussing the aviation network data.</p>

    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    mounted() {
        this.resizeWindow()
        window.onresize = () => {
            return ( () => {
                this.resizeWindow()
            })()
        }
    },
    methods: {
        resizeWindow () {
            document.getElementById("seminar").style.height = document.documentElement.clientHeight+'px'
            document.getElementById("seminar").style.width = "100%"
        }
    }
}
</script>

<style scoped>
.title{
    font-family: "lucida sans unicode", "lucida grande", sans-serif;
    font-size: 35px;
    margin-top: 100px;
    text-align: center;
}

#seminar{
    background-color: rgb(238, 236, 236);
    text-align: center;
    padding-bottom: 30px;
    padding-top: 30px;
}


.special-title .el-divider--horizontal {
    display: block;
    height: 5px;
    width: 8%;
    margin: 0 auto;
}

.special-title .el-divider {
    background-color: #000000;
    position: relative;
    border-radius: 25px;
    margin-bottom: 50px;
}

.icon{
    font-size:70px;
}

.m-title{
    font-family: Gelasio-Bold;
    font-size: 25px;
}

.content{
    font-family: GowunBatang-Regular;
    font-size: 20px;
}

.time-content{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
}

</style>