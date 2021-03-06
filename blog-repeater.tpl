
[repeater id='1' pages="22" order="start_time desc" display_type="news" where="post_status='Published'"]
	[cond type="is" subject="{{index}}" value="0"]
<div class="row mt-5">
	<div class="col-sm-12">
		<div class="bg-light-gray bg-hover-light-gray-dark box-sizing align-items-center d-block d-lg-flex h-100 pointer" onclick="location.href='{{path}}'">
			
			<div class="w-100 w-lg-50 p-4 px-5">
				
				[entry_categories_repeat id="{{calendar_entry_id}}"]
				<a class="btn btn-outline-secondary rounded-0 p-1 px-3" href="/blog/{{{name}}}">{{{title}}}</a>
				[/entry_categories_repeat]

				<h2 class="h3 mt-4 post-intro">
					[is_set value="{{heading_title}}"]
					<a class="text-secondary" href="{{path}}">{{heading_title}}</a>
					[/is_set]
					[is_empty value="{{heading_title}}"]
					<a class="text-secondary" href="{{path}}">{{event_title}}</a>
					[/is_empty]
				</h2>
				<p class="post-intro my-4">{{post_intro}}</p>
				<p class="d-none d-sm-block">
					<a aria-label="Blog Post Read More" class="btn btn-primary btn-md" href="{{path}}">Read More</a>
				</p>
			</div>
            <div class="w-100 w-lg-50">
				<img alt="{{event_title}}" src="[get_asset_file_url id={{listing_image}}]" class="img-fluid w-100">
			</div>
		</div>
	</div>
</div>
	[/cond]
[/repeater]

<div class="row">
[repeater id='1' pages="22" order="start_time desc" display_type="news" where="post_status='Published'"]
	[cond type="is_not" subject="{{index}}" value="0"]
	<div class="col-sm-6 col-lg-4 mt-4">
		<div class="bg-light-gray bg-hover-light-gray-dark pointer h-100" onclick="location.href='{{path}}'">
			<img alt="{{event_title}}" src="[get_asset_file_url id={{listing_image}}]" class="img-fluid h-200p cover w-100">
			<div class="p-3 p-lg-4">
				
				[entry_categories_repeat id="{{calendar_entry_id}}"]

				<a class="btn btn-outline-secondary rounded-0 p-1 px-3" href="/blog/{{{name}}}">{{{title}}}</a>

				[/entry_categories_repeat]
				
				<h2 class="h4 mt-4 post-intro">
					[is_set value="{{heading_title}}"]
					<a class="text-secondary" href="{{path}}">{{heading_title}}</a>
					[/is_set]
					[is_empty value="{{heading_title}}"]
					<a class="text-secondary" href="{{path}}">{{event_title}}</a>
					[/is_empty]
				</h2>
                <p class="text-muted small">
				[is_set value="{{post_author}}"]
					{{post_author}}
				[/is_set]
					
				[is_empty value="{{post_author}}"]
					Editor
				[/is_empty]

					| [print_date format="F d, Y" timestamp="{{start_time}}"]</p>
				<p class="post-intro">{{post_intro}}</p>
				
			</div>
		</div>
	</div>
	[/cond]
[/repeater]
</div>
