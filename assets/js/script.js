// $('.slide-wts').glide({
//     autoplay: false,
//     arrowsWrapperClass: 'slider-arrows',
//     arrowRightText: '<span style="font-size:30px;color:white">></span>',
//     arrowLeftText: '<span style="font-size:30px;color:white"><</span>'
// });

// $('#carousel').glide({
//     autoplay: false,
//     arrowsWrapperClass: 'slider-arrows',
//     arrowRightText: '',
//     arrowLeftText: ''
// });

$('#what-they-say-mobile').glide({
    autoplay: false,
    arrowsWrapperClass: 'slider-arrows',
    arrowRightText: '',
    arrowLeftText: ''
});

$('#area-of-expertise').glide({
    autoplay: false,
    arrowsWrapperClass: 'slider-arrows',
    arrowRightText: '',
    arrowLeftText: '',
    arrowRightText: '<span style="font-size:30px;color:white">></span>',
    arrowLeftText: '<span style="font-size:30px;color:white"><</span>'
});
// $('#are-expertise').glide();
// $('.sld').glide(); 

// $('#desktop-slider').glide({
//     autoplay: false,
//     arrowsWrapperClass: 'slider-arrows',
//     arrowRightText: '<span style="font-size:60px;color:white;font-family:Lato Light">></span>',
//     arrowLeftText: '<span style="font-size:60px;color:white;font-family:Lato Light"><</span>'
// })

function myMap() {
    var myCenter = new google.maps.LatLng(-6.8860985,107.6139204);
    var mapCanvas = document.getElementById("googleMap");
    var mapOptions = {center: myCenter, zoom: 18};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position:myCenter});
    marker.setMap(map);
}

