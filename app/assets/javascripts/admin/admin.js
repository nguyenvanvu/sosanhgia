;(function($){
	$.fn.Dashboard = function(){};

	$.fn.Dashboard.init = function(){
		$.fn.Dashboard.listPost();
		$.fn.Dashboard.Action();

		
	};

	$.fn.Dashboard.listPost = function(){
		var table = $('#tblex').dataTable( {
	    	"ajax" : base_url + "posts",
	    	"columns": [
	            { "data": "title" },
	            { "data": "date" },
	            { 
	            	"data": function(data, type, full){
	            		return data.category + '&nbsp<a href="' + base_url + 'categories/' + data.category_id + "?load_edit=true" 
		            				+ '" class="editor_edit fancybox fancybox.ajax" data-id = "'  + data.category_id 
		            				+ '"><u>Edit</u></a>';
	            	}
	            },
	            {
	            	"data": function (data, type, full) {
	            		if (data.title)
		            		return '<a href="' + base_url + 'posts/' + data.id + "?load_edit=true" 
		            				+ '" class="editor_edit fancybox fancybox.ajax" data-id = "'  + data.id 
		            				+ '">Edit</a> / <a data-id=' + data.id + '   href="" class="editor_remove confirm">Delete</a>' 
		            				+ '/ <a target = "_blank" href="' + base_url + 'posts/' + data.id +'" class="fancybox action_view">View</a>';
	            		else return '';
	            	},
                	className: "center"
            	},



        	],
        	"order": [[ 1, "desc" ]], 
        	searching: false,
        	"fnDrawCallback":function(){
        		
        		var confirm_delete = $(".confirm").confirm({
				    text: "Are you sure you want to delete that post?",
				    title: "Confirmation required",
				    confirm: function(button) {
				    	var id = confirm_delete.attr('data-id');
				        $.fn.Dashboard.deletePost(id);

				    },
				});
        	}
	    } ).rowGrouping({	iGroupingColumnIndex: 2,
							sGroupBy: "category",
							fnGroupLabelFormat: function(label){
								return label  ;
							} ,
							bHideGroupingColumn: true,
							bExpandableGrouping: true,}); 
	};

	$.fn.Dashboard.editPost = function(id , title, content , description, category){
		$.ajax({
				type : "PUT",
				url :  base_url +  "posts/" + id,
				data : {
					'title': title,
					'content': content,
					'description' : description,
					'category' : category
				},
				success:function(resp){
					$.fancybox.close();
					location.reload(); 
				}
		});
	};

	$.fn.Dashboard.deletePost = function(id){
		$.ajax({
				type : "DELETE",
				url :  base_url +  "posts/" + id,
				data : {
				},
				success:function(resp){
					location.reload(); 
				}
		});
	};

	$.fn.Dashboard.addPost = function(title, content, description, category, image){
		var formdata = new FormData();
		formdata.append("userfile",image);
		formdata.append("title", title);
		formdata.append("content", content);
		formdata.append("description", description);
		formdata.append("category", category);
		$.ajax({
				type : "POST",
				url :  base_url +  "posts/",
				data : formdata,
				contentType: false,
				processData: false,
				dataType:'json'
		}).always(function() {
			$.fancybox.close();
			location.reload(); 
		});
	};

	$.fn.Dashboard.addCategories = function(title){
		$.ajax({
				type : "POST",
				url :  base_url +  "categories/",
				data : {
					'title': title,
				}
		}).always(function() {
			$.fancybox.close();
			location.reload(); 
		});
	};

	$.fn.Dashboard.editCategories = function(id, title){
		$.ajax({
				type : "PUT",
				url :  base_url +  "categories/" + id,
				data : {
					'title': title,
				}
		}).always(function() {
			$.fancybox.close();
			location.reload(); 
		});
	};

	$.fn.Dashboard.Action = function(){
		$("a.fancybox").fancybox({
			maxWidth    : 800,
			maxHeight    : 600,
			fitToView    : false,
			width        : '100%',
			height        : '100%',
			
			
			autoSize    : true,
			closeClick    : false,
			openEffect    : 'none',
			closeEffect    : 'none',
			beforeShow   : function() {
    			$('.summernote').summernote({
    				 height: 400,
    			});

    			$("#btn_update").click(function(){
    				var title = $("#title").val();
    				var content = $(".summernote").code();
    				var description = $("#description").val();
    				var category = $("#category").val();
    				var id = $(".form-horizontal").attr('data-id');
					$.fn.Dashboard.editPost(id, title,  content, description, category);
				});
				$("#btn_add").click(function(){
    				var title = $("#title").val();
    				var content = $(".summernote").code();
    				var description = $("#description").val();
    				var category = $("#category").val();
    				var image =  $("input[type=file]")[0].files[0];
					$.fn.Dashboard.addPost(title,  content, description, category, image);
				});
				$("#btn_add_categories").click(function(){
    				var title = $("#title").val();
					$.fn.Dashboard.addCategories(title);
				});
				$("#btn_edit_categories").click(function(){
    				var title = $("#title").val();
    				var id = $(".form-horizontal").attr('data-id');
					$.fn.Dashboard.editCategories(id ,title);
				});
				$("select option").filter(function() {
				    //may want to use $.trim in here
				    return $(this).val() ==  $(".form-horizontal").attr('data-category-id'); 
				}).prop('selected', true);

  			},
		});
	}


})(jQuery);