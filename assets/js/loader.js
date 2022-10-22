document.getElementById("header").innerHTML = "\<base href=\"\" target=\"_parent\"\> \<h1\>\<a href=\"../index.html\" style=\"font-family:ZoomlaCarved;font-weight:100; font-size:2em;\"\>学浅工作室\</a\>\</h1\> \<nav class=\"links\"\> \<ul\> \<li\>\<a href=\"#\"\>个人简历\</a\>\</li\> \<li\>\<a href=\"#\"\>学术成果\</a\>\</li\> \<li\>\<a href=\"#\"\>影集分享\</a\>\</li\> \<li\>\<a href=\"#\"\>学习笔记\</a\>\</li\> \<li\>\<a href=\"./aboutTheStudio.html\"\>关于学浅\</a\>\</li\> \</ul\> \</nav\> \<nav class=\"main\"\> \<ul\> \<li class=\"search\"\> \<a class=\"fa-search\" href=\"#search\"\>Search\</a\> \<form id=\"search\" method=\"get\" action=\"#\"\> \<input type=\"text\" name=\"query\" placeholder=\"Search\" /\> \</form\> \</li\> \<li class=\"menu\"\> \<a class=\"fa-bars\" href=\"#menu\"\>Menu\</a\> \</li\> \</ul\> \</nav\> ";

let reader = new FileReader(); // 新建一个FileReader
reader.readAsText("../../htmls/header.html", "UTF-8"); // 读取文件，file 为要获取的文件，自己获取
reader.onload = evt => { // 读取完文件之后会回来这里
    let fileString = evt.target.result; // 读取文件内容
    console.log(fileString)
}
