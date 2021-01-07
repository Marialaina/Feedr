
$.ajax({url:"https://api.krzana.com/v3/publications?channel_ids[]=32735&limit=40"}).then( data => {
    const article = data.forEach((article, idx) => {
      console.log(idx);
      $(`#article-${idx}.author`).html(article.author_name);
      $('.featuredImage').html(article.media);
      $(`#article-${idx} a`).attr('href', article.source_url);
      $(`#article-${idx} .impressions`).html(article.origin);
     
    })
})



