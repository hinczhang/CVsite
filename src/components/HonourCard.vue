<template>
    <div id="honour">
        <h2><p class="main-title">My Honours</p></h2>
        <el-divider ></el-divider>
        <div id="honour-dom">
        <el-row>
            <el-col :span="8" v-for="item in lineOne" :key="item.name">
                <el-card class="award-card" shadow="always">
                    <i class="el-icon-trophy-1" style="font-size:80px"></i>
                    <div class="award-name">{{item.name}}</div>
                    <div class="award-year">{{item.year}}</div>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="8" v-for="item in lineTwo" :key="item.name">
                <el-card class="award-card" shadow="always">
                    <i class="el-icon-trophy-1" style="font-size:80px"></i>
                    <div class="award-name">{{item.name}}</div>
                    <div class="award-year">{{item.year}}</div>
                </el-card>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="8" v-for="item in lineThree" :key="item.name">
                <el-card class="award-card" shadow="always">
                    <i class="el-icon-trophy-1" style="font-size:80px"></i>
                    <div class="award-name">{{item.name}}</div>
                    <div class="award-year">{{item.year}}</div>
                </el-card>
            </el-col>
        </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            lineOne: [{name: 'S prize of MCM/ICM', year: '2018'}, {name: 'H prize of MCM/ICM', year: '2019'}, {name: 'Third prize of Mathorcup University Mathematical Modeling Competition', year: '2019'}],
            lineTwo: [{name: 'Second prize of China International Mathematical Modeling Competition', year: '2019'},{name: 'H prize of Asia and Pacific Mathematical Contest in Modeling', year: '2019'},{name: 'Wuhan University Scholarship', year: '2017&2018'}],
            lineThree: [{name: 'Wuhan University Elite Student', year: '2017&2018'}, {name: 'College Students innovation and entrepreneurship training program', year: '2019'},{name: 'Excellent Graduation Thesis of Wuhan University', year: '2021'}]
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
            document.getElementById("honour").style.height = '100%'
            //document.getElementById("honour").style.width = Math.max(document.documentElement.clientWidth+'px', document.getElementById("honour").style.width)
            //document.getElementById("honour-dom").style.width = document.documentElement.clientWidth+'px'
        }
    }
}
</script>

<style scoped>
#honour {
    background-color: black;
    padding-bottom: 30px;
    padding-top: 30px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
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

.award-card{
    width: 75%;
    margin: 0 auto;
    height: 250px;
    margin-bottom: 30px;
    position: relative;
    border-radius: 46px 46px 46px 46px;
    -moz-border-radius: 46px 46px 46px 46px;
    -webkit-border-radius: 46px 46px 46px 46px;
    border: 3px solid #b0a6b0;
}

.award-name{
    font-family: Cardo-Regular;
    font-size: 18px;
    line-height: 1;
    margin-top: 20px
}

.award-year{
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    position: absolute;
    text-align: center;
    bottom: 10%;
    left: 50%;
    transform:translate(-50%);
}
</style>