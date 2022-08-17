<template>
    <div id="contact">
    <el-row class="head">
        <el-col id="left" style="padding-left:300px; padding-top:50px">
            <p class="chinese-name">张炅焱</p>
            <el-divider></el-divider>
            <p class="english-write">Hope to meet you in many places, which may contribute to the communication of knowledge and technology.</p>
            <i class="fa fa-weixin fa-2x" aria-hidden="true"></i>
            <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
            <i class="fa fa-google-plus fa-2x" aria-hidden="true"></i>
            <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            <i class="fa fa-skype fa-2x" aria-hidden="true"></i>

        </el-col>
        <el-col id="right" style="padding-left:200px; padding-top:50px">
            <p class="english-title">Contact Information</p>
            <el-divider></el-divider>
            
            <p class="english-write"><i class="el-icon-phone-outline" style="margin-right: 10px"></i> Skype: hinczhang@whu.edu.cn</p>
            <p class="english-write"><i class="el-icon-message" style="margin-right: 10px"></i> Email: hinczhang@gmail.com </p>
            <p class="english-write"><i class="el-icon-message" style="margin-right: 10px"></i> Academic Email: jiongyan.zhang@tum.de </p>
            <p class="english-write"><i class="el-icon-school" style="margin-right: 10px"></i> Address: Technical University of Munich, Munich, Germany </p>
        </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row class="tail">
        Copyright &copy; 2021.StandardServe All rights reserved.<a target="_blank" href="#">标准化服务团队 & 标准GIS</a>
    </el-row>
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
            document.getElementById("contact").style.width = document.documentElement.clientWidth+'px'
            document.getElementById("left").style.width = (Number(document.documentElement.clientWidth)/2).toString()+'px'
            document.getElementById("right").style.width = (Number(document.documentElement.clientWidth)/2).toString()+'px'

            
        }
    }
}
</script>

<style scoped>
#contact{
    background-color: rgb(25, 25, 32);
    padding-bottom: 25px;
    color: white;
    text-align: left;
}

.head .el-divider--horizontal {
    display: block;
    height: 2px;
    width: 100px;
    margin: 0 auto;
    margin-left: 0;
}

.head .el-divider {
    background-color: #ffffff;
    position: relative;
    border-radius: 25px;
}

.chinese-name{
    font-family: chinese-normal;
    text-align: left;
    font-size: 20px;
    letter-spacing: 2.8pt;
}

.english-write{
    font-family: english-normal;
    text-align: left;
    font-size: 15px;
}

.english-title{
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    font-size: 20px;
}

.icon{
    color: white;
    font-size: 40px;
}

.fa{
    margin-right: 25px;
    margin-top: 20px;
}

.tail{
    text-align: center;
    font-family: 'Amiri', serif;
    font-size: 18px;
    color: gray;
    letter-spacing: 1.2pt;
    font-weight: lighter;   
}

a{
    color: white;
}
</style>