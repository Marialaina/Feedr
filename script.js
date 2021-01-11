$.ajax({url:"https://api.krzana.com/v3/publications?channel_ids[]=32735&limit=40"}).then( data => {
    const article = data.forEach((article, idx) => {
      // console.log(idx);
      // $(`#article-${idx} .author`).html(article.author_name);
      // $('.featuredImage').html(article.media);
      // $(`#article-${idx} a`).attr('href', article.source_url);
      // $(`#article-${idx} .impressions`).html(article.origin);
      
      const art = document.createElement('article');
      const section = document.createElement('section');
      const ah = document.createElement('a');
      const title = document.createElement('h3');
      const teaser = document.createElement('p');
      const fix = document.createElement('div');
      const url = document.createElement('h4');
     

      url.textContent = article.author_url;
      art.classList.add('article');
      art.append(section);
      art.append(fix);
      document.querySelector('#main').append(art);
      
      console.log();
      section.classList.add('articleContent');
      
      ah.setAttribute('href', article.source_url);
      ah.append(title);
      section.append(ah);
      
      title.textContent = article.origin;
      
      
      teaser.textContent = article.teaser_text;
      teaser.classList.add('teaser');
      section.append(teaser);
      
      console.log();
      
      fix.classList.add('clearfix');
      
      
    })
})
