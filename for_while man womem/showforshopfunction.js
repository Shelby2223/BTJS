function listproduct(){
    products.forEach(value =>{
        if (value.id%2==0){
            var demo = '<div class="col-3">';
            demo += '<div class="card" style="with:18rem;">';
            demo += '<img class="card-img-top" src="'+value.Image+'style="height:200px;">';
            demo += '<div class="card-body">';
            demo += '<h5 class="card-title">'+value.name+'</h5>';
            if(value.oldprice>value.price){
                demo += '<p class="card-text"><del>'+value.oldprice+' </del>'+value.price+'</p>';
            } else if (value.oldprice<=value.price){
                demo += '<p class="card-text">'+value.price+'</p>';  
            };
            demo += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
            demo += '</div>';
            demo += '</div>';
            demo += '</div>';
            document.getElementById("banchay").innerHTML+=demo;
        } else if (value.id%2==1){
            var demo1 = '<div class="col-3">';
            demo1 += '<div class="card" style="with:18rem;">';
            demo1 += '<img class="card-img-top" src="'+value.Image+'style="height:200px;">';
            demo1 += '<div class="card-body">';
            demo1 += '<h5 class="card-title">'+value.name+'</h5>';
            if(value.oldprice>value.price){
                demo1 += '<p class="card-text"><del>'+value.oldprice+' </del>'+value.price+'</p>';
            } else if (value.oldprice<=value.price){
                demo1 += '<p class="card-text">'+value.price+'</p>';
            };
            demo1 += '<a href="#" class="btn btn-primary" onclick="order()">Đặt mua</a>';
            demo1 += '</div>';
            demo1 += '</div>';
            demo1 += '</div>';
            document.getElementById("noibat").innerHTML+=demo1;
        }                  
    })
};
function order(){
    alert("Đặt mua thành công");
};