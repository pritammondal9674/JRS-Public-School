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
			var eventCount = 1;
			var eventContent = "";

			
			$.each(res.responseObject, function(index, feed)
			{
				//announcement = news
				if (feed.feedDetails.feed_type == "event")
				{	
					eventContent += `<div class="card border mb-4">
					<div class="card-body">
						<h4 class="card-title h4-responsive mb-0">` + feed.feedDetails.events.title + `</h4>
						<hr class="mt-0">
						<p class="card-text">`;

                    eventContent += feed.feedDetails.events.content;

					eventContent += `</div>
					<div class="card-footer bg-light">
						<small class="text-muted font-weight-bold">
						Start Date : ` + feed.feedDetails.events.startDate + `, `+ feed.feedDetails.events.startTime +`<br>
						End Date : ` + feed.feedDetails.events.endDate + `, `+ feed.feedDetails.events.endTime +`</small>
						</div>
					</div>`;

					eventCount ++;
				}
			});

			if(eventCount > 1)
			{
				$("#divAllEventsDetails").append(eventContent);
			}
		}
		else
		{
			//alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
		}
	});
});