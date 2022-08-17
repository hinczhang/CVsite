<template>
    <div id="about" class="about-card">
        <h2><p class="title">About Me</p></h2>
        <el-divider ></el-divider>
        <p class="lead">
			Hello, I'm <b style="color:black">Zhang Jiongyan</b>, an independent <b style="color:black">
                Researcher and Developer</b> coming from <b style="color:black">Anhui, China</b>.
			Love <b style="color:black">exploring new techniques</b>.
		</p>
        <p class="sub-text">
            Fundamental Researcher with a demonstrated history of working in the GIS Analysis, Computer Science and 
            Data Science. Skilled in 3D algorithms (MVS and SfM), Photogrammetry, Data Analysis, Computer vision, 
            and Development. Strong research professional with a Bachelor degree of Engineering - BE 
            focused in Geographic Information Science from Wuhan University and currently study in Technical University of Munich.
        </p>
        <div>
            <el-row>
                <el-button class="download-button"><p class="download-text"><a href="/static/doc/CV.pdf" target="_blank" style="color:black">Download Resume (English, Academy)</a></p></el-button>
            
                <el-button class="download-button"><p class="download-text"><a href="/static/doc/CV_CN.pdf" target="_blank" style="color:black">下载简历 (中文，职场)</a></p></el-button>
            
                <el-button class="download-button"><p class="download-text"><a href="#contact">Contact me</a></p></el-button>
            </el-row>
        </div>
        <div class="display">
            <img :src="imgs[0]">
            <img :src="imgs[1]">
            <!-- <img :src="imgs[2]"> -->
            <img :src="imgs[3]">
            <img :src="imgs[4]">
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgs: ["/static/img/press/press-1.png",
            "/static/img/press/press-2.png",
            "/static/img/press/press-3.png",
            "/static/img/press/press-4.png",
            "/static/img/press/press-5.png"]
        }
    },
    mounted() {
        this.resizeWindow()
        window.onresize = () => {
            return ( () => {
                document.getElementById("summary").style.height = '100%'
                document.getElementById("summary").style.width = '100%'
            })()
        }
    },
    methods: {
        resizeWindow () {
            document.getElementById("about").style.height = '100%'
            document.getElementById("about").style.width = '100%'
        }
    }
}
</script>

<style scoped>
.about-card {
    background-color: white;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
}

.title{
    font-family: "lucida sans unicode", "lucida grande", sans-serif;
    font-size: 35px;
    margin-top: 100px;
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

.lead{
    font-family: Rajdhani;
    color: #666565;
    font-size: 30px;
    text-align: center;
    margin-left: 25%;
    margin-right: 25%;
    line-height: 1.7;
    margin-top: 50px;
}

.download-button{
    margin-top: 20px;
    background-color: black;
}

.download-text{
    font-family: InriaSerif;
    font-weight: bold;
    color: white;
}

.el-button{
    padding-top: 5px;
    padding-bottom: 5px;
}
.sub-text{
    font-family: InriaSerif-Light;
    font-size: 18;
    margin-left: 25%;
    margin-right: 25%;
    line-height: 1.7;
}

.display{
    margin-top: 55px;
    margin-bottom: 60px;
}
.display img{
    /*width: 13vw;*/
    height: 8vh;
    margin-right: 20px;
}

a{
    color: white !important;
}
</style>