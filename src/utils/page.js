$(function(){
    getData(1);
    //获取总的页码数
    $.get('http://wwtliu.com/sxtstu/blueberrypai/getBlueBerryJamInfo.php?blueBerryjam_id='+1,function(data){
        var total=data.maxPage;
        insertHtml(total,1);
        bind(total);
    })
    

    //total:总的页数，current：选择的页码
    function insertHtml(total,current){
        //获取元素,首先清空里面的内容
        var page=$(".ts-page").html('');
        //判断选中的页码数，页码数大于1显示首页和上一页
        if(current>1){
            page.append('<span class="before-page"><上一页</span>');
        }else{
            page.remove(".ts-start");
            page.append('<span class="before-page ts-disable">上一页</span>');
        }
        //显示开始的点点
        if(current>3){
            page.append('<span>...</span>');
        }
        //显示页码数,定义开始的和结束的页码数
        var start=current-2;
        var end=current+2;
        //当current=2的时候，start=0；不满足条件
        if(current==2||current==1){
            start=1;
            end=total<5?total:5;
        }else if(current==total-1){
            start=current-3;
            end=total;
        }else if(current==total){
            start=current-4;
            end=total;
        }
        //因为不知道从哪一页开始，所以初始条件不写
        //当current=5=total-1的时候，显示数据为 2,3,4,5,6；current=6=total的时候，显示数据为2,3,4,5,6
        for(;start<=end;start++){
            if(start==current){
                page.append('<span class="ts-select">'+start+'</span>');
            }else{
                page.append('<span class="page">'+start+'</span>');
            }
        }
        //显示后面的点点,当总数大于5和当前选中的页码数小于total-2时显示后面的点点
        if(total>5&&current<total-2){
            page.append('<span class="ts-end">...</span>'); 
        }
        //显示下一页和尾页
        if(current>=1){
            if(current==total){
            page.append('<span class="back-page ts-disable">下一页></span>');
            page.remove(".ts-end");
        }else{
            page.append('<span class="back-page">下一页</span>'); 
        }          
        }
    }

    //点击事件
    function bind(total){
        var page=$(".ts-page");
        //给每一个页码绑定点击事件
        page.on("click",".page",function(){
            //获取当前点击的页码数
            var current=Number($(this).text());
            //调用方法实现分页效果
            insertHtml(total,current);
            getData(current);
        })
        //给上一页添加点击事件
        page.on("click",".before-page",function(){
            var current=Number($(this).siblings(".ts-select").text());
            if(current>1){
                insertHtml(total,current-1);
                getData(current-1);
            }
        })
        //给下一页添加点击事件
        page.on("click",".back-page",function(){
            var current=Number($(this).siblings(".ts-select").text());
            if(current<total){
                insertHtml(total,current+1);
                getData(current+1);
            }
        })
        //给首页添加点击事件
        page.on("click",".ts-start",function(){
            var current=Number($(this).siblings(".ts-select").text());
                insertHtml(total,1);
                getData(1);
        })
        //给尾页添加点击事件
        page.on("click",".ts-end",function(){
            var current=Number($(this).siblings(".ts-select").text());
                insertHtml(total,total);
                getData(total);
        })
    };

    //取分页数据
    function getData(current){
        $.ajax({
        type:'get',
        url:'http://wwtliu.com/sxtstu/blueberrypai/getBlueBerryJamInfo.php',
        data:{
            blueBerryjam_id:current,
        },
        dataType:'json',
        success:function(data){
            var url=JSON.stringify(data).replace(/iwen.wiki/ig,'wwtliu.com');
            data=JSON.parse(url);
            console.log(data.blueBerryJam);
            var str='';
             var div=$('<div></div>');
            for(var i=0;i<data.blueBerryJam.length;i++){
                str+='<a href="#">'+
                '<img src="'+data.blueBerryJam[i].img+'" alt=""/>'+
                '<i>'+data.blueBerryJam[i].title+'</i>'+
            '</a>';
            }
           div.html(str);
           $(".conntinue_box").html(div);
        }
    })
    }
})
    