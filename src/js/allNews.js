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
				if (feed.feedDetails.feed_type == "announcement")
				{                                  
                    newsContent +=`<div class="card mb-4">
                   	<div class="card-header">
            		<h4 class="mb-0 font-weight-normal text-left">News Title #` + (newsCount + 1) +`</h4>
				 	</div>
				 	<div class="card-body">
                    <p class="text-left">`;

					newsContent += feed.feedDetails.feed_message;	

					newsContent +=`</p>
                            </div>
                        </div>`;

					newsCount++;
				}
			});

			if(newsCount > 0)
			{
				$("#divAllNewsDetails").html(newsContent);
			}
		}
		else
		{
			//alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
		}
	});
});