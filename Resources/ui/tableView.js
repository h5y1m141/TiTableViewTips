var $$ = require('ui/styles').prop;
var tableView = Ti.UI.createTableView($$.tableView);

var exports = {
  init:function(){

    tableView.addEventListener('click',function(e){
      var index = e.index;
      var row = myApps.ui.createComposeRow();
      row.rowNum =  index;
      myApps.ui.tableView.insertRowAfter(index,row,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN});
      row.addEventListener('click',function(e){
        myApps.ui.tableView.deleteRow(index+1,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.UP});
      });


      // if(row.sourceNum){
      //   row.sourceNum = index;
      // }else{
      //   myApps.ui.tableView.deleteRow(index+1,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.UP});
      //   row.sourceNum =  null;
      // }



    });
    tableView.addEventListener('scrollEnd',function(e){
      var last_index = tableView.data[0].rows.length - 1;
      var post_date = tableView.data[0].rows[last_index].data.post_date;

      myApps.entries.findLocalJSONDB(post_date,function(cached){

        for(var i=0;i<cached.length;i++){
          var rows = [];
          var entry = cached[i];
          Ti.API.info('読み込まれたエントリタイトル：'+cached[i].title);
          var row = myApps.ui.createEntryRow(entry);
          tableView.appendRow(row,{
            animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
          });
        }
      });
    });
    return tableView;
  },

  setTableData:function(/*array*/ data){
    return tableView.setData(data,{
      animated:true,
      animationStyle:Titanium.UI.iPhone.RowAnimationStyle.DOWN
    });
  }
};
