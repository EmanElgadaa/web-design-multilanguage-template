
// var dir = localStorage.getItem('direction') === 'rtl' ? true : false
$('.owl-carousel1').owlCarousel({
			// rtl: dir,
			loop:true,
			dots:true,
			margin:20,
			nav:true,
			// loop:false,
			autoplay:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
//				if($(.translate).attr('id')=="en")
//				{
//				console.log('lololo')
//			}
		});
		$('.owl-carousel').owlCarousel({
			// rtl: dir,
			loop:true,
			dots:true,
			margin:20,
			nav:true,
			// loop:false,
			autoplay:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:2
				}
			}
//				if($(.translate).attr('id')=="en")
//				{
//				console.log('lololo')
//			}
		});
			
			var arrlang=
	{
		'en':
		{
			'home':"home",
			'about':'about',
			'pages':'PAGES',
			'project':'Projects',
			'blog':'Blogs',
			'news':'NEWS',
			'contact':'contact',
			'paraHead':'We care about your business',
			'paraContent':'  Lorem ipsum dolor sit amet consectetur adipiscing elit Etiam elementum consectetur egestas Nulla nisi nisi rutrum vitae nunc non bibendum euismod nulla',
			'btnAbout':'About us',
			'para1':'Europan lingues',
			'para2':'Europan lingues',
			'para3':'Europan lingues',
			'para4':'Europan lingues',
			'para5':'Europan lingues',
			'para6':'Europan lingues',
			'content1':'Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.',
			'content2':'Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.',
			'content3':'Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.',
			'content4':'Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.',
			'content5':'Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.',
			'content6':'Donec ullamcorper nulla non metus auctor fringilla. Cum sociis natoque penatibus etmagnis dis parturie nt montes, nascetur.',
			'recentProject':'Recent Project',
			'noContent1':'Happy Client',
			'noContent2':'Projects',
			'noContent3':'Happy Client',
			'noContent4':'Happy Client',
            //======================footer
			'subFooter':'GO AHEAD AND FIND OUT HOW WE CAN HELP YOU!',
			'Faboutpara':'i europan lingues es membres del sam familie. lor separat existentie es un myth. por scientie, musica, sport etc, litot europa usa li sam vocabular. li lingues differe solm',
			'subFooterbtn':'GET IN TOUCH',
			'Fabout':'ABOUT US',
			'links1':'events',
			'links2':'news and press releases',
			'links3':'interviews',
			'links4':'subsidiaries media contacts',
			'links5':'media kit',
			'media1':'events',
			'media2':'news and press releases',
			'media3':'interviews',
			'media4':'subsidiaries media contacts',
			'media5':'media kit',
			'touch':'GET IN TOUCH',
			'touchpara':'lorem ipsum is simply dummy text of the printing and typesetting industry.',
			'date':'mon - sat: 7:00 - 17:00',
			'phone':'+ 386 40 111 5555',
			'email':'info@yourdomain.com',
			//===============news-content
			'news-contentadd1':'Steps Toward Developing A Content Strategy',
			'news-contentadd2':'Looking for Developers? Try This Geeky Community',
			'news-contentadd3':'How to Spend Less Than an Hour a Day on Email Marketing',
			'news-contentpara1':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]',
			'news-contentpara2':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]',
			'news-contentpara3':'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab debitis ea est illum ipsa itaque liberop tiovolup Conseq uuntur deserunt expedita, fugiat hic illum porro quidem quis recusandae vero? Aliquiassumenda cum delectus eaque eligendi, enim eum excepturi fugit illum impedit in iste laudantium modi natus, nisi nobis gfy  g obcaecati praesentium quis reiciendis rerum sapiente […]',
			'right-content-para1':'There is no good blog without tim great readability is very importent',
			'right-content-para2':'There is no good blog without tim great readability is very importent',
			'right-content-para3':'There is no good blog without tim great readability is very importent',
			'right-content-para4':'There is no good blog without tim great readability is very importent',
			'right-content-1':'Viral polaroid ugh',
			'right-content-2':'Viral polaroid ugh',
			'right-content-3':'Viral polaroid ugh',
			'right-content-4':'Viral polaroid ugh',
		},
		'ar':
		{
			'home':"الرئيسية",
			'about':'عنا',
			'pages':'الصفحات',
			'project':'المشاريع',
			'blog':'الاراء',
			'news':'الاخبار',
			'contact':'تواصل معنا',
			'paraHead':'العميل المبدئيه على التصميم يتم ازالة هذا النص من ',
			'paraContent':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي',
			'btnAbout':'عنا',
			'para1':'النصوص التجريبية بالتصميم',
			'para2':'النصوص التجريبية بالتصميم',
			'para3':'النصوص التجريبية بالتصميم',
			'para4':'النصوص التجريبية بالتصميم',
			'para5':'النصوص التجريبية بالتصميم',
			'para6':'النصوص التجريبية بالتصميم',
			'content1':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي',
			'content2':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي',
			'content3':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي',
			'content4':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي',
			'content5':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي',
			'content6':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او الانتقادات للتصميم الاساسي',
			'recentProject':'المشاريع الحديثة',
			'noContent1':'لنصوص النهائية',
			'noContent2':'لنصوص النهائي',
			'noContent3':'لنصوص النهائي',
			'noContent4':'لنصوص النهائي',
			 //======================footer
			'subFooter':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص',
			'Faboutpara':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظ',
			'subFooterbtn':' التصميم ويتم',
			'Fabout':'عنا',
			'links1':'الايفينتات',
			'links2':'النصوص النهائية',
			'links3':'مقابلات شخصية',
			'links4':'العميل المبدئيه على',
			'links5':'التصميم ويتم',
			'media1':'الايفينتات',
			'media2':'النصوص النهائية',
			'media3':'مقابلات شخصية',
			'media4':'العميل المبدئيه على',
			'media5':'التصميم ويتم',
			'touch':'وضع النصوص التجريبية',
			'touchpara':'تصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظ',
			'data':'الاثنين 20-8-2019',
			'phone':'+339 804 798',
			'email':'info@yourdomain.com',
				//===============news-content
			'news-contentadd1':'صميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظ',
			'news-contentadd2':'صميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظ',
			'news-contentadd3':'صميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظ',
			'news-contentpara1':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظوعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظ',
			'news-contentpara2':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظوعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظ',
			'news-contentpara3':'وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظوعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظ',
			'right-content-para1':' من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص',
			'right-content-para2':' من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص',
			'right-content-para3':' من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص',
			'right-content-para4':' من التصميم ويتم وضع النصوص النهائية المطلوبة للتصميم ويقول البعض ان وضع النصوص',
			'right-content-1':'يقول البعض ان وضع النصوص',
			'right-content-2':'يقول البعض ان وضع النصوص',
			'right-content-3':'يقول البعض ان وضع النصوص',
			'right-content-4':'يقول البعض ان وضع النصوص',
			'exp':'اهلا'
		}
	}

$(function(){
	$('.translate').click(function(){
		var lang = $(this).attr('id')
		 $('.lang').each(function (index, ele) {
            $(this).text(arrlang[lang][$(this).attr('key')]);
        });
		if(lang=="en")
			{
				console.log("hi")
				$("body").css("direction","ltr");
				$('#input1').attr('placeholder','first name');
				$('#input2').attr('placeholder','second name');
				$('#input3').attr('placeholder','email');
				$('#input4').attr('placeholder','website');
				$('#input5').attr('placeholder','your message');
				$('#input6').attr('value','send');
			}
		if(lang=="ar")
			{
				console.log("bye");
				$("body").css("direction","rtl");
				$("body").css("text-align","start");
				$(".edit-padding").css("padding-right","0");
				$('#input1').attr('placeholder','الاسم الاول');
				$('#input2').attr('placeholder','الاسم الثانى');
				$('#input3').attr('placeholder','الايميل');
				$('#input4').attr('placeholder','الموقع');
				$('#input5').attr('placeholder','الرسالة');	
				$('#input6').attr('value','ارسال');
			}
    });
	});
console.log("hi")