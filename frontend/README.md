# Using the Bootstrap Styles/Templates



## Layout

### Header

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Conduit</title>
    <link rel="stylesheet" href="css/style.css">
    <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic" rel="stylesheet" type="text/css">
  </head>
  <body>

    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="index.html">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <a class="nav-link" href="editor.html">
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="auth.html">Sign up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="settings.html">Settings</a>
          </li>
<!--           <li class="nav-item active">
            <a class="nav-link" href="index.html">Home</a>
          </li> -->
        </ul>
      </div>
    </nav>
```

### Footer
```html
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>

  </body>
</html>
```

## Pages

### Home
```html
<div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Your Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Global Feed</a>
            </li>
          </ul>
        </div>

        <div class="post-preview">
          <div class="post-meta">
            <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div class="info">
              <a href="profile.html" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 29
            </button>
          </div>
          <a href="post.html" class="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...</p>
            <span>Read more...</span>
          </a>
        </div>

        <div class="post-preview">
          <div class="post-meta">
            <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
            <div class="info">
              <a href="profile.html" class="author">Albert Pai</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 32
            </button>
          </div>
          <a href="post.html" class="preview-link">
            <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
            <p>In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...</p>
            <span>Read more...</span>
          </a>
        </div>

      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <a href="#" class="label label-pill label-default">programming</a>
            <a href="#" class="label label-pill label-default">javascript</a>
            <a href="#" class="label label-pill label-default">angularjs</a>
            <a href="#" class="label label-pill label-default">react</a>
            <a href="#" class="label label-pill label-default">mean</a>
            <a href="#" class="label label-pill label-default">node</a>
            <a href="#" class="label label-pill label-default">rails</a>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
```

### Login/Register

```html

<div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 col-md-offset-3 col-xs-12">
        <h1 class="text-xs-center">Sign up</h1>
        <p class="text-xs-center">
          <a href="#">Have an account?</a>
        </p>

<!--         <ul class="error-messages">
          <li>That email is already taken</li>
        </ul> -->

        <form>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            Sign up
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
```

### Profile

```html
<%= header %>

<div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-md-10 col-md-offset-1">
          <img src="http://i.imgur.com/Qr71crq.jpg" class="user-img" />
          <h4>Eric Simons</h4>
          <p>
            Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games
          </p>
          <button class="btn btn-sm btn-outline-secondary action-btn">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow Eric Simons <span class="counter">(10)</span>
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-md-10 col-md-offset-1">
        <div class="posts-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link active" href="#">My Posts</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Favorited Posts</a>
            </li>
          </ul>
        </div>

        <div class="post-preview">
          <div class="post-meta">
            <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div class="info">
              <a href="profile.html" class="author">Eric Simons</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 29
            </button>
          </div>
          <a href="post.html" class="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...</p>
            <span>Read more...</span>
          </a>
        </div>

        <div class="post-preview">
          <div class="post-meta">
            <a href="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
            <div class="info">
              <a href="profile.html" class="author">Albert Pai</a>
              <span class="date">January 20th</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> 32
            </button>
          </div>
          <a href="post.html" class="preview-link">
            <h1>The song you won't ever stop singing. No matter how hard you try.</h1>
            <p>In my demo, the holy grail layout is nested inside a document, so there's no body or main tags like shown above. Regardless, we're interested in the class names and the appearance of sections in the markup as opposed to the actual elements themselves. In particular, take note of the modifier classes used on the two sidebars, and the trivial order in which they appear in the markup. Let's break this down to paint a clear picture of what's happening...</p>
            <span>Read more...</span>
          </a>
        </div>


      </div>

    </div>
  </div>

</div>
```

### Settings

```html
<%= header %>

<div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 col-md-offset-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form>
          <fieldset class="form-group">
            <input class="form-control" type="text" placeholder="URL of profile picture">
<!--             <input type="file" id="file"> -->
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <textarea class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="password" placeholder="Password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            Update Settings
          </button>
        </form>
      </div>

    </div>
  </div>
</div>

<%= footer %>
```

### Create/Edit Article

```html
<%= header %>

