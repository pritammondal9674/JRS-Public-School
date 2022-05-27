$(document).ready(function()
{
	let news =
	{
		schoolId: 900970//260349
	};

	$.ajax
	({
		url: "https://institution.vawsum.com/Websites/feedList",
		type: "POST",
		data: JSON.stringify(news),
		contentType: "application/json"
	})
	.done(function (response) 
	{
		var res = JSON.parse(response);

		if (res.isOk == true)
		{
			var newsCount = 0;
			var newsContent = ``;
			
			$.each(res.responseObject, function(index, feed)
			{
				//announcement = news
				if (feed.feedDetails.feed_type == "announcement" && newsCount < 3)
				{
                    if(newsCount == 0)
                    {
                        newsContent += `<div class="carousel-item active">`;
                    }
                    else
                    {
                        newsContent += `<div class="carousel-item">`;
                    }
                                        
                    newsContent +=`<div class="row no-gutters">
                                    <div class="col-md-12 col-sm-12 col-12 px-2">
                                        <div class="card grey lighten-3 z-depth-0">
                                            <div class="card-body">
                                                <h4 class="card-title font-weight-bold text-center">Title ` + (newsCount + 1) +`</h4>
                                                <p class="card-text">`;

					newsContent += feed.feedDetails.feed_message;	

					newsContent +=`</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

					newsCount++;
				}
			});

			if(newsCount > 0)
			{
				$("#newsTicker").html(newsContent);
			}
		}
		else
		{
			//alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
		}
	});
});