  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery.event.move/js/jquery.event.move.js at master · stephband/jquery.event.move</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <link rel="assets" href="https://a248.e.akamai.net/assets.github.com/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="4629519" name="octolytics-actor-id" /><meta content="AdLine-Dragos" name="octolytics-actor-login" /><meta content="eb16ec52bc8e61913ea34cd11e6da20864e86ec6b6e0abac311e804bbc3e6091" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="tockiiAh679JRwAF0tvY6I+yoexlMG2Jdk6Y+TN2VLM=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-7f2800ae16a63fd14eead781f3eca593fa5694c5.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-58efca743a34cab1be08115edaaa675e09d3c880.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-4c434fa1705bf526e191eec0cd8fab1a5ce3e326.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-ca9e64c646b09540d9b25626c744f64163979f2b.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="0061c768c8b54c5450e52eabade89ed6">

        <link data-pjax-transient rel='permalink' href='/stephband/jquery.event.move/blob/ecc4855561bc9f4cdb30d44a5c0ec127776889ea/js/jquery.event.move.js'>
    <meta property="og:title" content="jquery.event.move"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/stephband/jquery.event.move"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/4dcfc9f14d4ff854a8ae3be61321a9bd?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="jquery.event.move - Custom events &#39;movestart&#39;, &#39;move&#39; and &#39;moveend&#39; for jQuery."/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="stephband/jquery.event.move"/>

    <meta name="description" content="jquery.event.move - Custom events &#39;movestart&#39;, &#39;move&#39; and &#39;moveend&#39; for jQuery." />


    <meta content="69022" name="octolytics-dimension-user_id" /><meta content="stephband" name="octolytics-dimension-user_login" /><meta content="1416006" name="octolytics-dimension-repository_id" /><meta content="stephband/jquery.event.move" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1416006" name="octolytics-dimension-repository_network_root_id" /><meta content="stephband/jquery.event.move" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/stephband/jquery.event.move/commits/master.atom" rel="alternate" title="Recent Commits to jquery.event.move:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production  ">
    <div id="wrapper">

      
      
      

      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

      <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search-icon tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="octicon octicon-gear "></span></a>

  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    data-username="AdLine-Dragos"
      data-repo="stephband/jquery.event.move"
      data-branch="master"
      data-sha="ff405cc77d2ff3bbe374f17c6b156331d9308807"
  >

    <input type="hidden" name="nwo" value="stephband/jquery.event.move" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

  <div class="divider-vertical"></div>

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="http://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/AdLine-Dragos" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/338b047f9348537f3fce185c11534f12?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> AdLine-Dragos
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            title="Account settings ">
            <span class="octicon octicon-tools"></span>
          </a>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  <ul class="dropdown-menu">
    <li>
      <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
    </li>
    <li>
        <a href="/stephband/jquery.event.move/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
    <li>
    </li>
    <li>
      <a href="/organizations/new"><span class="octicon octicon-list-unordered"></span> New organization</a>
    </li>
  </ul>
</div>


    
  </div>
</div>

      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              

<ul class="pagehead-actions">


    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="tockiiAh679JRwAF0tvY6I+yoexlMG2Jdk6Y+TN2VLM=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1416006" />

    <div class="select-menu js-menu-container js-select-menu">
      <span class="minibutton select-menu-button  js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder js-menu-content">
        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

    <li class="js-toggler-container js-social-container starring-container ">
      <a href="/stephband/jquery.event.move/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star-delete"></span>
        <span class="text">Unstar</span>
      </a>
      <a href="/stephband/jquery.event.move/star" class="minibutton with-count js-toggler-target star-button unstarred upwards" title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
        <span class="octicon octicon-star"></span>
        <span class="text">Star</span>
      </a>
      <a class="social-count js-social-count" href="/stephband/jquery.event.move/stargazers">74</a>
    </li>

        <li>
          <a href="/stephband/jquery.event.move/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span>
            <span class="text">Fork</span>
          </a>
          <a href="/stephband/jquery.event.move/network" class="social-count">49</a>
        </li>


