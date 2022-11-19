import React from 'react';

function Body(){
    return (
        <div>
            <body>
    
    <div class="sidebar">
        <i class="fab fa-twitter"></i>
        <div class="sidebaroption active">
            <span class="material-symbols-outlined">
                home</span>
            <h2>Home</h2>
        </div>


        <div class="sidebaroption">
            <span class="material-symbols-outlined">
                search
            </span>
            <h2>Explore</h2>
        </div>


        <div class="sidebaroption">
            <span class="material-symbols-outlined">
                notifications
            </span>
            <h2>Notifications</h2>
        </div>


        <div class="sidebaroption">
            <span class="material-symbols-outlined">
                mail
            </span>
            <h2><a href="/html/messages.html">Messages</a></h2>
        </div>


        <div class="sidebaroption">
            <span class="material-symbols-outlined">
                bookmark
            </span>
            <h2>Bookmark</h2>
        </div>


        <div class="sidebaroption">
            <span class="material-symbols-outlined">
                dynamic_form
            </span>
            <h2>Lists</h2>
        </div>


        <div class="sidebaroption">
            <span class="material-symbols-outlined">
                account_circle
            </span>
            <h2><a href="/html/profile.html" style={{"text-decoration": "none"}}>Profile</a></h2>
        </div>


        <div class="sidebaroption">
            <span class="material-symbols-outlined">
                pending
            </span>
            <h2>More</h2>
        </div>
        <button class="sidebar_tweet">Tweet</button>
    </div>
    
    <div class="content">

        <div class="content_header">
            <h2>Home</h2>
            <div class="content_header popular">
                <span class="material-symbols-outlined">
                    auto_awesome
                </span>
            </div>
        </div>

        <div class="tweetbox">
            <form>
                <div class="tweetbox_input">
                    <img src="/img/me.jpg" alt="" srcset=""/>
                    <input type="text" name="" id="" placeholder="What's happening?"/>
                </div>
                <button class="tweetbox_tweetbtn">Tweet</button>
                <div class="wrapper">
                    <div class="adds_option">
                        <span class="material-symbols-outlined">
                            image
                        </span>
                    </div>
                    <div class="adds_option">
                        <span class="material-symbols-outlined">
                            gif_box
                        </span>
                    </div>
                    <div class="adds_option">
                        <span class="material-symbols-outlined">
                            ballot
                        </span>
                    </div>
                    <div class="adds_option">
                        <span class="material-symbols-outlined">
                            sentiment_satisfied
                        </span>
                    </div>
                    <div class="adds_option">
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                    </div>
                    <div class="adds_option">
                        <span class="material-symbols-outlined">
                            location_on
                        </span>
                    </div>
                </div>
            </form>
        </div>
        


        
        <div class="posts">
            <div class="post_ava">
                <img src="/img/ava1.jpg" alt="" srcset="" style={{"width": "40px", "height":
                "40px" ,"border-radius": "50%"}}/>
            </div>
            <div class="post_body">
                <div class="post_header">
                    <div class="post_headertxt">
                        <h3>Donald J.Tramp
                            <span class="post_headerSpecial">
                                <span class="material-symbols-outlined verified">
                                    verified
                                </span>
                                @realdonaldtrump . 4h
                            </span>
                        </h3>
                    </div>
                    <div class="post_headerDescription">
                        <p>Make America great again! </p>
                    </div>
                </div>
                <img src="/img/trump.PNG" alt="" style={{"width":"450px",
                "height":"350px", "border-radius": "30px"}}/>
                <div class="post_footer">
                    <span class="material-symbols-outlined">add_comment</span>
                    <span class="material-symbols-outlined">repeat</span>
                    <span class="material-symbols-outlined">favorite</span>
                </div>
            </div>
        </div>
        
        <div class="posts">
            <div class="post_ava">
                <img src="/img/gravy.PNG" alt="" srcset="" 
                style={{"width": "40px", "height":"40px", "border-radius": "50%"}}/>
            </div>
            <div class="post_body">
                <div class="post_header">
                    <div class="post_headertxt">
                        <h3>Yung Gravy
                            <span class="post_headerSpecial">
                                <span class="material-symbols-outlined verified">
                                    verified
                                </span>
                                @yunggravy . 8h
                            </span>
                        </h3>
                    </div>
                    <div class="post_headerDescription">
                        <p>New Album Pops out today!!!</p>
                    </div>
                </div>
                <img src="https://imgs.search.brave.com/7I_aE-Fkd3Ffcaj3jr_BLMiWLT2TZ6_XWOeNPVvDzRA/rs:
                fit:604:405:1/g:ce/aHR0cHM6Ly9zdW45/LTE1LnVzZXJhcGku/Y29tL2ltcGcvT3hh/c1ZTczY0QVpZQkZ5/dlBUekV4T
                GhtcDF3/Vkx6MTg2TnpoV2cv/Nzh3V2NuRktHdnMu/anBnP3NpemU9NjA0/eDQwNSZxdWFsaXR5/PTk2JnNpZ249Yjhk/Njg2ZGZjZDc
                4ZmVm/ZmQwYWFhYjcwOWU5/NGZlMTkmdHlwZT1h/bGJ1bQ"
                    alt="" style={{"width":"450px", "height":"350px", "border-radius": "30px"}}/>
                <div class="post_footer">
                    <span class="material-symbols-outlined">add_comment</span>
                    <span class="material-symbols-outlined">repeat</span>
                    <span class="material-symbols-outlined">favorite</span>
                </div>
            </div>
        </div>
        
    </div>
    
    <div class="widgets">
        <div class="widgets_input">
            <span class="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search Twitter"/>
        </div>
        <div class="widget_container">
            <h2>What's happening?</h2>
            <blockquote class="twitter-tweet"><p lang="en" dir="ltr">we’re pumping <a href="https://twitter.com/hashtag/BTC?src=hash&amp;ref_src=twsrc%5Etfw">#BTC</a> <a href="https://t.co/e6aKFLswTL">pic.twitter.com/e6aKFLswTL</a></p>&mdash; Sheikh Roberto (@roberto_saudi) <a href="https://twitter.com/roberto_saudi/status/1582704662184357889?ref_src=twsrc%5Etfw">October 19, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
    </div>
</body>
        </div>
    )
}

export default Body;