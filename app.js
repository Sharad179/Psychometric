var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var httpProxy = require('http-proxy');


var multer = require('multer'); // v1.0.5
var upload = multer();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

const apiProxy = httpProxy.createProxyServer({
  target: 'http://localhost:8002'
})

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth() + 1;
  var day = today.getDate();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  return (year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s);
}
startTime();

app.use('/api', function (req, res) {
  apiProxy.web(req, res);
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});
app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})
// app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
// app.set('view engine','ejs')

var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '',
  port: '',
  user: '',
  password: '',
  database: ''
});




app.all('/authenticate', upload.array(), function (req, res, next) {
  var querystring = "SELECT * FROM PSYCHOMETRIC_USERS WHERE USERNAME = '" + req.body.username + "' AND PASSWORD = '" + req.body.password + "'";
  connection.query(querystring, function (err, result) {
    if (err) {
      throw err
    }
    else {
      if (result[0]) {

        res.json({
          "username": result[0].USERNAME,
          "token": result[0].TOKEN,
          "role": result[0].ROLE,
          "status": result[0].STATUS
        })


      }
      else {
        res.json({
          "status": "User Does not Exist",
        })
      }
    }
  })

})

app.all('/psychometricQuestions', upload.array(), function (req, res, next) {
  var querystring = "SELECT PSYCHOMETRIC_ANSWERS.QUESTION_ID,V1.QUESTION_VALUE,CONCAT('[',GROUP_CONCAT(JSON_OBJECT('value',PSYCHOMETRIC_ANSWERS.ANSWER_VALUE, 'score',PSYCHOMETRIC_ANSWERS.ANSWER_SCORE)),']') AS ANSWER FROM PSYCHOMETRIC_ANSWERS INNER JOIN (SELECT * FROM ((SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Cognitive'  ORDER BY RAND() LIMIT 2) UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Emotional Maturity'  ORDER BY RAND() LIMIT 3)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'General Behaviour'  ORDER BY RAND() LIMIT 2)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Truthfulness And Responsibility'  ORDER BY RAND() LIMIT 2)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Ethical Conduct'  ORDER BY RAND() LIMIT 2)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Financial Acumen'  ORDER BY RAND() LIMIT 3)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Time And Priority Management'  ORDER BY RAND() LIMIT 1)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Strategic Ability'  ORDER BY RAND() LIMIT 1)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'SelfControl'  ORDER BY RAND() LIMIT 1) UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Self-Confidence'  ORDER BY RAND() LIMIT 1)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Result Driven'  ORDER BY RAND() LIMIT 1)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Proactiveness' ORDER BY RAND() LIMIT 1) UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Positive Attitude' ORDER BY RAND() LIMIT 1)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Planning And Execution'  ORDER BY RAND() LIMIT 3)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Business Acumen'  ORDER BY RAND() LIMIT 1)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Credit History'  ORDER BY RAND() LIMIT 2)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Flexibility' ORDER BY RAND() LIMIT 2)UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Drive To Succeed'  ORDER BY RAND() LIMIT 2) UNION (SELECT QUESTION_ID,QUESTION_VALUE FROM PSYCHOMETRIC_QUESTIONS WHERE CATEGORY = 'Assertiveness'  ORDER BY RAND() LIMIT 1)) AS V )AS V1 ON V1.QUESTION_ID =  PSYCHOMETRIC_ANSWERS.QUESTION_ID GROUP BY PSYCHOMETRIC_ANSWERS.QUESTION_ID,V1.QUESTION_VALUE;";
  connection.query(querystring, function (err, result) {
    if (err) {
      throw err
    }
    else {
      if (result) {
        var responseObject = [];

        for (var i in result) {
          var eachobj = {};
          eachobj["Id"] = result[i].QUESTION_ID;
          eachobj["Ques"] = result[i].QUESTION_VALUE;
          eachobj["Ans"] = JSON.parse(result[i].ANSWER);

          responseObject.push(eachobj);
        }
        res.json({
          "resp": responseObject
        })
      }
      else {
        res.json({
          "resp": "Data Does not Exist",
        })
      }
    }
  })
})
app.all('/psychometricScoreAdmin', upload.array(), function (req, res, next) {
  
 
    var querystring = "select USERID,SUM(SCORE) AS NET_SCORE from PSYCHOMETRIC_SCORE group by USERID";
    connection.query(querystring,function (err, result) {
      if (err) {
        res.json({ "result": "failure" });
        throw err
      } else {
        var resultArray = [];
        for(var i in result){
           var arrayval = [];
           arrayval.push(parseInt(i)+1);
           arrayval.push(result[i].USERID);
           arrayval.push(result[i].NET_SCORE);
           resultArray.push(arrayval);
        }
        res.json({ "result": resultArray });
      }
    })
  
});
app.all('/psychometric', upload.array(), function (req, res, next) {
  if (req.body.length == 0) {
    res.json({ "result": "success" });
  }
  else {
    var querystring = "INSERT INTO PSYCHOMETRIC_SCORE (USERID,QUESTION_ID,QUESTION,ANSWER,SCORE) VALUES ?";
    connection.query(querystring, [req.body], function (err, result) {
      if (err) {
        res.json({ "result": "failure" });
        throw err
      } else {
        res.json({ "result": "success" });
      }
    })
  }
});

app.all('/inactiveuser', function (req, res, next) {
  var querystring = "UPDATE PSYCHOMETRIC_USERS SET STATUS = 'Inactive' WHERE USERNAME = '" + req.body.username + "'";
  connection.query(querystring, function (err, result) {
    if (err) {
      res.json({ "result": "failure" });
      throw err
    } else {
      res.json({ "result": "success" });
    }
  })
})

app.listen(8002, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('API Server is listening to http://localhost:8002');
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