<div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 col-md-offset-1 col-xs-12">
        <form>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" type="text" placeholder="Post Title">
          </fieldset>
          <fieldset class="form-group">
            <textarea class="form-control" rows="8" placeholder="Write your post (in markdown)"></textarea>
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control" type="text" placeholder="Enter tags">
            <div class="tag-list">
              <span class="label label-pill label-default"><i class="ion-close-round"></i> programming</span>
              <span class="label label-pill label-default"><i class="ion-close-round"></i> javascript</span>
              <span class="label label-pill label-default"><i class="ion-close-round"></i> webdev</span>
            </div>
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            Create Post
          </button>
        </form>
      </div>

    </div>
  </div>
</div>


<%= footer %>
```

### Article

```html
<%= header %>

<div class="post-page">

  <div class="banner">
    <div class="container">

      <h1>How to build webapps that scale</h1>

      <div class="post-meta">
        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
          <a href="profile.html" class="author">Eric Simons</a>
          <span class="date">January 20th</span>
        </div>
        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;&nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
        </button>
      </div>

    </div>
  </div>

  <div class="container page">

    <div class="row post-content">
      <div class="col-md-12">
        <p>Web development technologies have evolved at an incredible clip over the past few years. We&#39;ve gone from rudimentary DOM manipulation with libraries like jQuery to supercharged web applications organized &amp; powered by elegant MV* based frameworks like AngularJS. Pair this with significant increases in browser rendering speeds, and it is now easier than ever before to build production quality applications on top of Javascript, HTML5, and CSS3.</p><p>While these advances have been incredible, they are only just starting to affect the clear platform of the future: mobile. For years, mobile rendering speeds were atrocious, and the MVC frameworks &amp; UI libraries provided by iOS and Android were far superior to writing mobile apps using web technologies. There were also some very public failures -- Facebook famously wrote their first iOS app in 2011 using HTML5 but ended up scrapping it due to terrible performance.</p><p>For years now, hybrid apps have been mocked and jeered by native app developers for being clunky and ugly, having subpar performance, and having no advantages over native apps. While these may have been valid reasons in 2011, they are now virtually baseless, thanks to a collection of new technologies that have emerged over the past two years. With these technologies, you can design, build, and deploy robust mobile apps faster than you could with native technologies, all while incurring little to no app performance penalties. This is thanks in large part to super fast mobile browser rendering speeds and better JavaScript performance. This course is designed to teach you how to effectively use these new technologies to build insanely great mobile apps.</p><p>Without further ado, we&#39;d like to welcome you to the future of mobile app development, freed from the shackles of native languages &amp; frameworks. Let&#39;s learn what the new mobile stack consists of and how it works.</p>
        <h2 id="introducing-ionic">Introducing Ionic.</h2>
        <p>Before, building hybrid apps was a chore -- not because it was hard to build web pages, but because it was hard to build full-fledged web applications. With AngularJS, that has changed. As a result, Angular became the core innovation that made hybrid apps possible. The bright folks at Drifty were some of the first to realize this and subsequently created the <a href="http://ionicframework.com/" target="_blank">Ionic Framework</a> to bridge the gap between AngularJS web apps and hybrid mobile apps. Since launching a little over a year ago, the Ionic Framework has <a href="http://www.google.com/trends/explore?hl=en-US&amp;q=ionic+framework&amp;cmpt=q&amp;tz&amp;tz&amp;content=1" target="_blank">quickly grown in popularity amongst developers</a> and their <a href="https://github.com/driftyco/ionic" target="_blank">main Github repo</a> has over 13K stars as of this writing.</p><p>Ionic provides similar functionality for AngularJS that <a href="https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIKit_Framework/" target="_blank">iOS UIKit</a> provides for Obj-C/Swift, and that <a href="http://developer.android.com/guide/topics/ui/overview.html" target="_blank">Android UI elements</a> provides for Java. Core mobile UI paradigms are available to developers out of the box, which means that developers can focus on building apps, instead of common user interface elements. Some examples of these include <a href="http://ionicframework.com/docs/api/directive/ionList/" target="_blank">list views</a>, <a href="http://ionicframework.com/docs/api/directive/ionNavView/" target="_blank">stateful navigation</a>, <a href="http://ionicframework.com/docs/nightly/api/directive/ionTabs/" target="_blank">tab bars</a>, <a href="http://ionicframework.com/docs/api/service/$ionicActionSheet/" target="_blank">action sheets</a>, and <a href="http://ionicframework.com/docs/nightly/api/" target="_blank">so much more</a>.</p>
        <p>Ionic is a great solution for creating both mobile web apps and native apps. The first sections of this course will go over structuring Ionic apps that can run on the web. Then we will cover packaging that same exact code into a native app. We will be using a build tool called Cordova for packaging our app. For those unfamiliar with Cordova, it is the open source core of Adobe&#39;s proprietary PhoneGap build system. Adobe describes it with this analogy: Cordova is to PhoneGap as Blink is to Chrome. Basically, PhoneGap is Cordova plus a whole bunch of other Adobe stuff.</p>
        <p>The folks at Ionic have done a fantastic job of making Cordova super easy to use by directly wrapping it in their &#39;ionic&#39; command line tool (don&#39;t worry, we&#39;ll cover this later). Just remember that Cordova is something that is running under the hood of your hybrid app that you will rarely need to worry about, but we will cover some common interactions with it in this course.</p>
        <h2 id="what-we-re-going-to-build">What we&#39;re going to build</h2>
        <p>We will be building an app called Songhop, a &quot;Tinder for music&quot; app that allows you to listen to 30-second song samples and favorite the ones you like. This is based on a real Ionic/Cordova powered app we built that exists on the <a href="https://itunes.apple.com/us/app/songhop/id899245239?mt=8" target="_blank">iOS App Store</a> -- feel free to download it to get a feeling for what Ionic is capable of (and rate it 5 stars :). It&#39;s also worth noting that it only took us a month to build the Songhop app that&#39;s on the App Store, so that should give you an idea of how fast you can build &amp; iterate using Ionic / Cordova.</p><p><strong>You can also see a <a href="https://ionic-songhop.herokuapp.com" target="_blank">live demo of the completed application we&#39;ll be building here</a> (resize your browser window to the size of a phone for the best experience).</strong></p><p>We&#39;ll be covering a wide variety of topics in this course: scaffolding a new application, testing it in the emulator, installing native plugins for manipulating audio &amp; files, swipe gestures for our interface, installing the app on your own device, deploying to the iOS &amp; Android app stores, and so much more.</p>
      </div>
    </div>

    <hr />

    <div class="post-actions">
      <div class="post-meta">
        <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
        <div class="info">
          <a href="profile.html" class="author">Eric Simons</a>
          <span class="date">January 20th</span>
        </div>

        <button class="btn btn-sm btn-outline-secondary">
          <i class="ion-plus-round"></i>
          &nbsp;
          Follow Eric Simons <span class="counter">(10)</span>
        </button>
        &nbsp;
        <button class="btn btn-sm btn-outline-primary">
          <i class="ion-heart"></i>
          &nbsp;
          Favorite Post <span class="counter">(29)</span>
        </button>
      </div>
    </div>

    <div class="row">

      <div class="col-md-8 col-md-offset-2">

        <div class="card">
          <div class="card-block">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <a href="profile.html" class="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            </a>
            &nbsp;
            <a href="profile.html" class="comment-author">Jacob Schmidt</a>
            <span class="date-posted">Dec 29th</span>
          </div>
        </div>

        <div class="card">
          <div class="card-block">
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <a href="profile.html" class="comment-author">
              <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            </a>
            &nbsp;
            <a href="profile.html" class="comment-author">Jacob Schmidt</a>
            <span class="date-posted">Dec 29th</span>
            <span class="mod-options">
              <i class="ion-edit"></i>
              <i class="ion-trash-a"></i>
            </span>
          </div>
        </div>

        <form class="card comment-form">
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>

      </div>

    </div>

  </div>

</div>

<%= footer %>
```
