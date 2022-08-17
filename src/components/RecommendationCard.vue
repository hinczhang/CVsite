<template>
    <div id="recommendation">
        <h2><p class="title">Recommendation Letters</p></h2>
        <div class="special-title "><el-divider ></el-divider></div>
        <el-carousel id="carousel" style="position: relative">
            <el-carousel-item v-for="item in recommendations" :key="item.name">
                <h3 class="small"></h3>
                <img class="avatar" :src="item.avatar">
                <p class="summary">{{item.intro}}</p>
                <p class="name"> —— {{item.name}}</p>
                <p class="unit">{{item.unit}}</p>
                <el-button class="download" round><a :href="item.file" target="_blank" style="color:black">Download Rec. Letter</a></el-button>
            </el-carousel-item>
        </el-carousel>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            recommendations: [
                {
                    name: 'Prof. Yue Peng',
                    intro: 'Mr. Zhang is an intellectual and outstanding student. As the professor who taught him High-Performance GeoComputation, I found that he has demonstrated his talent in the Big Data field, and his proficient programming skills.',
                    unit: 'Associate Dean of School of Remote Sensing and Info. Engineering, Wuhan University',
                    avatar: '/static/img/rec/yp.jpg',
                    file: '/static/doc/YP_RL.pdf'
                },
                {
                    name: 'Prof. Bao Shuming',
                    intro: 'Jiongyan demonstrated strong research and programming skills and desiresfor challenging work during the project. He finished one paper titled as “Spatiotemporal Responses of Global Flight Networks to the COVID-19 Epidemic” for journal publication mostly based on his own work.',
                    unit: 'Director of China Data Lab, Professor of UMich.',
                    avatar: '/static/img/rec/bsm.jpg',
                    file: '/static/doc/BSM_RL.pdf'
                },
                {
                    name: 'Mr. Moxie Zhang',
                    intro: 'Jiongyan worked in ESRI R&D Center (Beijing) as a development intern for four months. The main responsibility that he took focuses on researching medical image processing algorithms and developing the backend server. The target of this project is to create a user-friendly mobile platform to monitor heart health, which corresponds to ESRI’s idea that expanding our research territory to better serve well-beings of the human life.',
                    unit:'General Manager of Esri R&D Center Beijing',
                    avatar: '/static/img/rec/zjy.jpg',
                    file: '/static/doc/ZJY_RL.pdf'
                },
                {
                    name: 'Prof. Qin Kun',
                    intro: 'As Jiongyan graduate thesis tutor and his teacher of GIS principles and Spatial analysis, I think Jiongyan is an intelligent, diligent and enthusiastic student. Therefore, I am delighted to write this recommendation letter for him.',
                    unit: 'Former Associate Dean of School of Remote Sensing and Info. Engineering, Wuhan University',
                    avatar: '/static/img/rec/qk.jpg',
                    file: '/static/doc/QK_RL.pdf'
                },
                {
                    name: 'Dr. Hu Tao',
                    intro: 'It is my great pleasure to write a reference letter for Jiongyan Zhang. I had the pleasure of serving as Jiongyan’s mentor when he was working on the COVID-19 project. I have been very impressed by his capabilities of research and programming and his great attitude of collaboration.',
                    unit: 'Post-doctoral Research Fellow, Center for Geographic Anlaysis, Harvard University and Assistant Professor in Geography of Oklahoma State University',
                    avatar: '/static/img/rec/ht.jpg',
                    file: '/static/doc/HT_RL.pdf'
                },
                {
                    name: 'Dr. Meng Qingxiang',
                    intro: 'I have taught Jiongyan Zhang’s three courses: Development of Geographic Information Engineering Software, Geographic Information Engineering Design and Database’s Principles and Applications. He got 90+ in all the courses, which demonstrates his ability in the Data Science related field. His academic ability will support him to meet the requirements in Data Management, Data Processing and Data Analysis.',
                    unit: 'Lecturer of School of Remote Sensing and Info. Engineering, Wuhan University',
                    avatar: '/static/img/rec/mqx.jpeg',
                    file: '/static/doc/MQX_RL.pdf'
                },
                {
                    name: 'Dr. Huang Wenzhao',
                    intro: 'Mr. Zhang has been a graduate student supervised by Prof. Qin. During the period we got along together, he was patient and modest enough to quickly learn new knowledge, which shows that he has a passion for experiencing new things. Furthermore, he also actively practised new knowledge just learned, bringing surprises for us in every routine meeting.',
                    unit: 'Director-General of Wuhan New Life Rehabilitation Service Center for People with Spinal Cord Injury',
                    avatar: '/static/img/rec/hwz.jpg',
                    file: '/static/doc/HWZ_RL.pdf'
                }

            ]

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
            document.getElementById("recommendation").style.height = document.documentElement.innerHeight+'px'
            document.getElementById("recommendation").style.width = '100%'
            document.getElementById("carousel").style.height = (Number(document.documentElement.clientHeight)*0.7).toString()+'px'
            document.getElementById("carousel").style.width = document.documentElement.innerHeight+'px'
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

#recommendation{
    background-color: rgb(238, 236, 236);
    text-align: left;
    padding-bottom: 30px;
    padding-top: 30px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
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

.avatar{
    border-radius: 200px 198px 200px 200px;
    -moz-border-radius: 200px 198px 200px 200px;
    -webkit-border-radius: 200px 198px 200px 200px;
    border: 0px solid #000000;
    height: 100px;
    margin: 0 auto;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.summary{
    font-family: KottaOne-Regular;
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.name{
    font-family: arial, sans-serif;
    color: #919191;
    font-size: 16px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)

}

.unit{
    font-family: arial, sans-serif;
    color: #919191;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%)

}

.download{
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: georgia, serif;
    font-size: 20px;
    font-weight: bold;
    word-spacing: 1.8pt;
    color: black;

}

.download:hover{
    box-shadow: 5px 5px 5px #888888;/*设置阴影,可以自定义参数*/
}

.el-carousel__container{
    height: 100%;
}

.el-carousel__item{
    height: 600px;
}

.el-button{
    background: rgba(189, 189, 189, 0);
    border: 0px solid white;
}
</style>
