<template>
    <div id="education">
        <h2><p class="title">Education</p></h2>
        <div class="special-title "><el-divider ></el-divider></div>
        <el-row>
            <el-col :span="8">
                <el-card class="edu-card" :body-style="{padding: '15px 30px 15px 30px'}">
                    <p class="time-line">2021.10~2023.09</p>
                    <p class="school-name">Technical University of Munich</p>
                    <el-divider></el-divider>
                    <p class="program">Cartography</p>
                    <p class="main-text">Ongoing master student: <br> With two program scholarships for 2021WS and 2022SS.
                    <br><br><b>Exchange Program: </b><br> Ecole Polytechnique: Algorithmique parallèle et distribuée</p>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="edu-card" :body-style="{padding: '15px 30px 15px 30px'}">
                    <p class="time-line">2017.09~2021.06</p>
                    <p class="school-name">Wuhan University</p>
                    <el-divider></el-divider>
                    <p class="program">Remote Sensing Science and Technology (GIS)</p>
                    <p class="main-text">Undergraduate student in the Department of 
                        Geographic Information Engineering, School of Remote Sensing 
                        and Information Engineering, Wuhan University

                        <br>Cumulative GPA: <b>87.8/100(major: 88.4)</b>
                        <br>
                        <br>Owner of the Excellent graduation thesis of Wuhan University</p>
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card class="edu-card" :body-style="{padding: '15px 30px 15px 30px'}">
                    <p class="time-line">2014.09~2017.05</p>
                    <p class="school-name">Qingyang Senior Middle School of Anhui Province</p>
                    <el-divider></el-divider>
                    <p class="program">High School Diploma</p>
                    <p class="main-text">
                        China‘s College Entrance Examination: 630 (rank: 1480/499,000, TOP 3‰)<br>
                        <br><i class="el-icon-star-off"> Chinese: 110 </i>
                        <br><i class="el-icon-star-off"> Mathematics: 127 </i>
                        <br><i class="el-icon-star-off"> English: 136 </i>
                        <br><i class="el-icon-star-off"> Science comprehensive test: 257 </i>
                        </p>
                </el-card>
            </el-col>
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
            document.getElementById("education").style.height = '100%'
            document.getElementById("education").style.width = '100%'
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

#education{
    background-color: rgb(238, 236, 236);
    text-align: left;
    padding-bottom: 30px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
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

.edu-card{
    width: 90%;
    margin: 0 auto;
    height: 530px;
}

.time-line{
    font-family: TitilliumWeb-Bold;
    font-size: 16px;
    color: gray;
}

.school-name{
    font-family: Alegreya-VariableFont_wght;
    font-size: 22px;
    color: black;
    line-height: 1.8;
}

.program{
    font-family: arial, sans-serif;
    color: #707070;
    font-size: 16px;
    line-height: 1.8;
}

.main-text{
    font-family: "times new roman", times, serif;
    font-size: 20px;
    line-height: 1.8;
}

</style>