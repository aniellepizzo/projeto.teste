$(function(){
    
    $(window).on("load",function(){
                
                $(".row.videos").mCustomScrollbar("destroy");
        
				$("button.mais").click(function(e){
                    e.preventDefault();
					var $this=$(this),
						rel=$this.attr("rel"),
						el=$(".row.videos"),
						output=$("#info > p code");
                    
                    switch(rel){
						case "toggle-destroy":
							if(el.hasClass("mCS_destroyed")){
                                el.addClass("open");                                
								el.mCustomScrollbar();
								output.text("$(\".content\").mCustomScrollbar();");
							}else{
								el.mCustomScrollbar("destroy");
								output.text("$(\".content\").mCustomScrollbar(\"destroy\");");
                                el.removeClass("open");

							}
							break;
                            
                    }

                    



				});
        });
    
});