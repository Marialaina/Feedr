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
      const auth = document.createElement('p');
      const fix = document.createElement('div');
      
      
      art.classList.add('article');
      section.classList.add('articleContent');
      ah.setAttribute('href', article.source_url);
      title.textContent = article.origin;
      ah.append(title);
      section.append(ah);
      auth.textContent = article.author_name;
      auth.classList.add('author');
      section.append(auth);
      fix.classList.add('clearfix');
      art.append(section);
      art.append(fix);
      document.querySelector('#main').append(art);
    })
})
