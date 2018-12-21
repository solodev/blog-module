# blog-module

## Prerequisites
<ul>
	<li><a target="_blank" href="https://getbootstrap.com/">Boostrap4</a></li>
	<li><a target="_blank" href="https://fontawesome.com/">FontAwesome5</a></li>
</ul>

## Step 1: Add the Form
 - blog-form.tpl

Create a calendar for Alerts and upload the following form 

```
<script>
  $(function() {
    $("#resourceTypeSelect").change(function() {
      if ($(this).val() == "Listing Image") {
        $('#listingImage').show();
        $('#rssImage').hide();
      } else if ($(this).val() == "RSS Image") {
        $('#rssImage').show();
        $('#listingImage').hide();
      } else {
        $('#listingImage').hide();
        $('#rssImage').hide();
      }
    });
    $("#resourceTypeSelect").trigger("change");
  });
</script>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapseStatus" aria-expanded="true">Post Status<span class="toggle" aria-hidden="true"></span></a>
      </h4>
    </div>
    <div id="collapseStatus" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-3">
            <h2><label class="label-control" for="post_status">Post Status</label></h2>
            <select class="form-control" type="text" name="post_status">
              <option value="Draft">Draft</option>
              <option value="Published">Published</option>
            </select>
          </div>
          <div class="col-md-3">
            <h2><label class="label-control" for="post_author">Post Author</label></h2>
            <select class="form-control" type="text" name="post_author">
              <option value="None">None</option>
              <?php
                $ref_datatable = new Datatable(3);
                $ref_datatable_entries = $ref_datatable->getFilterDatatableEntries();
                
                sort($ref_datatable_entries);
                
                foreach($ref_datatable_entries as $oneEntry){
                  echo '<option value="'.$oneEntry->author_name.'">'.$oneEntry->author_name.'</option>';
                }
              ?>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapseImages" aria-expanded="true">Image Uploads <span class="toggle" aria-hidden="true"></span></a>
      </h4>
    </div>
    <div id="collapseImages" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-6">
            <h2><label class="label-control" for="resourceTypeSelect">Image Type</label></h2>
            <p class="subText">(Required) The image selected.</p>

            <select class="form-control" name="resourceType" id="resourceTypeSelect">
              <option value="Listing Image">Listing Image</option>
              <option value="RSS Image">RSS Image</option>
            </select>
          </div>

          <div class="col-md-6" id="listingImage">
            <h2><label class="label-control" for="listing_image">Listing Image</label></h2>
            <p class="subText">(Required) The image that appears in the post and normal blogroll feed. Dimensions:
              951px by 561px.</p>
            <input type="file" class="file_upload" name="listing_image" id="listing_image" required>
          </div>

          <div class="col-md-6" id="rssImage">
            <h2><label class="label-control" for="rss_image">RSS Image</label></h2>
            <p class="subText">(Required) The image that appears in RSS emails. Dimensions: 700px by 413px.</p>
            <input type="file" class="file_upload" name="rss_image" id="rss_image" required>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapseContent" aria-expanded="true">Post Content<span class="toggle" aria-hidden="true"></span></a>
      </h4>
    </div>
    <div id="collapseContent" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h2><label class="label-control" for="heading_title">Heading Overwrite</label></h2>
            <p class="subText">(Optional) If specified, this will overwrite the article's title and become the main
              heading.</p>
            <input type="text" class="form-control" name="heading_title" id="heading_title">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h2><label class="label-control" for="post_intro">Intro/Subtitle</label></h2>
            <p class="subText">(Required) Content that appears before the Body Content and the introductory paragraph
              on the blogroll.</p>
            <textarea class="form-control" name="post_intro" id="post_intro" required></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h2><label class="label-control" for="post_content">Body Content</label></h2>
            <p class="subText">(Required) The main content section for an article.</p>
            <textarea class="wysiwyg" name="post_content" id="post_content" required></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapseMeta">META Data <span class="toggle" aria-hidden="true"></span></a>
      </h4>
    </div>
    <div id="collapseMeta" class="panel-collapse collapse">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h2><label name="meta_title">Meta Title</label></h2>
            <p class="subText">(Optional) Include a custom META Title that will show in your browser tab and in the
              page's source code.</p>
            <input type="text" class="form-control" name="meta_title" id="meta_title">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h2><label name="meta_description">Meta Description</label></h2>
            <p class="subText">(Optional) Include a custom META Description that search engines will index. 50-160
              Characters</p>
            <textarea class="form-control" id="meta_description" name="meta_description"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <h2><label name="meta_keywords">Meta Keywords</label></h2>
            <p class="subText">(Optional) Include the main keywords of the blog article.</p>
            <textarea class="form-control" id="meta_keywords" name="meta_keywords"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapseAdvanced">Advanced <span class="toggle" aria-hidden="true"></span></a>
      </h4>
    </div>
    <div id="collapseAdvanced" class="panel-collapse collapse">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <h2><label class="label-control" for="post_javascript">Custom JavaScript</label></h2>
            <p class="subText">(Optional) Use the following textbox to embed any custom JavaScript including tracking
              pixels and Google Analytics scripts. Be sure to open your JavaScript with a &lt;script&gt; tag and close
              everything with a &lt;/script&gt; tag.</p>
            <textarea class="form-control" name="post_javascript" id="post_javascript"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php
  if(isset($dataVars['calendar_entry_id'])){     
    $calendar_entry = new Calendar_Entry($dataVars['calendar_entry_id']);
    if($calendar_entry->path) { 
?>
<div class="panel-group">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h4 class="panel-title">
        <a data-toggle="collapse" href="#collapseURL">Post URL <span class="toggle" aria-hidden="true"></span></a>
      </h4>
    </div>
    <div id="collapseURL" class="panel-collapse collapse in">
      <div class="panel-body">
        <div class="row">
          <div class="col-md-12">
            <p class="subText">You can access this blog post at the following URL:</p>
            <a href="http://lunar.solodev.org<?= $calendar_entry->path ?>" target="_blank">http://lunar.solodev.org
              <?= $calendar_entry->path ?></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php 
  } 
} ?>

<script>
  $('.wysiwyg').ckeditor(function () {}, {
    customConfig: '/CK/config.js',
    height: '600px',
    basePath: '/CK/',
    toolbar: 'WP'
  });
</script>

```

