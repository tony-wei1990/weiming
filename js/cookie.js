//设置cookie
function setCookie(key, value, days, flag)
{
    var date = new Date();
    date.setDate(date.getDate() + days);
    if (flag) 
    {
        document.cookie = key + "=" + encodeURI(value) + ";expires=" + date + ";path=/";
    } 
    else
    {
        document.cookie = key + "=" + encodeURI(value) + ";expires=" + date;
    }

}
//获取cookie
function getCookie(key) 
{
    var cookies = decodeURI(document.cookie);
    var cookieList = cookies.split(";");
    for (var i = 0; i < cookieList.length; i++) 
    {
        var str = cookieList[i];
        var list = str.split("=");
        var Key = list[0].replace(" ", "");
        var Value = list[1];
        if (Key == key) 
        {
            return Value;
        }
    }
}
//让所有的cookie失效的函数
function removeCookieById(id) 
{
	var detailList = ["goodsid", "goodsName", "goodsDesc", "goodsPic", "goodsNum", "goodsPrice"];
	for (var i = 0; i < detailList.length; i++)
	{
        setCookie(detailList[i] + "_" + id, "", -1);
    }
}