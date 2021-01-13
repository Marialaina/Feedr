$.ajax({url:"https://api.krzana.com/v3/publications?channel_ids[]=32735&limit=40"}).then( data => {
    const article = data.forEach((article, idx) => {
      console.log(article);
      // $(`#article-${idx} .author`).html(article.author_name);
      // $('.featuredImage').html(article.media);
      // $(`#article-${idx} a`).attr('href', article.source_url);
      // $(`#article-${idx} .impressions`).html(article.origin);
      const img = document.createElement('img');
      if (article.media) {
        img.src = article.media;
      } else {
        img.src = "https://media-exp1.licdn.com/dms/image/C4D0BAQE221ShoLUd0g/company-logo_200_200/0/1519866924737?e=2159024400&v=beta&t=dR4jioPzXk_5eKjNXDwiADvDHfrFZLO2eLSOyZpiKJY";
      }
      const section2 = document.createElement('section');
      section2.classList.add('featuredImage');
      section2.append(img);


      const art = document.createElement('article');
      const section = document.createElement('section');
      const ah = document.createElement('a');
      const title = document.createElement('h3');
      const teaser = document.createElement('p');
      const fix = document.createElement('div');
      const url = document.createElement('h4');
     

      url.textContent = article.author_url;
      art.classList.add('article');
      
      art.append(section2);
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
