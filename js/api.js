var $xhr = $.ajax({
  method: 'GET',
  url: 'https://howaboutlunch.herokuapp.com/',
  dataType: 'json'
});

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }

    console.log(data);
});

$xhr.fail(function(err) {
    console.log(err);
});
