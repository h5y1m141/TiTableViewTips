var myApps = {};
myApps.uiparts = {};
myApps.ui = require('ui/ui');
myApps.ui.tableView = require('ui/tableView');

(function(){
  var entries = [
    {
      post_date:'2011/02/01',
      html_body:'これからはじまる',
      blogger:'oyamada',
      title:"これはタイトル１"
    },{
      post_date:'2011/03/02',
      blogger:'oyamada',
      html_body:'エントリの',
      title:"これはタイトル2"
    },{
      post_date:'2011/04/03',
      blogger:'oyamada',
      html_body:'内容は',
      title:"sssssこれはタイトル１"
    },{
      post_date:'2011/05/04',
      blogger:'oyamada',
      html_body:'こんな感じです',
      title:"タイトル4"
    }
  ];

  myApps.uiparts.mainTable = myApps.ui.tableView.init('tableView');
  var rows = [];
  for(var i=0;i<entries.length;i++){
    var entry = entries[i];
    var row = myApps.ui.createEntryRow(entry);
    rows.push(row);
    myApps.ui.tableView.setTableData(myApps.uiparts.mainTable,rows);
  }

  myApps.uiparts.bloggerList = myApps.ui.tableView.init('tableViewWhite');
  var listData = [
    {'name':'yokota'},
    {'name':'kanazawa'},
    {'name':'mitani'},
    {'name':'ohashi'},
    {'name':'uehara'},
    {'name':'oyamada'}
  ];
  var $$ = require('ui/styles').prop;
  var bloggerTable = Ti.UI.createTableView($$.bloggerTable);

  for(var j=0;j<listData.length;j++){
    var blogger = listData[j];
    var row1 = myApps.ui.createBloggerRow(blogger);
    bloggerTable.appendRow(row1);
  }


  myApps.ui.addElement(myApps.uiparts.mainTable);
  myApps.ui.addElement(bloggerTable);

  myApps.ui.createMainWindow();



}).call(this);