</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-octicon octicon-repo"></span>
                <span class="author vcard">
                  <a href="/stephband" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">stephband</span>
                  </a></span> /
                <strong><a href="/stephband/jquery.event.move" class="js-current-repository">jquery.event.move</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li class="pulse-nav"><a href="/stephband/jquery.event.move/pulse" class="js-selected-navigation-item " data-selected-links="pulse /stephband/jquery.event.move/pulse" rel="nofollow"><span class="octicon octicon-pulse"></span></a></li>
    <li><a href="/stephband/jquery.event.move" class="js-selected-navigation-item selected" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /stephband/jquery.event.move">Code</a></li>
    <li><a href="/stephband/jquery.event.move/network" class="js-selected-navigation-item " data-selected-links="repo_network /stephband/jquery.event.move/network">Network</a></li>
    <li><a href="/stephband/jquery.event.move/pulls" class="js-selected-navigation-item " data-selected-links="repo_pulls /stephband/jquery.event.move/pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/stephband/jquery.event.move/issues" class="js-selected-navigation-item " data-selected-links="repo_issues /stephband/jquery.event.move/issues">Issues <span class='counter'>5</span></a></li>



    <li><a href="/stephband/jquery.event.move/graphs" class="js-selected-navigation-item " data-selected-links="repo_graphs repo_contributors /stephband/jquery.event.move/graphs">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/stephband/jquery.event.move/tags" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_tags /stephband/jquery.event.move/tags">Tags <span class="counter ">10</span></a></li>
    </ul>
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="octicon octicon-git-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/gh-pages/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" rel="nofollow" title="gh-pages">gh-pages</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item selected">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/master/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.3.5/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.5" rel="nofollow" title="1.3.5">1.3.5</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.3.4/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.4" rel="nofollow" title="1.3.4">1.3.4</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.3.3/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.3" rel="nofollow" title="1.3.3">1.3.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.3.2/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.2" rel="nofollow" title="1.3.2">1.3.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.3.1/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3.1" rel="nofollow" title="1.3.1">1.3.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.3/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.3" rel="nofollow" title="1.3">1.3</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.2/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.2" rel="nofollow" title="1.2">1.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.1/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.1" rel="nofollow" title="1.1">1.1</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.0.2/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.2" rel="nofollow" title="1.0.2">1.0.2</a>
                </div> <!-- /.select-menu-item -->
                <div class="select-menu-item js-navigation-item ">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <a href="/stephband/jquery.event.move/blob/1.0.1/js/jquery.event.move.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="1.0.1" rel="nofollow" title="1.0.1">1.0.1</a>
                </div> <!-- /.select-menu-item -->
            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/stephband/jquery.event.move" class="selected js-selected-navigation-item tabnav-tab" data-selected-links="repo_source /stephband/jquery.event.move">Files</a></li>
    <li><a href="/stephband/jquery.event.move/commits/master" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_commits /stephband/jquery.event.move/commits/master">Commits</a></li>
    <li><a href="/stephband/jquery.event.move/branches" class="js-selected-navigation-item tabnav-tab" data-selected-links="repo_branches /stephband/jquery.event.move/branches" rel="nofollow">Branches <span class="counter ">2</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:c086d95e205fa77f36874805b53c5006 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:c086d95e205fa77f36874805b53c5006 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/stephband/jquery.event.move" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">jquery.event.move</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/stephband/jquery.event.move/tree/master/js" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.event.move.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="js/jquery.event.move.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
        </div>

      <a href="/stephband/jquery.event.move/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/43bf9b953b5ada2c76c3b2d36f40e865?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/staktrace" rel="author">staktrace</a></span>
    <time class="js-relative-date" datetime="2013-01-28T11:18:25-08:00" title="2013-01-28 11:18:25">January 28, 2013</time>
    <div class="commit-title">
        <a href="/stephband/jquery.event.move/commit/65cd8a74e918404ceb02c2489c6ac2e3365a5299" class="message">Fix a bug where the mouseend listener was never getting unregistered</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>2</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="stephband" href="/stephband/jquery.event.move/commits/master/js/jquery.event.move.js?author=stephband"><img height="20" src="https://secure.gravatar.com/avatar/4dcfc9f14d4ff854a8ae3be61321a9bd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="staktrace" href="/stephband/jquery.event.move/commits/master/js/jquery.event.move.js?author=staktrace"><img height="20" src="https://secure.gravatar.com/avatar/43bf9b953b5ada2c76c3b2d36f40e865?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/4dcfc9f14d4ff854a8ae3be61321a9bd?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/stephband">stephband</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/43bf9b953b5ada2c76c3b2d36f40e865?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/staktrace">staktrace</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/stephband/jquery.event.move/blob/ecc4855561bc9f4cdb30d44a5c0ec127776889ea/js/jquery.event.move.js" data-title="jquery.event.move/js/jquery.event.move.js at master · stephband/jquery.event.move · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="octicon octicon-file-text"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>581 lines (457 sloc)</span>
                <span>14.595 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                        <a class="minibutton tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/stephband/jquery.event.move/edit/master/js/jquery.event.move.js"
                           data-method="post" rel="nofollow">Edit</a>
                  <a href="/stephband/jquery.event.move/raw/master/js/jquery.event.move.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/stephband/jquery.event.move/blame/master/js/jquery.event.move.js" class="button minibutton ">Blame</a>
                  <a href="/stephband/jquery.event.move/commits/master/js/jquery.event.move.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// jquery.event.move</span></div><div class='line' id='LC2'><span class="c1">//</span></div><div class='line' id='LC3'><span class="c1">// 1.3.1</span></div><div class='line' id='LC4'><span class="c1">//</span></div><div class='line' id='LC5'><span class="c1">// Stephen Band</span></div><div class='line' id='LC6'><span class="c1">//</span></div><div class='line' id='LC7'><span class="c1">// Triggers &#39;movestart&#39;, &#39;move&#39; and &#39;moveend&#39; events after</span></div><div class='line' id='LC8'><span class="c1">// mousemoves following a mousedown cross a distance threshold,</span></div><div class='line' id='LC9'><span class="c1">// similar to the native &#39;dragstart&#39;, &#39;drag&#39; and &#39;dragend&#39; events.</span></div><div class='line' id='LC10'><span class="c1">// Move events are throttled to animation frames. Move event objects</span></div><div class='line' id='LC11'><span class="c1">// have the properties:</span></div><div class='line' id='LC12'><span class="c1">//</span></div><div class='line' id='LC13'><span class="c1">// pageX:</span></div><div class='line' id='LC14'><span class="c1">// pageY:   Page coordinates of pointer.</span></div><div class='line' id='LC15'><span class="c1">// startX:</span></div><div class='line' id='LC16'><span class="c1">// startY:  Page coordinates of pointer at movestart.</span></div><div class='line' id='LC17'><span class="c1">// distX:</span></div><div class='line' id='LC18'><span class="c1">// distY:  Distance the pointer has moved since movestart.</span></div><div class='line' id='LC19'><span class="c1">// deltaX:</span></div><div class='line' id='LC20'><span class="c1">// deltaY:  Distance the finger has moved since last event.</span></div><div class='line' id='LC21'><span class="c1">// velocityX:</span></div><div class='line' id='LC22'><span class="c1">// velocityY:  Average velocity over last few events.</span></div><div class='line' id='LC23'><br/></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">module</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span> <span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC27'>		<span class="c1">// AMD. Register as an anonymous module.</span></div><div class='line' id='LC28'>		<span class="nx">define</span><span class="p">([</span><span class="s1">&#39;jquery&#39;</span><span class="p">],</span> <span class="nx">module</span><span class="p">);</span></div><div class='line' id='LC29'>	<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC30'>		<span class="c1">// Browser globals</span></div><div class='line' id='LC31'>		<span class="nx">module</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC32'>	<span class="p">}</span></div><div class='line' id='LC33'><span class="p">})(</span><span class="kd">function</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">){</span></div><div class='line' id='LC34'><br/></div><div class='line' id='LC35'>	<span class="kd">var</span> <span class="c1">// Number of pixels a pressed pointer travels before movestart</span></div><div class='line' id='LC36'>	    <span class="c1">// event is fired.</span></div><div class='line' id='LC37'>	    <span class="nx">threshold</span> <span class="o">=</span> <span class="mi">6</span><span class="p">,</span></div><div class='line' id='LC38'><br/></div><div class='line' id='LC39'>	    <span class="nx">add</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">add</span><span class="p">,</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>	    <span class="nx">remove</span> <span class="o">=</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">remove</span><span class="p">,</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>	    <span class="c1">// Just sugar, so we can have arguments in the same order as</span></div><div class='line' id='LC44'>	    <span class="c1">// add and remove.</span></div><div class='line' id='LC45'>	    <span class="nx">trigger</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">node</span><span class="p">,</span> <span class="nx">type</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC46'>	    	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">node</span><span class="p">);</span></div><div class='line' id='LC47'>	    <span class="p">},</span></div><div class='line' id='LC48'><br/></div><div class='line' id='LC49'>	    <span class="c1">// Shim for requestAnimationFrame, falling back to timer. See:</span></div><div class='line' id='LC50'>	    <span class="c1">// see http://paulirish.com/2011/requestanimationframe-for-smart-animating/</span></div><div class='line' id='LC51'>	    <span class="nx">requestFrame</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC52'>	    	<span class="k">return</span> <span class="p">(</span></div><div class='line' id='LC53'>	    		<span class="nb">window</span><span class="p">.</span><span class="nx">requestAnimationFrame</span> <span class="o">||</span></div><div class='line' id='LC54'>	    		<span class="nb">window</span><span class="p">.</span><span class="nx">webkitRequestAnimationFrame</span> <span class="o">||</span></div><div class='line' id='LC55'>	    		<span class="nb">window</span><span class="p">.</span><span class="nx">mozRequestAnimationFrame</span> <span class="o">||</span></div><div class='line' id='LC56'>	    		<span class="nb">window</span><span class="p">.</span><span class="nx">oRequestAnimationFrame</span> <span class="o">||</span></div><div class='line' id='LC57'>	    		<span class="nb">window</span><span class="p">.</span><span class="nx">msRequestAnimationFrame</span> <span class="o">||</span></div><div class='line' id='LC58'>	    		<span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">element</span><span class="p">){</span></div><div class='line' id='LC59'>	    			<span class="k">return</span> <span class="nb">window</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC60'>	    				<span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC61'>	    			<span class="p">},</span> <span class="mi">25</span><span class="p">);</span></div><div class='line' id='LC62'>	    		<span class="p">}</span></div><div class='line' id='LC63'>	    	<span class="p">);</span></div><div class='line' id='LC64'>	    <span class="p">})(),</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>	    <span class="nx">ignoreTags</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC67'>	    	<span class="nx">textarea</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC68'>	    	<span class="nx">input</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC69'>	    	<span class="nx">select</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC70'>	    	<span class="nx">button</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC71'>	    <span class="p">},</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>	    <span class="nx">mouseevents</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC74'>	    	<span class="nx">move</span><span class="o">:</span> <span class="s1">&#39;mousemove&#39;</span><span class="p">,</span></div><div class='line' id='LC75'>	    	<span class="nx">cancel</span><span class="o">:</span> <span class="s1">&#39;mouseup dragstart&#39;</span><span class="p">,</span></div><div class='line' id='LC76'>	    	<span class="nx">end</span><span class="o">:</span> <span class="s1">&#39;mouseup&#39;</span></div><div class='line' id='LC77'>	    <span class="p">},</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>	    <span class="nx">touchevents</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC80'>	    	<span class="nx">move</span><span class="o">:</span> <span class="s1">&#39;touchmove&#39;</span><span class="p">,</span></div><div class='line' id='LC81'>	    	<span class="nx">cancel</span><span class="o">:</span> <span class="s1">&#39;touchend&#39;</span><span class="p">,</span></div><div class='line' id='LC82'>	    	<span class="nx">end</span><span class="o">:</span> <span class="s1">&#39;touchend&#39;</span></div><div class='line' id='LC83'>	    <span class="p">};</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'><br/></div><div class='line' id='LC86'>	<span class="c1">// Constructors</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>	<span class="kd">function</span> <span class="nx">Timer</span><span class="p">(</span><span class="nx">fn</span><span class="p">){</span></div><div class='line' id='LC89'>		<span class="kd">var</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">,</span></div><div class='line' id='LC90'>				<span class="nx">active</span> <span class="o">=</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC91'>				<span class="nx">running</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>		<span class="kd">function</span> <span class="nx">trigger</span><span class="p">(</span><span class="nx">time</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC94'>			<span class="k">if</span> <span class="p">(</span><span class="nx">active</span><span class="p">){</span></div><div class='line' id='LC95'>				<span class="nx">callback</span><span class="p">();</span></div><div class='line' id='LC96'>				<span class="nx">requestFrame</span><span class="p">(</span><span class="nx">trigger</span><span class="p">);</span></div><div class='line' id='LC97'>				<span class="nx">running</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC98'>				<span class="nx">active</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC99'>			<span class="p">}</span></div><div class='line' id='LC100'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC101'>				<span class="nx">running</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC102'>			<span class="p">}</span></div><div class='line' id='LC103'>		<span class="p">}</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>		<span class="k">this</span><span class="p">.</span><span class="nx">kick</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC106'>			<span class="nx">active</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC107'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">running</span><span class="p">)</span> <span class="p">{</span> <span class="nx">trigger</span><span class="p">();</span> <span class="p">}</span></div><div class='line' id='LC108'>		<span class="p">};</span></div><div class='line' id='LC109'><br/></div><div class='line' id='LC110'>		<span class="k">this</span><span class="p">.</span><span class="nx">end</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC111'>			<span class="kd">var</span> <span class="nx">cb</span> <span class="o">=</span> <span class="nx">callback</span><span class="p">;</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>			<span class="c1">// If the timer is not running, simply call the end callback.</span></div><div class='line' id='LC116'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">running</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>				<span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC118'>			<span class="p">}</span></div><div class='line' id='LC119'>			<span class="c1">// If the timer is running, and has been kicked lately, then</span></div><div class='line' id='LC120'>			<span class="c1">// queue up the current callback and the end callback, otherwise</span></div><div class='line' id='LC121'>			<span class="c1">// just the end callback.</span></div><div class='line' id='LC122'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC123'>				<span class="nx">callback</span> <span class="o">=</span> <span class="nx">active</span> <span class="o">?</span></div><div class='line' id='LC124'>					<span class="kd">function</span><span class="p">(){</span> <span class="nx">cb</span><span class="p">();</span> <span class="nx">fn</span><span class="p">();</span> <span class="p">}</span> <span class="o">:</span> </div><div class='line' id='LC125'>					<span class="nx">fn</span> <span class="p">;</span></div><div class='line' id='LC126'><br/></div><div class='line' id='LC127'>				<span class="nx">active</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC128'>			<span class="p">}</span></div><div class='line' id='LC129'>		<span class="p">};</span></div><div class='line' id='LC130'>	<span class="p">}</span></div><div class='line' id='LC131'><br/></div><div class='line' id='LC132'><br/></div><div class='line' id='LC133'>	<span class="c1">// Functions</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'>	<span class="kd">function</span> <span class="nx">returnTrue</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC136'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC137'>	<span class="p">}</span></div><div class='line' id='LC138'><br/></div><div class='line' id='LC139'>	<span class="kd">function</span> <span class="nx">returnFalse</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC140'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC141'>	<span class="p">}</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>	<span class="kd">function</span> <span class="nx">preventDefault</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>		<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC145'>	<span class="p">}</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>	<span class="kd">function</span> <span class="nx">preventIgnoreTags</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>		<span class="c1">// Don&#39;t prevent interaction with form elements.</span></div><div class='line' id='LC149'>		<span class="k">if</span> <span class="p">(</span><span class="nx">ignoreTags</span><span class="p">[</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="p">])</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'>		<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC152'>	<span class="p">}</span></div><div class='line' id='LC153'><br/></div><div class='line' id='LC154'>	<span class="kd">function</span> <span class="nx">isLeftButton</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC155'>		<span class="c1">// Ignore mousedowns on any button other than the left (or primary)</span></div><div class='line' id='LC156'>		<span class="c1">// mouse button, or when a modifier key is pressed.</span></div><div class='line' id='LC157'>		<span class="k">return</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">which</span> <span class="o">===</span> <span class="mi">1</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">e</span><span class="p">.</span><span class="nx">ctrlKey</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">e</span><span class="p">.</span><span class="nx">altKey</span><span class="p">);</span></div><div class='line' id='LC158'>	<span class="p">}</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>	<span class="kd">function</span> <span class="nx">identifiedTouch</span><span class="p">(</span><span class="nx">touchList</span><span class="p">,</span> <span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC161'>		<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">l</span><span class="p">;</span></div><div class='line' id='LC162'><br/></div><div class='line' id='LC163'>		<span class="k">if</span> <span class="p">(</span><span class="nx">touchList</span><span class="p">.</span><span class="nx">identifiedTouch</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>			<span class="k">return</span> <span class="nx">touchList</span><span class="p">.</span><span class="nx">identifiedTouch</span><span class="p">(</span><span class="nx">id</span><span class="p">);</span></div><div class='line' id='LC165'>		<span class="p">}</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'>		<span class="c1">// touchList.identifiedTouch() does not exist in</span></div><div class='line' id='LC168'>		<span class="c1">// webkit yet… we must do the search ourselves...</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>		<span class="nx">i</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">;</span></div><div class='line' id='LC171'>		<span class="nx">l</span> <span class="o">=</span> <span class="nx">touchList</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC172'><br/></div><div class='line' id='LC173'>		<span class="k">while</span> <span class="p">(</span><span class="o">++</span><span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">l</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC174'>			<span class="k">if</span> <span class="p">(</span><span class="nx">touchList</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">identifier</span> <span class="o">===</span> <span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>				<span class="k">return</span> <span class="nx">touchList</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC176'>			<span class="p">}</span></div><div class='line' id='LC177'>		<span class="p">}</span></div><div class='line' id='LC178'>	<span class="p">}</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>	<span class="kd">function</span> <span class="nx">changedTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>		<span class="kd">var</span> <span class="nx">touch</span> <span class="o">=</span> <span class="nx">identifiedTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">identifier</span><span class="p">);</span></div><div class='line' id='LC182'><br/></div><div class='line' id='LC183'>		<span class="c1">// This isn&#39;t the touch you&#39;re looking for.</span></div><div class='line' id='LC184'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">touch</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'>		<span class="c1">// Chrome Android (at least) includes touches that have not</span></div><div class='line' id='LC187'>		<span class="c1">// changed in e.changedTouches. That&#39;s a bit annoying. Check</span></div><div class='line' id='LC188'>		<span class="c1">// that this touch has changed.</span></div><div class='line' id='LC189'>		<span class="k">if</span> <span class="p">(</span><span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">===</span> <span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">&amp;&amp;</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">===</span> <span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC190'><br/></div><div class='line' id='LC191'>		<span class="k">return</span> <span class="nx">touch</span><span class="p">;</span></div><div class='line' id='LC192'>	<span class="p">}</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>	<span class="c1">// Handlers that decide when the first movestart is triggered</span></div><div class='line' id='LC196'><br/></div><div class='line' id='LC197'>	<span class="kd">function</span> <span class="nx">mousedown</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC198'>		<span class="kd">var</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC199'><br/></div><div class='line' id='LC200'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">isLeftButton</span><span class="p">(</span><span class="nx">e</span><span class="p">))</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC201'><br/></div><div class='line' id='LC202'>		<span class="nx">data</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC203'>			<span class="nx">target</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span></div><div class='line' id='LC204'>			<span class="nx">startX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageX</span><span class="p">,</span></div><div class='line' id='LC205'>			<span class="nx">startY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageY</span><span class="p">,</span></div><div class='line' id='LC206'>			<span class="nx">timeStamp</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span></div><div class='line' id='LC207'>		<span class="p">};</span></div><div class='line' id='LC208'><br/></div><div class='line' id='LC209'>		<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">mouseevents</span><span class="p">.</span><span class="nx">move</span><span class="p">,</span> <span class="nx">mousemove</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC210'>		<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">mouseevents</span><span class="p">.</span><span class="nx">cancel</span><span class="p">,</span> <span class="nx">mouseend</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC211'>	<span class="p">}</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'>	<span class="kd">function</span> <span class="nx">mousemove</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC214'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC215'><br/></div><div class='line' id='LC216'>		<span class="nx">checkThreshold</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">removeMouse</span><span class="p">);</span></div><div class='line' id='LC217'>	<span class="p">}</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>	<span class="kd">function</span> <span class="nx">mouseend</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>		<span class="nx">removeMouse</span><span class="p">();</span></div><div class='line' id='LC221'>	<span class="p">}</span></div><div class='line' id='LC222'><br/></div><div class='line' id='LC223'>	<span class="kd">function</span> <span class="nx">removeMouse</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC224'>		<span class="nx">remove</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">mouseevents</span><span class="p">.</span><span class="nx">move</span><span class="p">,</span> <span class="nx">mousemove</span><span class="p">);</span></div><div class='line' id='LC225'>		<span class="nx">remove</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">mouseevents</span><span class="p">.</span><span class="nx">cancel</span><span class="p">,</span> <span class="nx">mouseend</span><span class="p">);</span></div><div class='line' id='LC226'>	<span class="p">}</span></div><div class='line' id='LC227'><br/></div><div class='line' id='LC228'>	<span class="kd">function</span> <span class="nx">touchstart</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC229'>		<span class="kd">var</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">template</span><span class="p">;</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>		<span class="c1">// Don&#39;t get in the way of interaction with form elements.</span></div><div class='line' id='LC232'>		<span class="k">if</span> <span class="p">(</span><span class="nx">ignoreTags</span><span class="p">[</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">.</span><span class="nx">tagName</span><span class="p">.</span><span class="nx">toLowerCase</span><span class="p">()</span> <span class="p">])</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC233'><br/></div><div class='line' id='LC234'>		<span class="nx">touch</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>		<span class="c1">// iOS live updates the touch objects whereas Android gives us copies.</span></div><div class='line' id='LC237'>		<span class="c1">// That means we can&#39;t trust the touchstart object to stay the same,</span></div><div class='line' id='LC238'>		<span class="c1">// so we must copy the data. This object acts as a template for</span></div><div class='line' id='LC239'>		<span class="c1">// movestart, move and moveend event objects.</span></div><div class='line' id='LC240'>		<span class="nx">template</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC241'>			<span class="nx">target</span><span class="o">:</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span></div><div class='line' id='LC242'>			<span class="nx">startX</span><span class="o">:</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span><span class="p">,</span></div><div class='line' id='LC243'>			<span class="nx">startY</span><span class="o">:</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span><span class="p">,</span></div><div class='line' id='LC244'>			<span class="nx">timeStamp</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">,</span></div><div class='line' id='LC245'>			<span class="nx">identifier</span><span class="o">:</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">identifier</span></div><div class='line' id='LC246'>		<span class="p">};</span></div><div class='line' id='LC247'><br/></div><div class='line' id='LC248'>		<span class="c1">// Use the touch identifier as a namespace, so that we can later</span></div><div class='line' id='LC249'>		<span class="c1">// remove handlers pertaining only to this touch.</span></div><div class='line' id='LC250'>		<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">touchevents</span><span class="p">.</span><span class="nx">move</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">identifier</span><span class="p">,</span> <span class="nx">touchmove</span><span class="p">,</span> <span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC251'>		<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">touchevents</span><span class="p">.</span><span class="nx">cancel</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">identifier</span><span class="p">,</span> <span class="nx">touchend</span><span class="p">,</span> <span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC252'>	<span class="p">}</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>	<span class="kd">function</span> <span class="nx">touchmove</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC255'>		<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC256'>		    <span class="nx">touch</span> <span class="o">=</span> <span class="nx">changedTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC257'><br/></div><div class='line' id='LC258'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">touch</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC259'><br/></div><div class='line' id='LC260'>		<span class="nx">checkThreshold</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">removeTouch</span><span class="p">);</span></div><div class='line' id='LC261'>	<span class="p">}</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>	<span class="kd">function</span> <span class="nx">touchend</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC264'>		<span class="kd">var</span> <span class="nx">template</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">,</span></div><div class='line' id='LC265'>		    <span class="nx">touch</span> <span class="o">=</span> <span class="nx">identifiedTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">,</span> <span class="nx">template</span><span class="p">.</span><span class="nx">identifier</span><span class="p">);</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">touch</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>		<span class="nx">removeTouch</span><span class="p">(</span><span class="nx">template</span><span class="p">.</span><span class="nx">identifier</span><span class="p">);</span></div><div class='line' id='LC270'>	<span class="p">}</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>	<span class="kd">function</span> <span class="nx">removeTouch</span><span class="p">(</span><span class="nx">identifier</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC273'>		<span class="nx">remove</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">identifier</span><span class="p">,</span> <span class="nx">touchmove</span><span class="p">);</span></div><div class='line' id='LC274'>		<span class="nx">remove</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">identifier</span><span class="p">,</span> <span class="nx">touchend</span><span class="p">);</span></div><div class='line' id='LC275'>	<span class="p">}</span></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'>	<span class="c1">// Logic for deciding when to trigger a movestart.</span></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>	<span class="kd">function</span> <span class="nx">checkThreshold</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">template</span><span class="p">,</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC281'>		<span class="kd">var</span> <span class="nx">distX</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">template</span><span class="p">.</span><span class="nx">startX</span><span class="p">,</span></div><div class='line' id='LC282'>		    <span class="nx">distY</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">template</span><span class="p">.</span><span class="nx">startY</span><span class="p">;</span></div><div class='line' id='LC283'><br/></div><div class='line' id='LC284'>		<span class="c1">// Do nothing if the threshold has not been crossed.</span></div><div class='line' id='LC285'>		<span class="k">if</span> <span class="p">((</span><span class="nx">distX</span> <span class="o">*</span> <span class="nx">distX</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">distY</span> <span class="o">*</span> <span class="nx">distY</span><span class="p">)</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">threshold</span> <span class="o">*</span> <span class="nx">threshold</span><span class="p">))</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC286'><br/></div><div class='line' id='LC287'>		<span class="nx">triggerStart</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">template</span><span class="p">,</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">distX</span><span class="p">,</span> <span class="nx">distY</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC288'>	<span class="p">}</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>	<span class="kd">function</span> <span class="nx">handled</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC291'>		<span class="c1">// this._handled should return false once, and after return true.</span></div><div class='line' id='LC292'>		<span class="k">this</span><span class="p">.</span><span class="nx">_handled</span> <span class="o">=</span> <span class="nx">returnTrue</span><span class="p">;</span></div><div class='line' id='LC293'>		<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC294'>	<span class="p">}</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>	<span class="kd">function</span> <span class="nx">flagAsHandled</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC297'>		<span class="nx">e</span><span class="p">.</span><span class="nx">_handled</span><span class="p">();</span></div><div class='line' id='LC298'>	<span class="p">}</span></div><div class='line' id='LC299'><br/></div><div class='line' id='LC300'>	<span class="kd">function</span> <span class="nx">triggerStart</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">template</span><span class="p">,</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">distX</span><span class="p">,</span> <span class="nx">distY</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>		<span class="kd">var</span> <span class="nx">node</span> <span class="o">=</span> <span class="nx">template</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span></div><div class='line' id='LC302'>		    <span class="nx">touches</span><span class="p">,</span> <span class="nx">time</span><span class="p">;</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>		<span class="nx">touches</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">targetTouches</span><span class="p">;</span></div><div class='line' id='LC305'>		<span class="nx">time</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span> <span class="o">-</span> <span class="nx">template</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">;</span></div><div class='line' id='LC306'><br/></div><div class='line' id='LC307'>		<span class="c1">// Create a movestart object with some special properties that</span></div><div class='line' id='LC308'>		<span class="c1">// are passed only to the movestart handlers.</span></div><div class='line' id='LC309'>		<span class="nx">template</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;movestart&#39;</span><span class="p">;</span></div><div class='line' id='LC310'>		<span class="nx">template</span><span class="p">.</span><span class="nx">distX</span> <span class="o">=</span> <span class="nx">distX</span><span class="p">;</span></div><div class='line' id='LC311'>		<span class="nx">template</span><span class="p">.</span><span class="nx">distY</span> <span class="o">=</span> <span class="nx">distY</span><span class="p">;</span></div><div class='line' id='LC312'>		<span class="nx">template</span><span class="p">.</span><span class="nx">deltaX</span> <span class="o">=</span> <span class="nx">distX</span><span class="p">;</span></div><div class='line' id='LC313'>		<span class="nx">template</span><span class="p">.</span><span class="nx">deltaY</span> <span class="o">=</span> <span class="nx">distY</span><span class="p">;</span></div><div class='line' id='LC314'>		<span class="nx">template</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC315'>		<span class="nx">template</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC316'>		<span class="nx">template</span><span class="p">.</span><span class="nx">velocityX</span> <span class="o">=</span> <span class="nx">distX</span> <span class="o">/</span> <span class="nx">time</span><span class="p">;</span></div><div class='line' id='LC317'>		<span class="nx">template</span><span class="p">.</span><span class="nx">velocityY</span> <span class="o">=</span> <span class="nx">distY</span> <span class="o">/</span> <span class="nx">time</span><span class="p">;</span></div><div class='line' id='LC318'>		<span class="nx">template</span><span class="p">.</span><span class="nx">targetTouches</span> <span class="o">=</span> <span class="nx">touches</span><span class="p">;</span></div><div class='line' id='LC319'>		<span class="nx">template</span><span class="p">.</span><span class="nx">finger</span> <span class="o">=</span> <span class="nx">touches</span> <span class="o">?</span></div><div class='line' id='LC320'>			<span class="nx">touches</span><span class="p">.</span><span class="nx">length</span> <span class="o">:</span></div><div class='line' id='LC321'>			<span class="mi">1</span> <span class="p">;</span></div><div class='line' id='LC322'><br/></div><div class='line' id='LC323'>		<span class="c1">// The _handled method is fired to tell the default movestart</span></div><div class='line' id='LC324'>		<span class="c1">// handler that one of the move events is bound.</span></div><div class='line' id='LC325'>		<span class="nx">template</span><span class="p">.</span><span class="nx">_handled</span> <span class="o">=</span> <span class="nx">handled</span><span class="p">;</span></div><div class='line' id='LC326'><br/></div><div class='line' id='LC327'>		<span class="c1">// Pass the touchmove event so it can be prevented if or when</span></div><div class='line' id='LC328'>		<span class="c1">// movestart is handled.</span></div><div class='line' id='LC329'>		<span class="nx">template</span><span class="p">.</span><span class="nx">_preventTouchmoveDefault</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC330'>			<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC331'>		<span class="p">};</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>		<span class="c1">// Trigger the movestart event.</span></div><div class='line' id='LC334'>		<span class="nx">trigger</span><span class="p">(</span><span class="nx">template</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span> <span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC335'><br/></div><div class='line' id='LC336'>		<span class="c1">// Unbind handlers that tracked the touch or mouse up till now.</span></div><div class='line' id='LC337'>		<span class="nx">fn</span><span class="p">(</span><span class="nx">template</span><span class="p">.</span><span class="nx">identifier</span><span class="p">);</span></div><div class='line' id='LC338'>	<span class="p">}</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'><br/></div><div class='line' id='LC341'>	<span class="c1">// Handlers that control what happens following a movestart</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>	<span class="kd">function</span> <span class="nx">activeMousemove</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC344'>		<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">event</span><span class="p">,</span></div><div class='line' id='LC345'>		    <span class="nx">timer</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">timer</span><span class="p">;</span></div><div class='line' id='LC346'><br/></div><div class='line' id='LC347'>		<span class="nx">updateEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">e</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">,</span> <span class="nx">timer</span><span class="p">);</span></div><div class='line' id='LC348'>	<span class="p">}</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>	<span class="kd">function</span> <span class="nx">activeMouseend</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC351'>		<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">event</span><span class="p">,</span></div><div class='line' id='LC352'>		    <span class="nx">timer</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">timer</span><span class="p">;</span></div><div class='line' id='LC353'><br/></div><div class='line' id='LC354'>		<span class="nx">removeActiveMouse</span><span class="p">();</span></div><div class='line' id='LC355'><br/></div><div class='line' id='LC356'>		<span class="nx">endEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">timer</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC357'>			<span class="c1">// Unbind the click suppressor, waiting until after mouseup</span></div><div class='line' id='LC358'>			<span class="c1">// has been handled.</span></div><div class='line' id='LC359'>			<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC360'>				<span class="nx">remove</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span> <span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="nx">returnFalse</span><span class="p">);</span></div><div class='line' id='LC361'>			<span class="p">},</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC362'>		<span class="p">});</span></div><div class='line' id='LC363'>	<span class="p">}</span></div><div class='line' id='LC364'><br/></div><div class='line' id='LC365'>	<span class="kd">function</span> <span class="nx">removeActiveMouse</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC366'>		<span class="nx">remove</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">mouseevents</span><span class="p">.</span><span class="nx">move</span><span class="p">,</span> <span class="nx">activeMousemove</span><span class="p">);</span></div><div class='line' id='LC367'>		<span class="nx">remove</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">mouseevents</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">activeMouseend</span><span class="p">);</span></div><div class='line' id='LC368'>	<span class="p">}</span></div><div class='line' id='LC369'><br/></div><div class='line' id='LC370'>	<span class="kd">function</span> <span class="nx">activeTouchmove</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC371'>		<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">event</span><span class="p">,</span></div><div class='line' id='LC372'>		    <span class="nx">timer</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">timer</span><span class="p">,</span></div><div class='line' id='LC373'>		    <span class="nx">touch</span> <span class="o">=</span> <span class="nx">changedTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC374'><br/></div><div class='line' id='LC375'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">touch</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC376'><br/></div><div class='line' id='LC377'>		<span class="c1">// Stop the interface from gesturing</span></div><div class='line' id='LC378'>		<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">();</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'>		<span class="nx">event</span><span class="p">.</span><span class="nx">targetTouches</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">targetTouches</span><span class="p">;</span></div><div class='line' id='LC381'>		<span class="nx">updateEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">,</span> <span class="nx">timer</span><span class="p">);</span></div><div class='line' id='LC382'>	<span class="p">}</span></div><div class='line' id='LC383'><br/></div><div class='line' id='LC384'>	<span class="kd">function</span> <span class="nx">activeTouchend</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC385'>		<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">event</span><span class="p">,</span></div><div class='line' id='LC386'>		    <span class="nx">timer</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">timer</span><span class="p">,</span></div><div class='line' id='LC387'>		    <span class="nx">touch</span> <span class="o">=</span> <span class="nx">identifiedTouch</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">changedTouches</span><span class="p">,</span> <span class="nx">event</span><span class="p">.</span><span class="nx">identifier</span><span class="p">);</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>		<span class="c1">// This isn&#39;t the touch you&#39;re looking for.</span></div><div class='line' id='LC390'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">touch</span><span class="p">)</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC391'><br/></div><div class='line' id='LC392'>		<span class="nx">removeActiveTouch</span><span class="p">(</span><span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC393'>		<span class="nx">endEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">timer</span><span class="p">);</span></div><div class='line' id='LC394'>	<span class="p">}</span></div><div class='line' id='LC395'><br/></div><div class='line' id='LC396'>	<span class="kd">function</span> <span class="nx">removeActiveTouch</span><span class="p">(</span><span class="nx">event</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC397'>		<span class="nx">remove</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">event</span><span class="p">.</span><span class="nx">identifier</span><span class="p">,</span> <span class="nx">activeTouchmove</span><span class="p">);</span></div><div class='line' id='LC398'>		<span class="nx">remove</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">event</span><span class="p">.</span><span class="nx">identifier</span><span class="p">,</span> <span class="nx">activeTouchend</span><span class="p">);</span></div><div class='line' id='LC399'>	<span class="p">}</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'><br/></div><div class='line' id='LC402'>	<span class="c1">// Logic for triggering move and moveend events</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>	<span class="kd">function</span> <span class="nx">updateEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">touch</span><span class="p">,</span> <span class="nx">timeStamp</span><span class="p">,</span> <span class="nx">timer</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC405'>		<span class="kd">var</span> <span class="nx">time</span> <span class="o">=</span> <span class="nx">timeStamp</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">;</span></div><div class='line' id='LC406'><br/></div><div class='line' id='LC407'>		<span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;move&#39;</span><span class="p">;</span></div><div class='line' id='LC408'>		<span class="nx">event</span><span class="p">.</span><span class="nx">distX</span> <span class="o">=</span>  <span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">startX</span><span class="p">;</span></div><div class='line' id='LC409'>		<span class="nx">event</span><span class="p">.</span><span class="nx">distY</span> <span class="o">=</span>  <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">startY</span><span class="p">;</span></div><div class='line' id='LC410'>		<span class="nx">event</span><span class="p">.</span><span class="nx">deltaX</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC411'>		<span class="nx">event</span><span class="p">.</span><span class="nx">deltaY</span> <span class="o">=</span> <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">-</span> <span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC412'><br/></div><div class='line' id='LC413'>		<span class="c1">// Average the velocity of the last few events using a decay</span></div><div class='line' id='LC414'>		<span class="c1">// curve to even out spurious jumps in values.</span></div><div class='line' id='LC415'>		<span class="nx">event</span><span class="p">.</span><span class="nx">velocityX</span> <span class="o">=</span> <span class="mf">0.3</span> <span class="o">*</span> <span class="nx">event</span><span class="p">.</span><span class="nx">velocityX</span> <span class="o">+</span> <span class="mf">0.7</span> <span class="o">*</span> <span class="nx">event</span><span class="p">.</span><span class="nx">deltaX</span> <span class="o">/</span> <span class="nx">time</span><span class="p">;</span></div><div class='line' id='LC416'>		<span class="nx">event</span><span class="p">.</span><span class="nx">velocityY</span> <span class="o">=</span> <span class="mf">0.3</span> <span class="o">*</span> <span class="nx">event</span><span class="p">.</span><span class="nx">velocityY</span> <span class="o">+</span> <span class="mf">0.7</span> <span class="o">*</span> <span class="nx">event</span><span class="p">.</span><span class="nx">deltaY</span> <span class="o">/</span> <span class="nx">time</span><span class="p">;</span></div><div class='line' id='LC417'>		<span class="nx">event</span><span class="p">.</span><span class="nx">pageX</span> <span class="o">=</span>  <span class="nx">touch</span><span class="p">.</span><span class="nx">pageX</span><span class="p">;</span></div><div class='line' id='LC418'>		<span class="nx">event</span><span class="p">.</span><span class="nx">pageY</span> <span class="o">=</span>  <span class="nx">touch</span><span class="p">.</span><span class="nx">pageY</span><span class="p">;</span></div><div class='line' id='LC419'><br/></div><div class='line' id='LC420'>		<span class="nx">timer</span><span class="p">.</span><span class="nx">kick</span><span class="p">();</span></div><div class='line' id='LC421'>	<span class="p">}</span></div><div class='line' id='LC422'><br/></div><div class='line' id='LC423'>	<span class="kd">function</span> <span class="nx">endEvent</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">timer</span><span class="p">,</span> <span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC424'>		<span class="nx">timer</span><span class="p">.</span><span class="nx">end</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC425'>			<span class="nx">event</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="s1">&#39;moveend&#39;</span><span class="p">;</span></div><div class='line' id='LC426'><br/></div><div class='line' id='LC427'>			<span class="nx">trigger</span><span class="p">(</span><span class="nx">event</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span> <span class="nx">event</span><span class="p">);</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>			<span class="k">return</span> <span class="nx">fn</span> <span class="o">&amp;&amp;</span> <span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC430'>		<span class="p">});</span></div><div class='line' id='LC431'>	<span class="p">}</span></div><div class='line' id='LC432'><br/></div><div class='line' id='LC433'><br/></div><div class='line' id='LC434'>	<span class="c1">// jQuery special event definition</span></div><div class='line' id='LC435'><br/></div><div class='line' id='LC436'>	<span class="kd">function</span> <span class="nx">setup</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">namespaces</span><span class="p">,</span> <span class="nx">eventHandle</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC437'>		<span class="c1">// Stop the node from being dragged</span></div><div class='line' id='LC438'>		<span class="c1">//add(this, &#39;dragstart.move drag.move&#39;, preventDefault);</span></div><div class='line' id='LC439'><br/></div><div class='line' id='LC440'>		<span class="c1">// Prevent text selection and touch interface scrolling</span></div><div class='line' id='LC441'>		<span class="c1">//add(this, &#39;mousedown.move&#39;, preventIgnoreTags);</span></div><div class='line' id='LC442'><br/></div><div class='line' id='LC443'>		<span class="c1">// Tell movestart default handler that we&#39;ve handled this</span></div><div class='line' id='LC444'>		<span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;movestart.move&#39;</span><span class="p">,</span> <span class="nx">flagAsHandled</span><span class="p">);</span></div><div class='line' id='LC445'><br/></div><div class='line' id='LC446'>		<span class="c1">// Don&#39;t bind to the DOM. For speed.</span></div><div class='line' id='LC447'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC448'>	<span class="p">}</span></div><div class='line' id='LC449'><br/></div><div class='line' id='LC450'>	<span class="kd">function</span> <span class="nx">teardown</span><span class="p">(</span><span class="nx">namespaces</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC451'>		<span class="nx">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;dragstart drag&#39;</span><span class="p">,</span> <span class="nx">preventDefault</span><span class="p">);</span></div><div class='line' id='LC452'>		<span class="nx">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousedown touchstart&#39;</span><span class="p">,</span> <span class="nx">preventIgnoreTags</span><span class="p">);</span></div><div class='line' id='LC453'>		<span class="nx">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;movestart&#39;</span><span class="p">,</span> <span class="nx">flagAsHandled</span><span class="p">);</span></div><div class='line' id='LC454'><br/></div><div class='line' id='LC455'>		<span class="c1">// Don&#39;t bind to the DOM. For speed.</span></div><div class='line' id='LC456'>		<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC457'>	<span class="p">}</span></div><div class='line' id='LC458'><br/></div><div class='line' id='LC459'>	<span class="kd">function</span> <span class="nx">addMethod</span><span class="p">(</span><span class="nx">handleObj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC460'>		<span class="c1">// We&#39;re not interested in preventing defaults for handlers that</span></div><div class='line' id='LC461'>		<span class="c1">// come from internal move or moveend bindings</span></div><div class='line' id='LC462'>		<span class="k">if</span> <span class="p">(</span><span class="nx">handleObj</span><span class="p">.</span><span class="nx">namespace</span> <span class="o">===</span> <span class="s2">&quot;move&quot;</span> <span class="o">||</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">namespace</span> <span class="o">===</span> <span class="s2">&quot;moveend&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC463'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC464'>		<span class="p">}</span></div><div class='line' id='LC465'><br/></div><div class='line' id='LC466'>		<span class="c1">// Stop the node from being dragged</span></div><div class='line' id='LC467'>		<span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;dragstart.&#39;</span> <span class="o">+</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">guid</span> <span class="o">+</span> <span class="s1">&#39; drag.&#39;</span> <span class="o">+</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">guid</span><span class="p">,</span> <span class="nx">preventDefault</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">,</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">selector</span><span class="p">);</span></div><div class='line' id='LC468'><br/></div><div class='line' id='LC469'>		<span class="c1">// Prevent text selection and touch interface scrolling</span></div><div class='line' id='LC470'>		<span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousedown.&#39;</span> <span class="o">+</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">guid</span><span class="p">,</span> <span class="nx">preventIgnoreTags</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">,</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">selector</span><span class="p">);</span></div><div class='line' id='LC471'>	<span class="p">}</span></div><div class='line' id='LC472'><br/></div><div class='line' id='LC473'>	<span class="kd">function</span> <span class="nx">removeMethod</span><span class="p">(</span><span class="nx">handleObj</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC474'>		<span class="k">if</span> <span class="p">(</span><span class="nx">handleObj</span><span class="p">.</span><span class="nx">namespace</span> <span class="o">===</span> <span class="s2">&quot;move&quot;</span> <span class="o">||</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">namespace</span> <span class="o">===</span> <span class="s2">&quot;moveend&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC475'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC476'>		<span class="p">}</span></div><div class='line' id='LC477'><br/></div><div class='line' id='LC478'>		<span class="nx">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;dragstart.&#39;</span> <span class="o">+</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">guid</span> <span class="o">+</span> <span class="s1">&#39; drag.&#39;</span> <span class="o">+</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">guid</span><span class="p">);</span></div><div class='line' id='LC479'>		<span class="nx">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;mousedown.&#39;</span> <span class="o">+</span> <span class="nx">handleObj</span><span class="p">.</span><span class="nx">guid</span><span class="p">);</span></div><div class='line' id='LC480'>	<span class="p">}</span></div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">movestart</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC483'>		<span class="nx">setup</span><span class="o">:</span> <span class="nx">setup</span><span class="p">,</span></div><div class='line' id='LC484'>		<span class="nx">teardown</span><span class="o">:</span> <span class="nx">teardown</span><span class="p">,</span></div><div class='line' id='LC485'>		<span class="nx">add</span><span class="o">:</span> <span class="nx">addMethod</span><span class="p">,</span></div><div class='line' id='LC486'>		<span class="nx">remove</span><span class="o">:</span> <span class="nx">removeMethod</span><span class="p">,</span></div><div class='line' id='LC487'><br/></div><div class='line' id='LC488'>		<span class="nx">_default</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC489'>			<span class="kd">var</span> <span class="nx">template</span><span class="p">,</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC490'><br/></div><div class='line' id='LC491'>			<span class="c1">// If no move events were bound to any ancestors of this</span></div><div class='line' id='LC492'>			<span class="c1">// target, high tail it out of here.</span></div><div class='line' id='LC493'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">e</span><span class="p">.</span><span class="nx">_handled</span><span class="p">())</span> <span class="p">{</span> <span class="k">return</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC494'><br/></div><div class='line' id='LC495'>			<span class="nx">template</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC496'>				<span class="nx">target</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span></div><div class='line' id='LC497'>				<span class="nx">startX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">startX</span><span class="p">,</span></div><div class='line' id='LC498'>				<span class="nx">startY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">startY</span><span class="p">,</span></div><div class='line' id='LC499'>				<span class="nx">pageX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageX</span><span class="p">,</span></div><div class='line' id='LC500'>				<span class="nx">pageY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">pageY</span><span class="p">,</span></div><div class='line' id='LC501'>				<span class="nx">distX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distX</span><span class="p">,</span></div><div class='line' id='LC502'>				<span class="nx">distY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">distY</span><span class="p">,</span></div><div class='line' id='LC503'>				<span class="nx">deltaX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">deltaX</span><span class="p">,</span></div><div class='line' id='LC504'>				<span class="nx">deltaY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">deltaY</span><span class="p">,</span></div><div class='line' id='LC505'>				<span class="nx">velocityX</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityX</span><span class="p">,</span></div><div class='line' id='LC506'>				<span class="nx">velocityY</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">velocityY</span><span class="p">,</span></div><div class='line' id='LC507'>				<span class="nx">timeStamp</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">timeStamp</span><span class="p">,</span></div><div class='line' id='LC508'>				<span class="nx">identifier</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">identifier</span><span class="p">,</span></div><div class='line' id='LC509'>				<span class="nx">targetTouches</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">targetTouches</span><span class="p">,</span></div><div class='line' id='LC510'>				<span class="nx">finger</span><span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">finger</span></div><div class='line' id='LC511'>			<span class="p">};</span></div><div class='line' id='LC512'><br/></div><div class='line' id='LC513'>			<span class="nx">data</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC514'>				<span class="nx">event</span><span class="o">:</span> <span class="nx">template</span><span class="p">,</span></div><div class='line' id='LC515'>				<span class="nx">timer</span><span class="o">:</span> <span class="k">new</span> <span class="nx">Timer</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">time</span><span class="p">){</span></div><div class='line' id='LC516'>					<span class="nx">trigger</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span> <span class="nx">template</span><span class="p">);</span></div><div class='line' id='LC517'>				<span class="p">})</span></div><div class='line' id='LC518'>			<span class="p">};</span></div><div class='line' id='LC519'><br/></div><div class='line' id='LC520'>			<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">identifier</span> <span class="o">===</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC521'>				<span class="c1">// We&#39;re dealing with a mouse</span></div><div class='line' id='LC522'>				<span class="c1">// Stop clicks from propagating during a move</span></div><div class='line' id='LC523'>				<span class="nx">add</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">target</span><span class="p">,</span> <span class="s1">&#39;click&#39;</span><span class="p">,</span> <span class="nx">returnFalse</span><span class="p">);</span></div><div class='line' id='LC524'>				<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">mouseevents</span><span class="p">.</span><span class="nx">move</span><span class="p">,</span> <span class="nx">activeMousemove</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC525'>				<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">mouseevents</span><span class="p">.</span><span class="nx">end</span><span class="p">,</span> <span class="nx">activeMouseend</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC526'>			<span class="p">}</span></div><div class='line' id='LC527'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC528'>				<span class="c1">// We&#39;re dealing with a touch. Stop touchmove doing</span></div><div class='line' id='LC529'>				<span class="c1">// anything defaulty.</span></div><div class='line' id='LC530'>				<span class="nx">e</span><span class="p">.</span><span class="nx">_preventTouchmoveDefault</span><span class="p">();</span></div><div class='line' id='LC531'>				<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">touchevents</span><span class="p">.</span><span class="nx">move</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">identifier</span><span class="p">,</span> <span class="nx">activeTouchmove</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC532'>				<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="nx">touchevents</span><span class="p">.</span><span class="nx">end</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span> <span class="nx">e</span><span class="p">.</span><span class="nx">identifier</span><span class="p">,</span> <span class="nx">activeTouchend</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC533'>			<span class="p">}</span></div><div class='line' id='LC534'>		<span class="p">}</span></div><div class='line' id='LC535'>	<span class="p">};</span></div><div class='line' id='LC536'><br/></div><div class='line' id='LC537'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">move</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC538'>		<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC539'>			<span class="c1">// Bind a noop to movestart. Why? It&#39;s the movestart</span></div><div class='line' id='LC540'>			<span class="c1">// setup that decides whether other move events are fired.</span></div><div class='line' id='LC541'>			<span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;movestart.move&#39;</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">noop</span><span class="p">);</span></div><div class='line' id='LC542'>		<span class="p">},</span></div><div class='line' id='LC543'><br/></div><div class='line' id='LC544'>		<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC545'>			<span class="nx">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;movestart.move&#39;</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">noop</span><span class="p">);</span></div><div class='line' id='LC546'>		<span class="p">}</span></div><div class='line' id='LC547'>	<span class="p">};</span></div><div class='line' id='LC548'><br/></div><div class='line' id='LC549'>	<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">.</span><span class="nx">moveend</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC550'>		<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC551'>			<span class="c1">// Bind a noop to movestart. Why? It&#39;s the movestart</span></div><div class='line' id='LC552'>			<span class="c1">// setup that decides whether other move events are fired.</span></div><div class='line' id='LC553'>			<span class="nx">add</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;movestart.moveend&#39;</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">noop</span><span class="p">);</span></div><div class='line' id='LC554'>		<span class="p">},</span></div><div class='line' id='LC555'><br/></div><div class='line' id='LC556'>		<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC557'>			<span class="nx">remove</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="s1">&#39;movestart.moveend&#39;</span><span class="p">,</span> <span class="nx">jQuery</span><span class="p">.</span><span class="nx">noop</span><span class="p">);</span></div><div class='line' id='LC558'>		<span class="p">}</span></div><div class='line' id='LC559'>	<span class="p">};</span></div><div class='line' id='LC560'><br/></div><div class='line' id='LC561'>	<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="s1">&#39;mousedown.move&#39;</span><span class="p">,</span> <span class="nx">mousedown</span><span class="p">);</span></div><div class='line' id='LC562'>	<span class="nx">add</span><span class="p">(</span><span class="nb">document</span><span class="p">,</span> <span class="s1">&#39;touchstart.move&#39;</span><span class="p">,</span> <span class="nx">touchstart</span><span class="p">);</span></div><div class='line' id='LC563'><br/></div><div class='line' id='LC564'>	<span class="c1">// Make jQuery copy touch event properties over to the jQuery event</span></div><div class='line' id='LC565'>	<span class="c1">// object, if they are not already listed. But only do the ones we</span></div><div class='line' id='LC566'>	<span class="c1">// really need. IE7/8 do not have Array#indexOf(), but nor do they</span></div><div class='line' id='LC567'>	<span class="c1">// have touch events, so let&#39;s assume we can ignore them.</span></div><div class='line' id='LC568'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">indexOf</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC569'>		<span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">jQuery</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">){</span></div><div class='line' id='LC570'>			<span class="kd">var</span> <span class="nx">props</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;changedTouches&quot;</span><span class="p">,</span> <span class="s2">&quot;targetTouches&quot;</span><span class="p">],</span></div><div class='line' id='LC571'>			    <span class="nx">l</span> <span class="o">=</span> <span class="nx">props</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC572'><br/></div><div class='line' id='LC573'>			<span class="k">while</span> <span class="p">(</span><span class="nx">l</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC574'>				<span class="k">if</span> <span class="p">(</span><span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">props</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="nx">props</span><span class="p">[</span><span class="nx">l</span><span class="p">])</span> <span class="o">===</span> <span class="o">-</span><span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC575'>					<span class="nx">jQuery</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">props</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">props</span><span class="p">[</span><span class="nx">l</span><span class="p">]);</span></div><div class='line' id='LC576'>				<span class="p">}</span></div><div class='line' id='LC577'>			<span class="p">}</span></div><div class='line' id='LC578'>		<span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div><div class='line' id='LC579'>	<span class="p">};</span></div><div class='line' id='LC580'><span class="p">});</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;">
            <button type="submit" class="button">Go</button>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif" height="64" width="64">
</div>


        </div>
      </div>
      <div class="modal-backdrop"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="/about">About us</a></dd>
        <dd><a href="/blog">Blog</a></dd>
        <dd><a href="/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.10099s from fe4.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>
    <ul id="legal">
        <li><a href="/site/terms">Terms of Service</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/stephband/jquery.event.move/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="octicon octicon-remove-close ajax-error-dismiss"></a>
    </div>

    
    <span id='server_response_time' data-time='0.10161' data-host='fe4'></span>
    
  </body>
</html>

