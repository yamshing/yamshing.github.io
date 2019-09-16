(function() {
  var get_is_jp, get_language;

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

  $(document).ready(function() {
    var is_jp;
    is_jp = get_is_jp();
    return console.log("is_jp (in index.coffee) ", is_jp);
  });

}).call(this);
