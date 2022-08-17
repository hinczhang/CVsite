<template>
    <div id="funding">
        <h2><p class="main-title">My Fundings</p></h2>
        <el-divider ></el-divider>
        <div>
            <el-col :span="8" v-for="(item, index) in fundings" :key="item.fund">
                <el-card class="fund-card">
                    <el-row><p class="m-title">{{index+1}}. {{item.fund}}</p></el-row>
                    <el-row><p class="nav">Name:</p> <p class="content">{{item.name}}</p></el-row>
                    <el-row><p class="nav">Identity:</p> <p class="content">{{item.identity}}</p></el-row>
                    <el-row><p class="nav">Funds:</p> <p class="content">{{item.funds}}</p></el-row>
                    <el-row><p class="nav">Organization:</p> <p class="content">{{item.organization}}</p></el-row>
                </el-card>
            </el-col>
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            fundings: [{
                fund: 'The National Key Research and Development Program (Grant No: 2017YFB0503600)',
                name: 'Geographic Big Data Mining and Spatiotemporal Pattern Discovery',
                identity: 'Participant',
                funds: '￥46,970,000',
                organization: 'Institute of Geographic Sciences and Natural Resources Research, CAS'
            },
            {
                fund: 'Wuhan University Innovation Training Program (Grant No: S2018213651)',
                name: 'The Development Status and Surrounding Relationship of Emerging Cities by RS',
                identity: 'Manager',
                funds: '￥1, 000',
                organization: 'Wuhan University'
            },
            {
                fund: 'Hubei Province Innovation Training Program (Grant No: S2020213006)',
                name: 'Research on barrier-free intelligent travel of public transportation',
                identity: 'Initial Manager',
                funds: '￥3,000',
                organization: 'Hubei Province'
            }]
        
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
            document.getElementById("funding").style.height = document.documentElement.clientHeight+'px'
            document.getElementById("funding").style.width = "100%"
        }
    }
}
</script>

<style scoped>
#funding {
    background-color: black;
    padding-bottom: 30px;
    padding-top: 30px;
}

.main-title{
    font-family: "lucida sans unicode", "lucida grande", sans-serif;
    font-size: 35px;
    margin-top: 100px;
    color: white;
    text-align: center;
}

.el-divider--horizontal {
    display: block;
    height: 5px;
    width: 8%;
    margin: 0 auto;
}

.el-divider {
    background-color: #ffffff;
    position: relative;
    border-radius: 25px;
    margin-bottom: 50px;
}

.content{
    font-family: KleeOne-Regular;
    text-align: left;
    font-size: 18px;
}

.nav{
    font-family: Faustina-VariableFont_wght;
    text-align: left;
    float: left;
    margin-right: 10px;
    font-size: 18px;
}

.m-title{
    font-family: Alice-Regular;
    font-weight: bold;
    text-align: left;
}

.fund-card{
    width: 85%;
    margin: 0 auto;
    height: 470px;
}
</style>