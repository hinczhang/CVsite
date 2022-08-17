<template>
    <div id="project">
        <h2><p class="main-title">Projects</p></h2>
        <el-divider></el-divider>
        <el-carousel id="gallery" style="position: relative; margin-top: 120px" height="90%">
            <el-carousel-item v-for="(item, index) in projects" :key="item.name">
                <div style="margin:0 auto">
                    <el-col :span="12">
                    <img :src="item.path" class="gallery-img">
                    <p class="pro-name">{{item.name}}</p>
                    <p class="content">{{item.content}}</p>
                    </el-col>
                    <el-col :span="12">
                    <img :src="projects[(Number(index)+1)>=projects.length?0:(Number(index)+1)].path" class="gallery-img">
                    <p class="pro-name">{{projects[(Number(index)+1)>=projects.length?0:(Number(index)+1)].name}}</p>
                    <p class="content">{{projects[(Number(index)+1)>=projects.length?0:(Number(index)+1)].content}}</p>
                    </el-col>
                    
                </div>
            </el-carousel-item>
        </el-carousel>
        
    </div>
</template>

<script>
export default {
    data () {
        return {
            projects:[{name: 'Research on Nighttime Remote Sensing', content: 'Based on the remote sensing data of night-time light obtained by DMSP / OLS system, this project analyzes the development status of emerging cities in recent years, points out the relationship between cities and the surrounding underdeveloped areas.', path: '/static/img/work-1.jfif'},
            {name: 'Human behaviour judgment, clustering and analysis based on human trajectory', content: 'This project mainly records the tracks and obtains the track characteristics of diﬀerent types of people through deep learning. We can obtain a specific reference and identify the people to whom tracks belong. I mainly conduct data analysis and processing and the development of data acquisition software.', path: '/static/img/work-2.jpg'},
            {name: 'Research on indoor positioning and navigation', content: 'The primary purpose of this project is to develop an indoor positioning and navigation system in a large shopping mall suitable for daily life by using as few external hardware as possible, to establish the fully automatic system. I am responsible for the main algorithm and mobile & server application development.', path: '/static/img/work-3.png'},
            {name: 'Research on the relationship between COVID-19 and the global aviation network', content: 'Analyze the impact of the epidemic situation on the aviation network. Based on the characteristics of the aviation network from January to April 2020, time series analysis and spatial analysis have been made, to get the corresponding conclusions. I led this research.', path: '/static/img/work-4.jfif'},
            {name: 'Development of travel assistance app for the disabled', content: 'This project attempts to extract the data of barrier-free public transport in the current urban environment, and on this basis, provides guidance and suggestions for the disabled to travel more conveniently and smoothly. I mainly conduct background algorithm research and the implementation of mobile terminal programs.', path: '/static/img/work-5.jpg'}]
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
            document.getElementById("project").style.height = document.documentElement.innerHeight+'px'
            document.getElementById("project").style.width = '100%'
            document.getElementById("gallery").style.height = (Number(document.documentElement.clientHeight)*0.7).toString()+'px'
            document.getElementById("gallery").style.width = document.documentElement.innerHeight+'px'
        }
    }
}
</script>

<style scoped>
#project {
    background-color: rgb(255, 255, 255);
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


.pro-name{
    font-family: LibreFranklin-VariableFont_wght;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: black;
}

.content{
    font-family: SpaceMono-Regular;
    margin-bottom: 55px;
    margin-top: 0;
    font-size: 15px;
    text-align: justify;
    width: 80%;
    margin: 0 auto;
}

.gallery-img{
    width: 500px;
    height: 300px;
}
</style>
