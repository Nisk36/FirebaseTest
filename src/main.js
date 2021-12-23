

const app = Vue.createApp({
    data(){
        return{
            title:'',
            developer:'',
            caption:'',
            tags:'',
            subtag1: '',
            subtag2: '',
            subtag3: '',
            tmbdataurl:null,
            tmbfile:null,
            imgdataurl:null,
            imgfile:null,
        }
    },
    methods:{
        readTmb(){
            const inputTmb = document.getElementById('tmb');
            if(inputTmb.files.length == 0){
                return ;
            }
            
            this.tmbfile = inputTmb.files[0];
            console.log(this.tmbdataurl);
            const reader = new FileReader();
            reader.onload = (e) => {
                this.tmbdataurl = e.target.result;
            }
            reader.readAsDataURL(this.tmbfile);
        },
        resetTmb(){
            this.tmbdataurl = null;
            this.tmbfile = null;
        },

        readImg(){
            const inputImg = document.getElementById('img');
            if(inputImg.files.length == 0){
                return ;
            }
            
            this.imgfile = inputImg.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                this.imgdataurl = e.target.result;
            }
            reader.readAsDataURL(this.imgfile);
        },
        resetImg(){
            this.imgdataurl = null;
            this.imgfile = null;
        },

        showData(){
            var data={};
            console.log(this.title);
            console.log(developer.value);
            console.log(caption.value);
            for(var i=0;i<tags.length;i++){
                if(tags[i].selected){
                    console.log(tags[i].value);
                }
            }
            console.log(subtag1.value);
            console.log(subtag2.value);
            console.log(subtag3.value);
            data["title"] = title.value;
            data["developer"] = developer.value;
            data["caption"] = caption.value;

            var arr = [];
            for(var i=0;i<tags.length;i++){
                if(tags[i].selected){
                    arr.push(tags[i].value);
                }
            }
            data["tags"] = arr;
            
            data["subtag"] = [subtag1.value,subtag2.value,subtag3.value];

            //連想配列をJsonに変化
            json_data = JSON.stringify(data);
            console.log(json_data);     

            console.log(this.tmbdataurl);
            console.log(this.tmbfile);
            console.log(this.imgdataurl);
            console.log(this.imgfile);
            
        },

    }
})

app.mount('#app')