$(document)
    .ready(function() {

        var i =0;
        $(window).on('scroll', () => {
            
            if ($(window).width() > 720) {
                if ($(document).scrollTop() > 80) {
                    $('#navbar-fix').fadeIn();
                    // $('#navbar-nofix').fadeOut();
                } else if ($(document).scrollTop() < 79) {
                    $('#navbar-fix').fadeOut();
                    // $('#navbar-nofix').fadeIn();
                }
            }
        })

        // create sidebar and attach to menu open
        $('.ui.sidebar')
         .sidebar('attach events', '.toc.item');

         var web = $('#web');
         var android = $('#android');
         var cv = $('#cv');
         var game = $('#game');
         var ios = $('#ios');
         var iot = $('#iot');

         var dataImg = {
             web_tech: {
                img: [
                    'assets/img/content/angular.png',
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/2000px-Vue.js_Logo.svg.png',
                    'assets/img/content/react-logo.png',
                    'https://seeklogo.com/images/L/laravel-framework-logo-C10176EC8C-seeklogo.com.png',
                    'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png'
                ],
                text: [
                    `Angular is a platform that makes it easy to build applications with the web. Angular combines declarative
                    templates, dependency injection, end to end tooling, and integrated best practices to solve development
                    challenges. Angular empowers developers to build applications that live on the web, mobile, or the
                    desktop`,
                    `Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue
                    is designed from the ground up to be incrementally adoptable.`,
                    `React makes it painless to create interactive UIs. Design simple views for each state in your application,
                    and React will efficiently update and render just the right components when your data changes.`,
                    `Laravel is a free, open-source
                    PHP web framework, created by Taylor Otwell and intended for the development of web applications 
                    following the model–view–controller 
                   (MVC) architectural pattern and based on Symfony.`,
                    `Node.js is an open-source, 
                    cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
                     Historically, JavaScript was used primarily for client-side scripting, in which scripts written 
                     in JavaScript are embedded in a webpage's HTML and run client-side by a JavaScript engine in the user's web browser.`
                ]
             },
             android_tech: {
                 img: [
                    'https://upload.wikimedia.org/wikipedia/commons/b/b5/Kotlin-logo.png',
                    'http://diylogodesigns.com/wp-content/uploads/2017/07/java-logo-vector.png',
                    `https://firebase.google.com/_static/images/firebase/touchicon-180.png`
                 ],
                 text: [
                    `Kotlin is a statically typed programming language that runs on the Java virtual machine and also can be 
                    compiled to JavaScript source code or use the LLVM compiler infrastructure. 
                    Its primary development is from a team of JetBrains programmers based in Saint Petersburg, Russia.`,
                    `The Java language is a key pillar in Android, an open source mobile operating system. Although Android,
                     built on the Linux kernel, is written largely in C, 
                    the Android SDK uses the Java language as the basis for Android applications.`,
                    `Firebase evolved from Envolve, a prior startup founded by James Tamplin and Andrew Lee in 2011. 
                    Envolve provided developers an API that enables the integration of online chat functionality into 
                    their websites.`
                 ]
             },

             cv_tech: {
                 img: [
                    'https://www.techspot.com/images2/downloads/topdownload/2014/05/unity.png',
                    'https://images.samsung.com/is/image/samsung/my-feature-gear-vr-2017-63126131?$Download-Source$&fmt=png-alpha',                   
                    `https://firebase.google.com/_static/images/firebase/touchicon-180.png`
                    
                ],
                 text: [
                    'Unity gives users the ability to create games in both 2D and 3D and the engine offers a primary scripting API in C# for both the Unity editor in the form of plugins, and games themselves, as well as drag and drop functionality.',
                    'Virtual reality (VR) is an interactive computer-generated experience taking place within a simulated environment, that incorporates mainly auditory and visual, but also other types of sensory feedback like haptic. ',
                    `Firebase evolved from Envolve, a prior startup founded by James Tamplin and Andrew Lee in 2011. 
                    Envolve provided developers an API that enables the integration of online chat functionality into 
                    their websites.`
                ]
             },
             ios_tech: {
                 img: [
                     'https://www.shareicon.net/download/2017/01/19/873402_network_512x512.png',
                 ],
                 text: [
                    'Swift is a powerful and intuitive programming language for macOS, iOS, watchOS and tvOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love. Swift code is safe by design, yet also produces software that runs lightning-fast.'
                 ]
             },
             iot_tech: {
                 img: [
                     'http://educatibot.com/wp-content/uploads/2017/11/arduino-logo-BC7CBC1DAA-seeklogo.com_.png'

                 ],
                 text: [
                    'Arduino is an open-source electronics platform based on easy-to-use hardware and software. Arduino boards are able to read inputs - light on a sensor, a finger on a button, or a Twitter message - and turn it into an output - activating a motor, turning on an LED, publishing something online.'
                 ]
             },
             game_tech: {
                 img: [
                    'https://www.techspot.com/images2/downloads/topdownload/2014/05/unity.png',
                    'http://www.myiconfinder.com/uploads/iconsets/256-256-47d235c64eda77a002c0d447559c91eb-illustrator.png',
                    'http://icons.iconarchive.com/icons/martz90/circle/256/fl-studio-icon.png',
                    `https://firebase.google.com/_static/images/firebase/touchicon-180.png`,
                    `https://upload.wikimedia.org/wikipedia/en/e/e7/Construct2Logo.png`
                    
                 ],
                 text: [
                    'Unity gives users the ability to create games in both 2D and 3D and the engine offers a primary scripting API in C# for both the Unity editor in the form of plugins, and games themselves, as well as drag and drop functionality.',
                    'Adobe Illustrator is a vector graphics editor developed and marketed by Adobe Systems. Originally designed for the Apple Macintosh, development of Adobe Illustrator began in 1985.',
                    'FL Studio (formerly known as FruityLoops)[2] is a digital audio workstation (DAW) developed by the Belgian company Image-Line. FL Studio features a graphical user interface based on a pattern-based music sequencer.',
                    `Firebase evolved from Envolve, a prior startup founded by James Tamplin and Andrew Lee in 2011. 
                    Envolve provided developers an API that enables the integration of online chat functionality into 
                    their websites.`,
                    `Construct is an HTML5-based 2D game editor, developed by Scirra Ltd. It is aimed primarily at non-programmers,[5] allowing quick creation of games in a drag-and-drop fashion using a visual editor and a behavior-based logic system.`
                 ]
             }
         }
        
        web.click(() => {
            web.addClass('active');
            android.removeClass('active');
            cv.removeClass('active');
            game.removeClass('active');
            ios.removeClass('active');
            iot.removeClass('active');
            
            $('.slidejs-pagination li a').removeClass('active');


            $('.slidesjs-pagination li a').first().addClass('active');
           
            for (let i=0;i<5;i++) {
                $('#img0'+(i+1)+ ' img').attr('src', dataImg.web_tech.img[i]);
                $('#img0'+(i+1)+ ' p').text('');
                $('#img0'+(i+1)+ ' p').text(dataImg.web_tech.text[i])
            }

         });

         android.click(() => {
            android.addClass('active')
            cv.removeClass('active');
            game.removeClass('active');
            ios.removeClass('active');
            iot.removeClass('active');
            web.removeClass('active');

            for (let i=0;i<5;i++) {
                $('#img0'+(i+1)+ ' img').attr('src', dataImg.android_tech.img[i]);
                $('#img0'+(i+1)+ ' p').text('');
                $('#img0'+(i+1)+ ' p').text(dataImg.android_tech.text[i])
            }
       
         });

         cv.click(() => {
            cv.addClass('active')
            game.removeClass('active');
            ios.removeClass('active');
            iot.removeClass('active');
            web.removeClass('active');
            android.removeClass('active');

            for (let i=0;i<5;i++) {
                $('#img0'+(i+1)+ ' img').attr('src', dataImg.cv_tech.img[i]);
                $('#img0'+(i+1)+ ' p').text('');
                $('#img0'+(i+1)+ ' p').text(dataImg.cv_tech.text[i])
            }

        });

         game.click(() => {
            game.addClass('active')
            ios.removeClass('active');
            iot.removeClass('active');
            web.removeClass('active');
            android.removeClass('active');
            cv.removeClass('active');

            for (let i=0;i<5;i++) {
                $('#img0'+(i+1)+ ' img').attr('src', dataImg.game_tech.img[i]);
                $('#img0'+(i+1)+ ' p').text('');
                $('#img0'+(i+1)+ ' p').text(dataImg.game_tech.text[i])
            }

         });

         ios.click(() => {
            ios.addClass('active')
            iot.removeClass('active');
            web.removeClass('active');
            android.removeClass('active');
            cv.removeClass('active');
            game.removeClass('active');

            for (let i=0;i<5;i++) {
                $('#img0'+(i+1)+ ' img').attr('src', dataImg.ios_tech.img[i]);
                $('#img0'+(i+1)+ ' p').text('');
                $('#img0'+(i+1)+ ' p').text(dataImg.ios_tech.text[i])
            }
         });

         iot.click(() => {
            iot.addClass('active');
            web.removeClass('active');
            android.removeClass('active');
            cv.removeClass('active');
            ios.removeClass('active');
            game.removeClass('active');

            for (let i=0;i<5;i++) {
                $('#img0'+(i+1)+ ' img').attr('src', dataImg.iot_tech.img[i]);
                $('#img0'+(i+1)+ ' p').text('');
                $('#img0'+(i+1)+ ' p').text(dataImg.iot_tech.text[i])
            }
         });

});

$(document).ready(function(){
    
    $("a").on('click', function(event) {
  
      
      if (this.hash !== "") {
        
        event.preventDefault();

        var hash = this.hash;
          
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
        });
      } 
    });
  });
