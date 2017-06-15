josn={
	//导航栏
	liNodes:$(".nav li"),
	iNode:$(".nav i"),
	moveLi:function(){
		var that=this;
		var nowLeft=$(".nav .now").position().left;
		that.iNode.css("left",nowLeft+"px");
		that.liNodes.mouseenter(function(){
			var left=$(this).position().left;
			that.iNode.stop().animate({
				left:left+"px"
			},300)

		})
		$(".nav ul").mouseleave(function(){
			var nowLeft=$(".nav .now").position().left;
			that.iNode.stop().animate({
				left:nowLeft+"px"
			},300)
		})
	},
	//导航栏结束
	//flash 开始
	spanNodes:$(".flash-btn span"),
	flash:function(){
		this.spanNodes.click(function(){
			var curPos=$(this).index();
			var oldPos=$(".flash-btn .color").index();
			if(curPos==oldPos){
				return;
			}
			$(".flash-btn span").eq(curPos).addClass("color");
			$(".flash-btn span").eq(oldPos).removeClass("color");
			$(".flash-img li").eq(curPos).fadeIn(1000);
			$(".flash-img li").eq(oldPos).fadeOut(1000);
			if(curPos==0){
				$(".text-1").delay(1500).animate({
					left:"121px",
					opacity: "1",
				})
				$(".text-1-2").delay(1500).animate({
					left:"118px",
					opacity: "1",
				})
				$(".text-1-3").delay(1500).fadeIn("show");
				$(".text-1-4").delay(1500).animate({
					right:"16px",
					opacity: "1",
				})
				$(".text-2-1").delay(600).animate({
					left:"120px",
				},400)
				$(".text-2-1").animate({
					left:"1200px",
					opacity: "0",
				},1000)
				$(".text-2-2").delay(600).animate({
					left:"120px",
				},400)
				$(".text-2-2").animate({
					left:"1200px",
					opacity: "0",
				},1000)
				$(".text-2-3").animate({
					right:"80px",
				},400)
				$(".text-2-3").animate({
					right:"-1000px",
					opacity: "0",
				},1000)
				$(".text-3-1").animate({
					left:"1200px",
					opacity: "0",
				},1000)
				$(".text-3-2").animate({
					left:"1200px",
					opacity: "0",
				},1000)
				$(".text-3-3").animate({
					right:"-1000px",
					opacity: "0",
				},1000)
			}
			if(curPos==1){
				$(".text-1").animate({
					left:"160px",
				},200)
				$(".text-1").animate({
					left:"-1000px",
					opacity: "0",
				},800)
				$(".text-1-2").delay(500).animate({
					left:"-1000px",
					opacity: "0",
				},1000)
				$(".text-1-3").fadeOut(1000);
				$(".text-1-4").delay(800).animate({
					right:"2000px",
					opacity: "0",
				})
				$(".text-2-1").delay(1200).animate({
					left:"168px",
					opacity: "1",
				})
				$(".text-2-2").delay(1200).animate({
					left:"162px",
					opacity: "1",
				})
				$(".text-2-3").delay(1200).animate({
					right:"8px",
					opacity: "1",
				})
				$(".text-3-1").animate({
					left:"1200px",
					opacity: "0",
				},1000)
				$(".text-3-2").animate({
					left:"1200px",
					opacity: "0",
				},1000)
				$(".text-3-3").animate({
					right:"-1000px",
					opacity: "0",
				},1000)

			}
			if(curPos==2){
				$(".text-3-1").delay(1200).animate({
					left:"111px",
					opacity: "1",
				})
				$(".text-3-2").delay(1200).animate({
					left:"110px",
					opacity: "1",
				})
				$(".text-3-3").delay(1200).animate({
					right:"34px",
					opacity: "1",
				})
				$(".text-1").animate({
					left:"160px",
				},200)
				$(".text-1").animate({
					left:"-1000px",
					opacity: "0",
				},800)
				$(".text-1-2").delay(500).animate({
					left:"-1000px",
					opacity: "0",
				},1000)
				$(".text-1-3").fadeOut(1000);
				$(".text-1-4").delay(800).animate({
					right:"2000px",
					opacity: "0",
				})
				$(".text-2-1").delay(600).animate({
					left:"120px",
				},400)
				$(".text-2-1").animate({
					left:"1200px",
					opacity: "0",
				},1000)
				$(".text-2-2").delay(600).animate({
					left:"120px",
				},400)
				$(".text-2-2").animate({
					left:"1200px",
					opacity: "0",
				},1000)
				$(".text-2-3").animate({
					right:"80px",
				},400)
				$(".text-2-3").animate({
					right:"-1000px",
					opacity: "0",
				},1000)
			
			}
		})

	},
	//他们走在微信支付的前沿
	lfetBtn:$(".left"),
	rightBtn:$(".right"),
	width:$(".demo ul").width(),
	divNode:$(".demo div"),
	btnonclick:function(){
		var that=this;
		
		that.rightBtn.click(function(){
			$(".demo ul").last().css("marginLeft",-that.width+"px");
			$(".demo ul").last().prependTo(that.divNode);
			$(".demo ul").first().animate({
				marginLeft:"0px"
			})
		})
		that.lfetBtn.click(function(){
			$(".demo ul").first().animate({
				marginLeft:-that.width+"px"
			},function(){

				$(this).appendTo(that.divNode);
				$(this).css("marginLeft","0px")
			})
		})
	},
	//他们走在微信支付的前沿结束
	//招聘信息
	newsClick:function(){
		$(".news li em").click(function(){
			$(this).toggleClass('bg');
			$(this).siblings('p').slideToggle();
		})
	},
	//渠道代理
	aBtnClick:function(){
		$(".abtn a").first().click(function(){	
				$(".agent-list").show();
				$(".agent-list-2").hide();
		})
		$(".abtn a").last().click(function(){	
				$(".agent-list-2").show();
				$(".agent-list").hide();
		})

	},
	//登录//
	login:function(){
		$(".deng").click(function(){
			$(".loginMain").slideDown();
		})
		$(".login-x").click(function(){
			$(".loginMain").slideUp("slow");
		})
	},
	init:function(){
		var that=this;
		that.moveLi();
		that.btnonclick();
		that.newsClick();
		that.flash();
		that.login();
		that.aBtnClick();
	}
}
josn.init();