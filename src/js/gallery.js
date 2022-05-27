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
			var photoCount = 0;
			var photoContent = "";
			
			$.each(res.responseObject, function(index, feed)
			{
				if (feed.feedDetails.feed_type == "photo")
				{
					//gagan = feed.feedDetails;

					photoCount = 1;

					$.each(feed.feedDetails.photos, function(index, photo)
					{
						photoContent += `<div class="mb-3 gg-element z-depth-1">
						<img class="d-inline rounded border img-fluid" style="max-width:100%" src="` + photo.file_url + `" />
                    	</div>`;
					});

					// photoContent += `<div class="mb-3 col-sm-3 col-lg-3 gg-element z-depth-1">
     //                    <img class="d-inline rounded border img-fluid" style="max-width:100%" src="https://institution.vawsum.com/photolibrary/` + feed.feedDetails.photos[0].file_url + `" />
     //                </div>`;
				}
			});
			
			if(photoCount == 1)
			{
				$("#feedGallerySection").append(photoContent);
			}
		}
		else
		{
			//alert("Ooops! We are facing some technical difficulties right now. Please try again later.");
		}
	});
});