## Step 2: Add the Repeater
 - blog-repeater.tpl

Add the following repeater shortcode. Since users will see this alert on all pages until they close it, it is best to include it in a template that is used throughout the site.

```
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

```

## Step 3: Add the Detail Template
 - blog-detail.tpl

```

[entry]
<article>
  <p>
    <span class="text-muted mr-5"><i class="far fa-clock text-primary pr-2"></i> [print_date format="F d, Y" timestamp="{{start_time}}"]</span>
    <span class="tags-list">
      [entry_tags_repeat id="{{calendar_entry_id}}"]
      <a href="/about-us/blog/tags/{{{name}}}.stml" class="text-capitalize"><u>{{{title}}}</u></a>
      [/entry_tags_repeat]
    </span>
  </p>
  <div class="mt-4">
    [social_share_fa_2 domain="lunarxp.solodev.org" protocol="http" facebook="true" twitter="true" linkedin="true" mail="true" container_classes="list-unstyled d-flex flex-wrap" classes="rounded-circle text-secondary text-hover-secondary-dark border border-secondary h-35p w-35p fa-lg mr-2 d-flex justify-content-center align-items-center" version="5"]
  </div>
  <hr>
  <p class="lead-sm">{{post_intro}}</p>
  <img alt="{{event_title}}" class="img-fluid w-100 my-4" src="[get_asset_file_url id={{listing_image}}]">
  <p class="float-left m-0 pr-2"><strong>Orlando, Florida, [print_date format="F d, Y" timestamp="{{start_time}}"] -- </strong></p>
  {{post_content}}
</article>

<article class="mt-5 py-5 position-relative border-top border-secondary">
  <p class="text-secondary position-absolute top-neg pr-2 text-uppercase bg-white"><strong>Author</strong></p>
  <div class="row align-items-center justify-content-between">
    <div class="col-6 col-md-4 col-lg-2 mx-auto">

      <?php
      $calendar_entry_id = $_REQUEST['calendar_entry_id'];
      $post_author = new Calendar(1);
      $post_entries = $post_author->getFilterDatatableEntries();

      foreach($post_entries as $post_entry){
        if ($calendar_entry_id == $post_entry->calendar_entry_id) {
          $blog_authors = new Datatable(3);
          $entries =  $blog_authors->getFilterDatatableEntries();
          foreach($entries as $oneEntry) {
            if ($oneEntry->author_name == $post_entry->post_author){
              if ($oneEntry->author_img) {
                $oImage = new Asset_File($oneEntry->author_img);
                $imageURL = '/core/fileparse.php/' . $oImage->parent_category_id . '/urlt/' . $oImage->name . '';
              }

              unset($oImage);
            ?>
        <div>
          <img alt="<?= $item->event_title ?>" class="img-fluid rounded-circle" src="<?= $imageURL ?>">
        </div>
      </div>
      <div class="col-8 mx-auto">
        
        [is_set value="{{author_title}}"]
        <p class="mb-0"><span class="font-weight-bold">{{post_author}}</span> <br>{{author_title}} here at LunarXP. Want to be featured on the LunarXP Blog? Get in touch. <br><a href="https://twitter.com/<?= $oneEntry->author_twitter ?>" target="_blank"><u>Follow me on Twitter</u></a></p>
        [/is_set]
        [is_empty value="{{author_title}}"]          
        <p class="mb-0"><span class="font-weight-bold">{{post_author}}</span> <br>Contributions Editor here at LunarXP. Want to be featured on the LunarXP Blog? Get in touch. <br><a href="https://twitter.com/<?= $oneEntry->author_twitter ?>" target="_blank"><u>Follow me on Twitter</u></a></p>
        [/is_empty]
      </div>
        <?php }
        }
      }
    } ?>
  </div>
</article>

[/entry]
```



