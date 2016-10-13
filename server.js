var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    'article-one': {
        title: 'Article One|Mayank Sagar',
        heading: 'Article One',
        date: 'oct 13, 2016',
        content:`
                      <p>
                            This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                        </p>
                         <p>
                            This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                        </p>
                         <p>
                            This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article. This is the content of my first article.
                        </p>`,
    },
    'article-two': {title: 'Article two|Mayank Sagar',
        heading: 'Article two',
        date: 'oct 13, 2016',
        content:`
                      <p>
                            This is the content of my second article. 
                        </p>`,
        
    },
    'article-three': {title: 'Article three|Mayank Sagar',
        heading: 'Article three',
        date: 'oct 13, 2016',
        content:`
                      <p>
                            This is the content of my third article. 
                        </p>`
        
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
           <div class="container">
                    <div>
                        <a href="/">Home</a>
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


var port = 8096; // Use 8080 for local development because you might already have apache running on 80
app.listen(8096, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
