var exports = {
  createBloggerRow:function(/* json */ blogger){

    var row = Ti.UI.createTableViewRow($$.bloggerRow);
    var switchBtn = Ti.UI.createSwitch($$.switchBtn);
    switchBtn.blogger = blogger.name;
    switchBtn.addEventListener('change',function(e){
      Ti.API.info('Switch value = ' + e.value
                  + ' act val ' + switchBtn.blogger);
    });

    row.add(switchBtn);

    var icon_iamge = Ti.UI.createImageView($$.iconImage);
    icon_iamge.image = '/ui/images/' + blogger.name + '.gif';
    row.add(icon_iamge);

    row.text = blogger.name;
    return row;

  },
  createComposeRow :function(){
    var row = Ti.UI.createTableViewRow($$.viewRow);
    row.showd = true;
    var mail = Ti.UI.createImageView($$.lightMailBtn);
    mail.image = '/ui/parts/light_mail.png';
    row.add(mail);

    var readLater = Ti.UI.createImageView($$.lightTextBtn);
    readLater.image = '/ui/parts/light_text.png';
    row.add(readLater);

    var star = Ti.UI.createImageView($$.lightStarBtn);
    star.image = '/ui/parts/light_star.png';
    row.add(star);

    var tweet = Ti.UI.createImageView($$.lightCommentBtn);
    tweet.image = '/ui/parts/light_comment.png';
    row.add(tweet);

    return row;

  },
  createEntryRow :function(/* JSON */ entry){
    var self = this;
    var row = Ti.UI.createTableViewRow($$.viewRow);
    row.data = entry;
    row.addEventListener('click', function(e){

    });

    Ti.include('lib/humanedates.js');
    var updateTime = Ti.UI.createLabel($$.updateTime);
    updateTime.text = humaneDate(entry.post_date);
    row.add(updateTime);

    var title = Ti.UI.createLabel($$.entry);
    title.text = entry.title,
    row.add(title);

    var entrySummary = Ti.UI.createLabel($$.entrySummary);
    entrySummary.text = entry.html_body.replace(/<\/?[^>]+>/gi, "");
    row.add(entrySummary);

    // var bloggerName = Ti.UI.createLabel($$.bloggerName);
    // bloggerName.text = entry.blogger;
    // row.add(bloggerName);

    var icon_iamge = Ti.UI.createImageView($$.iconImage);
    icon_iamge.image = '/ui/images/' + entry.blogger + '.gif';
    row.add(icon_iamge);

    var iconOverrap = Ti.UI.createView($$.iconOverrap);
    row.add(iconOverrap);

    row.className = entry.blogger;
    return row;
  },
  showEntryWindow:function(){
    var win = Titanium.UI.createWindow($$.entryWin);
    win.rightNavButton = (function(){
      var button = Titanium.UI.createButton($$.composeBtn);
      button.addEventListener('click', function() {
        // var twitter = require("/lib/twitter").util;
        // showPostWindow();
      });
      return button;
    })();
    win.leftNavButton = (function(){
      var button = Titanium.UI.createButton($$.backBtn);
      button.addEventListener('click', function() {
        win.close();
      });
      return button;
    })();
    win.tabBarHidden = true;
    // 以下はエントリ詳細画面のタイトル部分のUI
    return win;

  },
  createMainWindow :function(){

    win.title = 'あすなろBLOG';
    win.rightNavButton = (function(){
      var button = Titanium.UI.createButton($$.refreshBtn);
      button.addEventListener('click', function() {
      });
      return button;
    })();

    win.leftNavButton = (function(){
      var button = Titanium.UI.createButton($$.listBtn);
      button.addEventListener('click', function() {
      Ti.API.info(myApps.uiparts.mainTable.moved);
      if(!myApps.uiparts.mainTable.moved){
        myApps.uiparts.mainTable.animate({
          duration:180,
          left:200
        });
        myApps.uiparts.mainTable.moved = true;
      }else{
        myApps.uiparts.mainTable.animate({
          duration:180,
          left:0
        });
        myApps.uiparts.mainTable.moved = false;
      }

      });
      return button;
    })();
    tab1.window = win;
    tabGroup.addTab(tab1);
    tabGroup.open();
  },
  addElement:function(/* Ti.UI.View Object*/ element){
    return win.add(element);
  }
};

var $$ = require('ui/styles').prop;
var win = Titanium.UI.createWindow($$.win);
var tabGroup = Titanium.UI.createTabGroup();
var tab1 =Titanium.UI.createTab();
var tableView = Ti.UI.createTableView($$.tableView);
tableView.addEventListener('scrollEnd',function(){
  var last_index = tableView.data[0].rows.length - 1;
  //alert(last_index);
});
tableView.addEventListener('click', function(e){
  // alert(e.index);
  // alert(e.row.data.post_date);
});

// private method
function showPostWindow(){
  var $$ = require('ui/styles').prop;
  var tweetWindow = Titanium.UI.createWindow($$.tweetWindow);
  tweetWindow.barColor = "#000";
  var closeBtn = Titanium.UI.createButton($$.closeBtn);
  closeBtn.addEventListener('click',function(){
    tweetWindow.close();
  });
  tweetWindow.leftNavButton = closeBtn;
  tweetWindow.open({
    modal:true,
    modalTransionStyle:Ti.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL,
    modalStyle:Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
  });
  return tweetWindow;
}