## Step 4: Add the Following JavaScript
- /_/js/blog.js

Add the JS for various blog-related items.


```

/** ===========================================
  # Object-fit Cover IE Fix
============================================ */

window.onload = function () {

    // Detect IE
    function detectIE() {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        return false;
    }


    var isIE = detectIE();

    if (isIE != false) {

        var obCoverImgs = document.querySelectorAll('.cover');
        var imgLength;
        imgLength = obCoverImgs.length;
        var thisParent;
        var newDiv;
        var thisSRC;

        for (var i = 0; i < imgLength; i++) {

            thisSRC = obCoverImgs[i].src;
            thisParent = obCoverImgs[i].parentNode;

            if (thisSRC) {

                obCoverImgs[i].className += " hidden";

                newDiv = document.createElement("div");
                newDiv.className = "image-hero-container";

                newDiv.style.backgroundImage = "url('" + thisSRC + "')";

                // If image is using height classes, take those for the containing div. These will override the fallback of height on page load.
                for (var j = 0; j < obCoverImgs[i].classList.length; j++) {
                    if (obCoverImgs[i].classList[j].match(/^h-/)) {
                        newDiv.className += " " + obCoverImgs[i].classList[j];
                    }
                }
                newDiv.style.height = obCoverImgs[i].clientHeight + "px";


                newDiv.appendChild(obCoverImgs[i]);
                thisParent.insertBefore(newDiv, thisParent.firstChild);

            }
        }
    }
};

/** ===========================================
  # Excerpt Function for Blog & Resources
============================================ */
window.onload = function () {
    var postIntros = document.getElementsByClassName('post-intro');
    var newPostIntro;

    for (var i = 0; i < postIntros.length; i++) {
        if (postIntros[i].textContent.length > 244) {
            newPostIntro = document.createTextNode(postIntros[i].textContent.substring(0, 70) + "...");

            postIntros[i].textContent = "";
            postIntros[i].appendChild(newPostIntro);
        } else {
            newPostIntro = document.createTextNode(postIntros[i].textContent.substring(0, 50) + "...");

            postIntros[i].textContent = "";
            postIntros[i].appendChild(newPostIntro);
        }
    }

    var postIntrosSmall = document.getElementsByClassName('post-intro-small');
    var newPostIntroSmall;

    for (var i = 0; i < postIntrosSmall.length; i++) {
        if (postIntrosSmall[i].textContent.length > 22) {
            newPostIntroSmall = document.createTextNode(postIntrosSmall[i].textContent.substring(0, 18) + "...");

            postIntrosSmall[i].textContent = "";
            postIntrosSmall[i].appendChild(newPostIntroSmall);
        }
    }
};



/** ===========================================
  # OnClick Fixes
============================================ */

document.addEventListener("DOMContentLoaded", function (evt) {
    var recordOutboundLink = function (url) {
        var trackerName = ga.getAll()[0].get('name');
        ga(trackerName + '.send', 'event', 'link', 'click', url, {
            'transport': 'beacon',
            'hitCallback': function () {
                return false;
            }
        });
    }
    var documentTrack = function (url) {
        var trackerName = ga.getAll()[0].get('name');
        ga(trackerName + '.send', 'event', 'link', 'click', url, {
            'transport': 'beacon',
            'hitCallback': function () {
                return false;
            }
        });
    }
});

```


## Step 5: Add the Following SCSS/CSS
- /_/scss/blog.scss

Add the SCSS for various styled related to the blog.


```

.bg-hover-light-gray-dark {
  background: #e1e1e1!important;
}
.pointer {
  cursor: pointer;
}

.btn-outline-secondary:not(.disabled):not(:disabled) {
  color: #fff;
  background-color: #3d5d6f;
  border-color: #3d5d6f;
}
.small, small {
  font-size: 88%;
}
.lead-sm {
    font-size: 1.15em;
    font-weight: 300;
}
.tags-list {
  a {
      &:first-child {
        &:before {
          content: "\f02e";
          font-family: 'Font Awesome 5 Free';
          color: #d60e96;
          padding-right: 1rem;
        }
     }
  }
}
.top-neg {
  top: -12px;
}

.cover {
  object-fit: cover;
}

@media screen and (min-width: 992px) {
  .w-lg-50 {
    width: 50%; !important
  }
}

```
