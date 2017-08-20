var API_BASE_URL = 'https://www.googleapis.com/youtube/v3'



function renderThumbnail (imageUrl) {
  var html = '<img src="@image-url">'
    .replace('@image-url', imageUrl)

  $('section.display').append(html)
}

$(function () {
  $('#srchbtn').on("click", function(event) {
    event.preventDefault();

    var searchCriteria = $('#userInput').val();
    console.log(searchCriteria, 'searchCriteria')

    $.ajax(API_BASE_URL + '/search', {
      data: {
        part: 'snippet',
        key: 'AIzaSyBoukiEgtM97jIIsGhE5NFZ0B2q06kp-hM',
        q: searchCriteria
      },
      complete: function (jqXHR, textStatus) {
        var json = JSON.parse(jqXHR.responseText)
        console.log(json)

        var items = json.items

        for (var i = 0; i < items.length; i++) {
          var currentItem = items[i]
          renderThumbnail(currentItem.snippet.thumbnails.high.url)
        }
      }
    })
  })
})
