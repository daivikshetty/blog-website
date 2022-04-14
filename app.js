//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt id aliquet risus feugiat in ante. Purus faucibus ornare suspendisse sed nisi lacus sed. Proin nibh nisl condimentum id venenatis a. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed. Porttitor leo a diam sollicitudin tempor id eu nisl nunc. Quam quisque id diam vel quam elementum. Nisi quis eleifend quam adipiscing vitae proin sagittis. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Eu nisl nunc mi ipsum faucibus. Sit amet massa vitae tortor.Amet nulla facilisi morbi tempus iaculis urna id volutpat. At urna condimentum mattis pellentesque. Porta nibh venenatis cras sed felis eget. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Augue lacus viverra vitae congue. Nulla aliquet porttitor lacus luctus accumsan tortor. Molestie at elementum eu facilisis sed odio morbi quis. Orci sagittis eu volutpat odio. Quis eleifend quam adipiscing vitae proin sagittis nisl. In cursus turpis massa tincidunt dui ut. Egestas maecenas pharetra convallis posuere morbi. Aliquam vestibulum morbi blandit cursus. Mus mauris vitae ultricies leo integer malesuada. Bibendum ut tristique et egestas. Ultricies leo integer malesuada nunc vel risus commodo viverra. Massa tincidunt nunc pulvinar sapien et ligula. At in tellus integer feugiat.In arcu cursus euismod quis. Mauris rhoncus aenean vel elit. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Quis ipsum suspendisse ultrices gravida dictum fusce. Ultrices in iaculis nunc sed augue. Enim praesent elementum facilisis leo vel fringilla est. Porta non pulvinar neque laoreet suspendisse interdum. Enim lobortis scelerisque fermentum dui faucibus in. Tellus at urna condimentum mattis. Amet mattis vulputate enim nulla. Est ultricies integer quis auctor elit sed vulputate mi. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Duis ut diam quam nulla. Quis hendrerit dolor magna eget est lorem. Praesent tristique magna sit amet purus gravida. Ipsum faucibus vitae aliquet nec.Lobortis elementum nibh tellus molestie nunc. Egestas congue quisque egestas diam in arcu. Euismod in pellentesque massa placerat duis. Laoreet non curabitur gravida arcu ac. At augue eget arcu dictum varius. Nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Odio tempor orci dapibus ultrices. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Mauris sit amet massa vitae. Mi quis hendrerit dolor magna eget est lorem. Bibendum enim facilisis gravida neque convallis a cras. Porttitor eget dolor morbi non arcu risus quis varius. Enim ut sem viverra aliquet eget. Sit amet consectetur adipiscing elit. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Suspendisse interdum consectetur libero id faucibus nisl. Iaculis nunc sed augue lacus viverra vitae. Vulputate ut pharetra sit amet aliquam id. Ultrices sagittis orci a scelerisque purus semper eget duis at. Nunc sed blandit libero volutpat sed.Mi sit amet mauris commodo quis imperdiet. Netus et malesuada fames ac. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit. Sagittis eu volutpat odio facilisis mauris sit amet. Eu nisl nunc mi ipsum faucibus vitae aliquet nec. At in tellus integer feugiat scelerisque. Convallis aenean et tortor at risus viverra. Aliquam etiam erat velit scelerisque in. Praesent tristique magna sit amet purus gravida quis blandit. Morbi non arcu risus quis varius quam quisque id diam. In fermentum posuere urna nec. Justo eget magna fermentum iaculis. Non tellus orci ac auctor augue mauris augue neque gravida. Sem et tortor consequat id. Donec massa sapien faucibus et molestie ac. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Tellus integer feugiat scelerisque varius morbi enim. Velit laoreet id donec ultrices. Auctor neque vitae tempus quam pellentesque nec nam.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
const server=3000;        //runs on server 3000 only
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts=[];

app.get("/",function(req,res){
  res.render("home",{
    postContent:homeStartingContent,
    newPosts:posts
  })
});

app.post("/",function(req,res){
  
});

app.get("/about",function(req,res){
  res.render("about",{
      about:aboutContent
  })
})

app.post("/about",function(req,res){

})

app.get("/contact",function(req,res){
  res.render("contact",{
      contact:contactContent
  })
})

app.post("/contact",function(req,res){
  
})

app.get("/compose",function(req,res){
  res.render("compose",{
  })
})

app.post("/compose",function(req,res){
  const content={
    title:req.body.composeTitle,
    contentBody:req.body.composeAddContent
  };
  posts.push(content);
  res.redirect("/");
})



app.listen(server, function() {
  console.log("Server started on port 3000");
});
