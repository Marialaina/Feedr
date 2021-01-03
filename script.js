//https://api.krzana.com/v3/publications?channel_ids[]=32735&limit=40

//make a ajax request

// $.ajax({
//     url: "https://api.krzana.com/v3/publications?channel_ids[]=32735&limit=40",
//     // Tell YQL what we want and that we want JSON
//     data: {
//         // q: "select title,abstract,url from search.news where query=\"cat\"",
//         format: "json"
//     },
//     // Work with the response
//     success: function( response ) {
//         console.log( response ); // server response
//         //loop over the response array
//         //create h3 elements
//         //insert the response sub i (from the for loop). text
//     }
// })

$.ajax({url:"https://api.krzana.com/v3/publications?channel_ids[]=32735&limit=40"}).then( data => {
    console.log(data);
    const article = data.map(article => {
         $('#articleC').html(article.author_name);
            // author: article.author_name,
            // origiN: article.origin,
            // url: article.source_url,
            // description: article.teaser_text
        
        
    })
    console.log(article);
})




