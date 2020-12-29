var cityList = new Array();
cityList['北京市'] = ['朝阳区', '东城区', '西城区', '海淀区', '宣武区', '丰台区', '怀柔', '延庆', '房山'];
cityList['上海市'] = ['宝山区', '长宁区', '丰贤区', '虹口区', '黄浦区', '青浦区', '南汇区', '徐汇区', '卢湾区'];
cityList['广州省'] = ['广州市', '惠州市', '汕头市', '珠海市', '佛山市', '中山市', '东莞市'];
cityList['深圳市'] = ['福田区', '罗湖区', '盐田区', '宝安区', '龙岗区', '南山区', '深圳周边'];
cityList['重庆市'] = ['俞中区', '南岸区', '江北区', '沙坪坝区', '九龙坡区', '渝北区', '大渡口区', '北碚区'];
cityList['天津市'] = ['和平区', '河西区', '南开区', '河北区', '河东区', '红桥区', '塘古区', '开发区'];
cityList['江苏省'] = ['南京市', '苏州市', '无锡市'];
cityList['浙江省'] = ['杭州市', '宁波市', '温州市'];
cityList['四川省'] = ['四川省', '成都市'];
cityList['海南省'] = ['海口市'];
cityList['福建省'] = ['福州市', '厦门市', '泉州市', '漳州市'];
cityList['山东省'] = ['济南市', '青岛市', '烟台市'];
cityList['江西省'] = ['江西省', '南昌市'];
cityList['广西省'] = ['柳州市', '南宁市'];
cityList['安徽省'] = ['安徽省', '合肥市'];
cityList['河北省'] = ['邯郸市', '石家庄市'];
cityList['河南省'] = ['郑州市', '洛阳市'];
cityList['湖北省'] = ['武汉市', '宜昌市'];
cityList['湖南省'] = ['湖南省', '长沙市'];
cityList['陕西省'] = ['陕西省', '西安市'];
cityList['山西省'] = ['山西省', '太原市'];
cityList['黑龙江省'] = ['黑龙江省', '哈尔滨市'];
cityList['其他'] = ['其他'];
//选择省份以后，在城市下拉框中添加对应的城市
function changeCity(){
    var province = document.getElementById("selProvince").value;
    var city = document.getElementById("selCity");
    console.log(city);
    city.innerHTML = "";//先清空再赋值
    for (var i in cityList) {
        if(i==province){
            city.add(new Option("--选择省份--"));
            for(var j in cityList[i]){
                city.add(new Option(cityList[i][j],cityList[i][j],""));
            }
        }
    }
}

//加载页面时候添加省份下拉框里面的信息
function addProvince(){
    var province = document.getElementById("selProvince");
    for (var i in cityList) {
        province.add(new Option(i,i,""));
    }
}
function checkemail(){
    var regstr = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; //^匹配开始 $匹配结束,2到4位汉字
    var namestr = document.regform.Email.value;
    if(!regstr.test(namestr)){
        x = document.getElementById("erroremail").innerHTML="邮箱格式必须是xxx@xxx.com";
        return false;
    }
    x=document.getElementById("erroremail").innerHTML="格式正确";
    return true;
}
function checkpass(){
    var regstr = /^\w{6,8}$/;//  ^匹配开始 $匹配结束   \w表示数字字母下划线
    var passstr = document.regform.Password.value;
    if(!regstr.test(passstr)){
        document.getElementById("errorpwd").innerHTML="必须是6-8位数字,字母或下划线";
        return false;
    }
    document.getElementById("errorpwd").innerHTML="格式正确";
    return true;
}
function checkpass2(){

    var passstr = document.regform.Password.value;
    var passstr2 = document.regform.C_Password.value;
//      alert("fds");
    if(passstr==passstr2){
        document.getElementById("errorpwd2").innerHTML="格式正确";
        return true;
    }

    document.getElementById("errorpwd2").innerHTML="两次密码输入不一致";
    return false;
}
function checkForm(){
    if(checkname()&&checkpass()&&checkpass2())
        return true;
    return false;
}
window.onload=addProvince;
