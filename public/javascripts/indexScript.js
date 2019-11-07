var app = new Vue({
    el: '#app',
    data: {
        pgm:[],
        pgmBak:[],
        moment:moment,
        videos:[],
        videoShow:false,
        head:{time:"",title:"", subTitle:""}
    },
    methods: {
        copyIframe:function(txt){

        var ret='<iframe width="560" height="315" src="'+txt+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

            return this.copyText(ret);
        },
        copyText:function (txt) {
            var elem=document.createElement("textarea")
            elem.value=txt;
            document.body.appendChild(elem);

            elem.select();
            elem.setSelectionRange(0, 99999); /*For mobile devices*/

            /* Copy the text inside the text field */
            document.execCommand("copy");
            elem.parentNode.removeChild(elem)
            /* Alert the copied text */
            alert("Ссылка скопирована");

        }

    },
    mounted: async function () {
        console.log("og");
        var res=await axios.get("/pgm");
        this.pgm=res.data;
        console.log(this.pgm);
    }
    });
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
