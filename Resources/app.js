var myApps = {};
myApps.ui = require('ui/ui');
myApps.tableView = require('ui/tableView');

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
  myApps.ui.tableView = myApps.tableView.init();
  var rows = [];
  for(var i=0;i<entries.length;i++){
    var entry = entries[i];
    var row = myApps.ui.createEntryRow(entry);
    rows.push(row);
    myApps.tableView.setTableData(rows);
  }
  myApps.ui.addElement(myApps.ui.tableView);
  myApps.ui.createMainWindow();

}).call(this);
