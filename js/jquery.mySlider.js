// JavaScript Document
(function($){
 $.fn.mySlider=function(options){
	var settings=$.extend({
		autoPlay:false,
		interval:3000,
		speed:400,
		direction:'ltr'
		},options||{})
	var current=0;
	var content=$(this);
	var SlElement=content.find(".slider");
	var items=SlElement.find("ul");
	var group=items.length;
	var next=$(".next");
	var pre=$(".pre");
	var slider={
		init:function(){
			timer="";
		  if(items.length>1){
			SlElement.css({
				'width':1240*(group+2)+"px",
				'margin-left':-1240+"px",
				'left':0
				});
			items.css({
				'float':'left',
				'width':1240+"px"
				});	
			 SlElement.html(items.slice(0).clone());
			 SlElement.append(items.slice(0,1).clone());
			 SlElement.prepend(items.slice(-1).clone());
		  }
			},
		animate:function(num){
			var _this=this;
			SlElement.animate({
				left:-num*1240+"px"
				},settings.speed,function(){
					if (num<0){
						current=group-1;
						SlElement.css('left',-(group-1)*1240+'px');
						}else if(num>=group){
							current=0;
							SlElement.css('left',00);
							}else {
								current=num;
								}
					})
			},
		  toNext: function(e) {
                current = current + 1;
                this.animate(current);
				
            },
            toPrev: function(e) {
                current = current - 1;
                this.animate(current);
				
            }
		};
	
	 slider.init();
	 next.on("click",function(event){
     slider.toNext();
	 event.stopPropagation()
        })
        pre.on("click",function(event){
            slider.toPrev();
			event.stopPropagation()
        })
	//SlElement.find("img").hover(function(){
		//$(this).addClass("bounceIn "+"animated")},
		//function(){$(this).removeClass()})
       // return this;
		
		
	 }	
})(jQuery)