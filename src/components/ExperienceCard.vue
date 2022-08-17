<template>
    <div id="experience" class="experience-card">
        <h2><p class="main-title">Activities</p></h2>
        <el-divider ></el-divider>
        <el-card class="timecard">
            <el-timeline>
                <el-timeline-item timestamp="2022-10~2023-09" placement="top">
                    <el-card>
                        <p class="title">Working student</p>
                        <p class="subtitle">Cruise Munich GmbH, Munich, Germany</p>
                        <p class="content">Automatic driving radar simulation.</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2021-04~2021-08" placement="top">
                    <el-card>
                        <p class="title">Development Intern</p>
                        <p class="subtitle">ESRI Software R&D Center, Beijing</p>
                        <p class="content">Devoting to the algorithm on biochemical image processing and the backend server development.</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2021-03~2021-06" placement="top">
                    <el-card>
                        <p class="title">Teaching Assistant</p>
                        <p class="subtitle">Wuhan University, Whuhan</p>
                        <p class="content">Being responsible to Academician of the Chinese Academy of Sciences, Prof. Gong Jianya and Prof. Qin Kun. </p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2020-12" placement="top">
                    <el-card>
                        <p class="title">Volunteer</p>
                        <p class="subtitle">Wuhan New Life Rehabilitation Service Center for People with Spinal Cord Injury, Whuhan</p>
                        <p class="content">Participating in an R&D team determining to resolve the problems of disabled travelling, and having a short day to stay with disabled for thier trip in Wuhan.</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2020-09~2021-06" placement="top">
                    <el-card>
                        <p class="title">Researching Assistant</p>
                        <p class="subtitle">Wuhan University, Whuhan</p>
                        <p class="content">Be responsible to the leader of ISIP lab of Wuhan University, Prof. Qin Kun. Devoting to the research about the complex network theory.</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019-09~2021-06" placement="top">
                    <el-card>
                        <p class="title">Website Administrator</p>
                        <p class="subtitle">Wuhan University, Whuhan</p>
                        <p class="content">Developing a schoolwork management system and maintain it, including the development of the fontend, the backend and the database.</p>
                    </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2019-09~2021-06" placement="top">
                    <el-card>
                        <p class="title">Lecturer</p>
                        <p class="subtitle">The WHU Space Network Media Association, Wuhan</p>
                        <p class="content">Teaching some technology about computer science and GIS skills for fresh students.</p>
                    </el-card>
                </el-timeline-item>
            </el-timeline>
        </el-card>
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
            document.getElementById("experience").style.height = "100%"
            document.getElementById("experience").style.width = "100%"
        }
    }
}
</script>

<style scoped>
.experience-card {
    background-color: black;
    padding-bottom: 30px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.title{
    font-family: arial, sans-serif;
    font-size: 24px;
    font-weight: bold;
    text-align: left;
}

.subtitle{
    font-family: "times new roman", times, serif;
    color: #969292;
    font-size: 16px;
    text-align: left;
}

.content{
    font-family: Tahoma, Geneva, sans-serif;
    color: #0D0D0D;
    font-size: 20px;
    text-align: left;
}

.timecard{
    width: 65%;
    position: relative;
    left: center;
    margin: 0 auto;
    margin-top: 30px;
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
    background-color: #000000;
    position: relative;
    border-radius: 25px;
}
</style>