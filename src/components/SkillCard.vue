<template>
    <div id="skill">
        <h2><p class="main-title">Skills</p></h2>
        <!-- <el-divider ></el-divider> -->
        <div style="margin-top: 50px"></div>
        <el-col :span="12">
            <el-row><p class="subtitle">Framework skills</p></el-row>
            <el-row v-for="item in framework" :key="item.name">
                <el-col :span="20">
                    <el-progress class="el-progress-bar" :text-inside="true" :stroke-width="17" :percentage="item.per"></el-progress>
                </el-col>
                <el-col :span="4">
                    <p class="content">{{item.name}}</p>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="12">
            <el-row><p class="subtitle">Development skills</p></el-row>
            <el-row v-for="item in development" :key="item.name">
                <el-col :span="20">
                    <el-progress class="el-progress-bar" :text-inside="true" :stroke-width="17" :percentage="item.per"></el-progress>
                </el-col>
                <el-col :span="4">
                    <p class="content">{{item.name}}</p>
                </el-col>
            </el-row>
        </el-col>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            framework: [{name:'Vue', per:50}, {name:'OpenCV', per:80},
            {name:'PyTorch', per:65}, {name:'Flask', per:80},
            {name:'NodeJS', per:75}, {name:'MPI/OMP/CUDA', per:60}],
            development: [{name:'C/C++', per:70}, {name:'Python', per:95},
            {name:'Javascript', per:85}, {name:'Java', per:70},
            {name:'C#', per:65},{name:'R', per:65}]
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
            document.getElementById("skill").style.height = '100%'
            document.getElementById("skill").style.width = '100%'
        }
    }
}
</script>

<style scoped>
#skill {
    background-color: rgb(255, 255, 255);
    padding-bottom: 30px;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}

.main-title{
    font-family: "lucida sans unicode", "lucida grande", sans-serif;
    font-size: 35px;
    margin-left: 30px;
    color: rgb(0, 0, 0);
    text-align: center;
}

.el-divider--horizontal {
    display: block;
    height: 5px;
    width: 8%;
    margin: 0 auto;
}

.el-divider {
    background-color: #000000;
    position: relative;
    border-radius: 25px;
}

.el-progress-bar{
    width: 80%;
}

.subtitle{
    font-family: LibreFranklin-VariableFont_wght;
    margin-top: 20px;
    margin-bottom: 60px;
    font-size: 30px;
}

.content{
    font-family: SpaceMono-Regular;
    margin-bottom: 55px;
    margin-top: 0;
    font-size: 15px;
    text-align: left;
}
</style>

<style>
.el-progress-bar .el-progress-bar__inner{
    background-color: black !important;
    line-height: 1.1;
}

.el-progress-bar__inner .el-progress-bar__innerText{
    font-size: 5px;
}
</style>