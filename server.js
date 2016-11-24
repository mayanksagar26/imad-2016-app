var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'About Me|Mayank Sagar',
        heading: 'About Me',
        date:'' ,
        content:`
    <head>
        <meta name="View port" content="width=device-width,intial scale=1" />
        <style>

h1{
    text-align:center;
    color: black;
    font-family:sans-serif;
}
p{
text-align:center;
font-size:24px;

}
body{

        background: url(http://hdwallpaperbackgrounds.net/wp-content/uploads/2016/01/Beautiful-Mountain-Range-Desktop-Wallpaper.jpg);
        color: white;
        font-family: Helvetica;
        padding-top: 20px;
        background-size: cover;
        background-position: center center;
        background-repeat:no-repeat;
        background-attachment: fixed;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        max-width: 800px;
         margin: 0 auto;
         font-family: sans-serif;
         padding-left: 20px;
         padding-right: 20px;
}
</style>
</head>
<div>
<iframe src="http://free.timeanddate.com/clock/i5h0s79h/n438/tlin/fn15/fs15/tct/pct/tt0/tw1/tm1/tb4" frameborder="0" width="123" height="36" allowTransparency="true"></iframe>
</div>

                    <body>
                    <p>My name is Mayank Sagar. I am a second year student of Industrial Engineering and Management branch of R.V.College Of Engineering, Bangalore.My home town is Patna. Me and My family have been living there since my birth.</p>
                    <hr/>
                    <h3>THE BEGINNING</h3>
                    This part of my life is called the beginning. In those days we used to live in Hanuman Nagar , Patna. And I got admission in a small decent school named "New Era High School". I studied there till UKG(Upper Kinder garten).
                    After this I joined Kendriya Vidyalaya, Kankarbagh, Patna in which I remained till 12th grade.
                    <hr/>
                         <h3>THE JOURNEY BEGINS</h3>
                         My schooling really began when I came to KV. And from the beginning I knew that , I am going to stay here for the next 12 years
                         So whether I like it or not that is going to be my school forever. That,s why my real journey as Mayank Sagar began at Kendriya
                         Vidyalaya, Kankarbagh. This part of my life is called the journey begins.
                         <hr/>
                         <h3>THE RACE</h3>
                         After joining KV , my parents had expectations as any other parent that i have to perform as good as my elder sis who was not in my school but still
                         avery good student. To just fulfill my parents desire to do well in studies I was performing good in class but was not bothered about the
                         top position. I was keeping my position in class near 3rd and 4th.Like this race of class position was not enough for a student like me, one more race
                          for IIT was there.So what was better than to run for hundreds of coaching and taking admission in few of them and be grilled for hours after class
                          10th every day after school hours.So finally one more Race was ther for me. This part of life is called racing .
                          <hr/>
                          <h3>REJECTION</h3>
                          Finally the time of results came. Somehow I managed decent marks in 12th board but no one was ther to save me in JEE. So I got rejected
                          This rejection was lind of first for me because before there was nothing as big as getting into an IIT was ther in my life.
                          So I decided to drop a year and prepare for my second chance. Intially everything was perfectly fine, I was scoring good marks in 
                          coaching tests . But as the saying is there that no good thing last ling if u have not sufficient efforts for it. Yeah so again I got rejected
                          This phase of my life was rejection. But something else was waiting for me.
                          <hr/>
                          <h4>Bengaluru</h4>
                          After the rejection , for me there were just few options left. Either West Bengal or One of them was Bangalore. I never wanted to come so far to study
                          but something else was written. Somehow my parents got convinced by many that Bangalore is the best place for any engineer I India.
                          So here I was getting a seat in the top college of Bangalore that is what I was told "R.V.College Of Engineering".
                          <hr/>
                          <h5>THE PRESENT</h5>
                          So finally whever I am now , I am enjoying being here. Little bit of coding ,studying, and writing these kind of articles. But the most
                          important thing among all is to live in present. Live in what u got and make the best out of u and every opportunity u get. There is a good
                          saying "Yesterday is history , tommorow is a mystery but today is a gift that is why it is called PRESENT". So , may the force be with U.
                          <hr/>
                      </p>
                        <hr/>
      <div>
      <!-- Begin Comments JavaScript Code --><script type="text/javascript" async>function ajaxpath_5836d3a35a528(url){return window.location.href == '' ? url : url.replace('&s=','&s=' + escape(window.location.href));}(function(){document.write('<div id="fcs_div_5836d3a35a528"><a title="free comment script" href="http://www.freecommentscript.com">&nbsp;&nbsp;<b>Free HTML User Comments</b>...</a></div>');fcs_5836d3a35a528=document.createElement('script');fcs_5836d3a35a528.type="text/javascript";fcs_5836d3a35a528.src=ajaxpath_5836d3a35a528((document.location.protocol=="https:"?"https:":"http:")+"//www.freecommentscript.com/GetComments2.php?p=5836d3a35a528&s=#!5836d3a35a528");setTimeout("document.getElementById('fcs_div_5836d3a35a528').appendChild(fcs_5836d3a35a528)",1);})();</script><noscript><div><a href="http://www.freecommentscript.com" title="free html user comment box">Free Comment Script</a></div></noscript><!-- End Comments JavaScript Code -->
      <hr/>
        <h3>You can follow me on twitter, facebook and EyeEm by clicking on the icon below </h3>
        <h4>If you like the video, please like and share  my work. You can do that by clicking on the YouTube icon and subscribe to my channel</h4>
        <a href="https://www.facebook.com/mayanksagar.27" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/768px-F_icon.svg.png" style="border:0px solid black;max-width:8%;" alt="Facebook">
        </a>
        <a href="https://twitter.com/Biharibalak" target="_blank">
            <img src="http://www.science.unsw.edu.au/files/twitter-icon-1024x1024.png" style="border:0px solid black;max-width:8%;" alt="Twitter">
          </a>
          <a href="https://www.eyeem.com/u/mayanksagar1" target="_blank">
              <img src="https://lh3.googleusercontent.com/v1Eh8qzDdPSHgPp2NINY1b3UcBh4lTRM6ELvpqPk0EmvAkU4z6cVrmVVBRNKMY1xc9c=w300" style="border:0px solid black;max-width:8%;" alt="Twitter">
            </a>
            <a href="https://www.youtube.com/channel/UCTSudzwdXOlGLKdORIGQRdQ" target="_blank">
                <img src="https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png" style="border:0px solid black;max-width:12%;" alt="YouTube">
            </a>

      </div>
                        </body>`,

    },
    'article-two': {title: 'Videos|Mayank Sagar',
        heading: 'Videos',
        date: '',
        content:`
    <head>
         <title>Mayank</title>
        <meta name="View port" content="width=device-width,intial scale=1" />
        <style>

h1{
    text-align:center;
    color: black;
    font-family:sans-serif;
}
p{
text-align:center;
font-size:24px;

}
body{

        background: url(http://cdn.wallpapersafari.com/34/93/bpQCDl.jpg);
        color: white;
        font-family: Helvetica;
        padding-top: 20px;
        background-size: cover;
        background-position: center center;
        background-repeat:no-repeat;
        background-attachment: fixed;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        max-width: 800px;
         margin: 0 auto;
         font-family: sans-serif;
         padding-left: 20px;
         padding-right: 20px;
}
</style>
</head>
<div>
<iframe src="http://free.timeanddate.com/clock/i5h0s79h/n438/tlin/fn15/fs15/tct/pct/tt0/tw1/tm1/tb4" frameborder="0" width="123" height="36" allowTransparency="true"></iframe>
</div>

                <body>
                      <p>
                            Some of my other Videos are : 
                            
                        </p>
                        <h2>Zandu Balm Mad Ad</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tLTZJyAn_Ug" frameborder="0" allowfullscreen></iframe>
                        <h2>Startup Interview</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/1fX6Bn5UIeE" frameborder="0" allowfullscreen></iframe>
                        <h2>Market Research</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/JopdsBrYK4M" frameborder="0" allowfullscreen></iframe>
                        <hr/>
      <div>
    <!-- Begin Comments JavaScript Code --><script type="text/javascript" async>function ajaxpath_5836da32e2a1d(url){return window.location.href == '' ? url : url.replace('&s=','&s=' + escape(window.location.href));}(function(){document.write('<div id="fcs_div_5836da32e2a1d"><a title="free comment script" href="http://www.freecommentscript.com">&nbsp;&nbsp;<b>Free HTML User Comments</b>...</a></div>');fcs_5836da32e2a1d=document.createElement('script');fcs_5836da32e2a1d.type="text/javascript";fcs_5836da32e2a1d.src=ajaxpath_5836da32e2a1d((document.location.protocol=="https:"?"https:":"http:")+"//www.freecommentscript.com/GetComments2.php?p=5836da32e2a1d&s=#!5836da32e2a1d");setTimeout("document.getElementById('fcs_div_5836da32e2a1d').appendChild(fcs_5836da32e2a1d)",1);})();</script><noscript><div><a href="http://www.freecommentscript.com" title="free html user comment box">Free Comment Script</a></div></noscript><!-- End Comments JavaScript Code -->
      <hr/>
        <h3>You can follow me on twitter, facebook and EyeEm by clicking on the icon below </h3>
        <h4>If you like the video, please like and share  my work. You can do that by clicking on the YouTube icon and subscribe to my channel</h4>
        <a href="https://www.facebook.com/mayanksagar.27" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/768px-F_icon.svg.png" style="border:0px solid black;max-width:8%;" alt="Facebook">
        </a>
        <a href="https://twitter.com/Biharibalak" target="_blank">
            <img src="http://www.science.unsw.edu.au/files/twitter-icon-1024x1024.png" style="border:0px solid black;max-width:8%;" alt="Twitter">
          </a>
          <a href="https://www.eyeem.com/u/mayanksagar1" target="_blank">
              <img src="https://lh3.googleusercontent.com/v1Eh8qzDdPSHgPp2NINY1b3UcBh4lTRM6ELvpqPk0EmvAkU4z6cVrmVVBRNKMY1xc9c=w300" style="border:0px solid black;max-width:8%;" alt="Twitter">
            </a>
            <a href="https://www.youtube.com/channel/UCTSudzwdXOlGLKdORIGQRdQ" target="_blank">
                <img src="https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png" style="border:0px solid black;max-width:12%;" alt="YouTube">
            </a>

      </div>
                        </body>`,

    },
    'article-three': {title: 'Pictures|Mayank Sagar',
        heading: 'Pictures',
        date:'' ,
        content:`<html>
    <head>
         <title>Mayank</title>
        <meta name="View port" content="width=device-width,intial scale=1" />
        <style>

h1{
    text-align:center;
    color: black;
    font-family:sans-serif;
}
p{
text-align:center;
font-size:24px;

}
body{

        background: url(http://cdn.wallpapersafari.com/10/32/vHkSId.jpg);
        color: white;
        font-family: Helvetica;
        padding-top: 20px;
        background-size: cover;
        background-position: center center;
        background-repeat:no-repeat;
        background-attachment: fixed;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 20px;
        max-width: 800px;
         margin: 0 auto;
         font-family: sans-serif;
         padding-left: 20px;
         padding-right: 20px;
}
</style>
</head>
<div>
<iframe src="http://free.timeanddate.com/clock/i5h0s79h/n438/tlin/fn15/fs15/fc9f0/tct/pct/tt0/tw1/tm1/tb4" frameborder="0" width="123" height="36" allowTransparency="true"></iframe>

</div>
                <body>
                      <p>
                            Slideshow of Pictures.
                        </p>
                        <h2>My small tribute to R.K Laxman sir through my cartoons</h2> 
                        <script type="text/javascript" src="http://www.linkbuildingservices4sites.com/resources/slide-show.js"></script>   

<div id="imageslideshow1"></div> 
<script type="text/javascript">  
var mygallery=new fadeSlideShow({   
 wrapperid: "imageslideshow1", //ID of blank DIV on page to house Slideshow   
 dimensions: [750, 500], //width/height of gallery in pixels. Should reflect dimensions of largest image (www.2createawebsites.com)
   imagearray:  [     
   ["https://pbs.twimg.com/media/B8SKtKvCEAEZZOq.jpg"],    
   ["https://pbs.twimg.com/media/B8SJOa7CUAEuP9P.jpg"], 
   ["https://pbs.twimg.com/media/B8MNOMvCMAAVaze.jpg"],
   ],
  displaymode: {type:'auto', pause:1000, cycles:0, wraparound:false},   
  persist: false, //remember last viewed slide and recall within same session?   
  fadeduration: 2000, //transition duration (milliseconds)  
  descreveal: "ondemand",
  togglerid: ""
  })
 </script>  

                        <hr/>
                        <h2>Some other pics of mine</h2>
                        <script type="text/javascript" src="http://www.linkbuildingservices4sites.com/resources/slide-show.js"></script>   

<div id="imageslideshow2"></div> 
<script type="text/javascript">  
var mygallery=new fadeSlideShow({   
 wrapperid: "imageslideshow2", //ID of blank DIV on page to house Slideshow   
 dimensions: [750, 500], //width/height of gallery in pixels. Should reflect dimensions of largest image (www.2createawebsites.com)
   imagearray:  [     
   ["https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/13245417_1007216896035734_7631574402319053336_n.jpg?oh=5af205264f300f2f4476a16f3153bae4&oe=58D3515D"],    
   
   ["https://scontent-sjc2-1.xx.fbcdn.net/t31.0-8/s960x960/12841366_943047492445526_8190240597555264922_o.jpg"],
   ["https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/13254510_1003432549747502_378642395448204543_n.jpg?oh=ddd28fe269e7807f150df419d5d2acad&oe=58C0C29B"],
   
   ["https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/12247117_893448574079234_7784851940404832298_n.jpg?oh=98234aeaabb567f6693e684a2b1a866c&oe=58CE1E34"],
    ["https://scontent-sjc2-1.xx.fbcdn.net/v/t1.0-9/13237784_1003424846414939_4816777132527706957_n.jpg?oh=59ca5fa853c1897ce35049119930547b&oe=58C4C16F"],
   ],
  displaymode: {type:'auto', pause:1000, cycles:0, wraparound:false},   
  persist: false, //remember last viewed slide and recall within same session?   
  fadeduration: 2000, //transition duration (milliseconds)  
  descreveal: "ondemand",
  togglerid: ""
  })
 </script>  
                        <hr/>
      <div>
      <!-- Begin Comments JavaScript Code --><script type="text/javascript" async>function ajaxpath_5836d33b19a72(url){return window.location.href == '' ? url : url.replace('&s=','&s=' + escape(window.location.href));}(function(){document.write('<div id="fcs_div_5836d33b19a72"><a title="free comment script" href="http://www.freecommentscript.com">&nbsp;&nbsp;<b>Free HTML User Comments</b>...</a></div>');fcs_5836d33b19a72=document.createElement('script');fcs_5836d33b19a72.type="text/javascript";fcs_5836d33b19a72.src=ajaxpath_5836d33b19a72((document.location.protocol=="https:"?"https:":"http:")+"//www.freecommentscript.com/GetComments2.php?p=5836d33b19a72&s=#!5836d33b19a72");setTimeout("document.getElementById('fcs_div_5836d33b19a72').appendChild(fcs_5836d33b19a72)",1);})();</script><noscript><div><a href="http://www.freecommentscript.com" title="free html user comment box">Free Comment Script</a></div></noscript><!-- End Comments JavaScript Code -->
      <hr/>
        <h3>You can follow me on twitter, facebook and EyeEm by clicking on the icon below </h3>
        <h4>If you like the video, please like and share  my work. You can do that by clicking on the YouTube icon and subscribe to my channel</h4>
        <a href="https://www.facebook.com/mayanksagar.27" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/768px-F_icon.svg.png" style="border:0px solid black;max-width:8%;" alt="Facebook">
        </a>
        <a href="https://twitter.com/Biharibalak" target="_blank">
            <img src="http://www.science.unsw.edu.au/files/twitter-icon-1024x1024.png" style="border:0px solid black;max-width:8%;" alt="Twitter">
          </a>
          <a href="https://www.eyeem.com/u/mayanksagar1" target="_blank">
              <img src="https://lh3.googleusercontent.com/v1Eh8qzDdPSHgPp2NINY1b3UcBh4lTRM6ELvpqPk0EmvAkU4z6cVrmVVBRNKMY1xc9c=w300" style="border:0px solid black;max-width:8%;" alt="Twitter">
            </a>
            <a href="https://www.youtube.com/channel/UCTSudzwdXOlGLKdORIGQRdQ" target="_blank">
                <img src="https://www.youtube.com/yt/brand/media/image/YouTube-logo-full_color.png" style="border:0px solid black;max-width:12%;" alt="YouTube">
            </a>

      </div>
                        </body>`,

    }
};
function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `<html>
        <head>
            <title>
               ${title}
            </title>
            <meta name="viewport" content="width=device-width, intial scale=1">
             <link href="/ui/style.css" rel="stylesheet">
        </head>
        <body>
                    <div>
                        <a href="/">Home Page</a>
                        <a href="/article-one" color="white">| About ME</a>
                        <a href="/article-two" color="white">| Videos</a>
                        <a href="/article-three" color="white">| Pictures </a>
                    </div>
                    <hr/>
                    <h3>
                       ${heading}
                    </h3>
                    <div>
                       ${date}
                    </div>
                    <div>
                          ${content}
                    </div>
            </div>
        </body>
    </html>
    `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var names =[];
app.get('/submit-name',function(req, res){
  var name = req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
})
app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
      res.send(createTemplate(articles[articleName]));
    });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
