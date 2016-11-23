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
                      <p>
                            This is the content of my first article. I am experimanting whether html works on content thing or not This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                        </p>
                         <p>
                            This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                        </p>
                         <p>
                            This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                        </p>

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
                            This is the content of my second article.
                        </p>
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
                            This is the content of my third article.
                        </p>
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
                        <a href="/article-one" target="_blank" color="white">| About ME</a>
                        <a href="/article-two" target="_blank" color="white">| Videos</a>
                        <a href="/article-three" target="_blank" color="white">| Pictures </a>
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
