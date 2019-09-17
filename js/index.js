	$("#box ul li").hover(function(){
		$(this).stop().animate({//执行 CSS 属性集的自定义动画
			"width": "1024px"//展开的宽度
		},1000).siblings().stop().animate({//siblings匹配集合中每个元素的同胞，及是同级函数
			"width": "20px"
		},1000);
		$(this).find("p").stop().animate({//查找当前元素的子标签
			"height": "40px",
			"line-height": "40px"
		},1000);
	},function(){
		$("#box ul li").stop().animate({
			"width": "103px"//单图片的宽度
		},1000);
		$(this).find("p").stop().animate({
			"height": "600px",
			"line-height": "600px"
		},1000);
	});