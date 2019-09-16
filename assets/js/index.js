(function() {
  var get_is_jp, get_language, toggle_list;

  get_language = function() {
    var e;
    try {
      return (navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0, 2);
    } catch (error) {
      e = error;
      return void 0;
    }
  };

  get_is_jp = function() {
    var is_jp, lang;
    lang = get_language();
    is_jp = false;
    if (lang !== void 0 && lang === 'ja') {
      return is_jp = true;
    }
  };

  toggle_list = function(list, is_jp) {
    var link;
    link = $(list).attr('link');
    if (link.match(/_jp.html/)) {
      if (is_jp) {
        return $(list).show();
      } else {
        return $(list).hide();
      }
    } else {
      if (is_jp) {
        return $(list).hide();
      } else {
        return $(list).show();
      }
    }
  };

  $(document).ready(function() {
    var app_list_arr, i, is_jp, len, list, results;
    is_jp = get_is_jp();
    console.log("is_jp (in index.coffee) ", is_jp);
    app_list_arr = $('.app_list');
    results = [];
    for (i = 0, len = app_list_arr.length; i < len; i++) {
      list = app_list_arr[i];
      results.push(toggle_list(list, is_jp));
    }
    return results;
  });

}).call(this);
