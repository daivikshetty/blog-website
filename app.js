//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _=require("lodash");

const homeStartingContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Venenatis cras sed felis eget velit aliquet sagittis id. Vestibulum mattis ullamcorper velit sed ullamcorper. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. In hac habitasse platea dictumst. Nibh ipsum consequat nisl vel pretium lectus quam id. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Ullamcorper morbi tincidunt ornare massa eget. Nullam ac tortor vitae purus faucibus ornare suspendisse.Ac turpis egestas integer eget aliquet nibh praesent. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Diam donec adipiscing tristique risus nec feugiat in fermentum. Nunc lobortis mattis aliquam faucibus purus in massa tempor. Consectetur libero id faucibus nisl tincidunt eget nullam non. Cras pulvinar mattis nunc sed blandit libero volutpat. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Arcu felis bibendum ut tristique. Dignissim enim sit amet venenatis. Adipiscing vitae proin sagittis nisl rhoncus. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Morbi blandit cursus risus at ultrices mi. Turpis massa tincidunt dui ut ornare. Semper auctor neque vitae tempus.Nam aliquam sem et tortor consequat id porta. Amet purus gravida quis blandit turpis cursus in. A pellentesque sit amet porttitor eget dolor morbi. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Elit pellentesque habitant morbi tristique. Sollicitudin tempor id eu nisl nunc mi. Auctor eu augue ut lectus arcu bibendum. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Viverra orci sagittis eu volutpat odio facilisis mauris. Suspendisse ultrices gravida dictum fusce ut placerat. Vulputate enim nulla aliquet porttitor lacus luctus. Ridiculus mus mauris vitae ultricies leo integer malesuada. Facilisis volutpat est velit egestas. Pellentesque nec nam aliquam sem. Porttitor rhoncus dolor purus non. Aliquam ut porttitor leo a diam sollicitudin. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Nulla pharetra diam sit amet. Lectus vestibulum mattis ullamcorper velit sed ullamcorper.uam nulla porttitor massa id neque aliquam vestibulum morbi. Placerat duis ultricies lacus sed. Et netus et malesuada fames ac. Mi bibendum neque egestas congue. Enim ut sem viverra aliquet. Urna neque viverra justo nec ultrices dui sapien eget. Massa vitae tortor condimentum lacinia. Nullam ac tortor vitae purus. Fringilla ut morbi tincidunt augue. Sapien faucibus et molestie ac. Sed risus ultricies tristique nulla aliquet enim tortor at. Risus in hendrerit gravida rutrum quisque non. Duis tristique sollicitudin nibh sit amet commodo nulla. Vitae nunc sed velit dignissim sodales ut eu. Malesuada fames ac turpis egestas maecenas. Ac orci phasellus egestas tellus rutrum. Venenatis tellus in metus vulputate. Adipiscing elit ut aliquam purus sit amet luctus. Etiam erat velit scelerisque in dictum non consectetur a erat.Cursus turpis massa tincidunt dui ut. Id velit ut tortor pretium viverra suspendisse potenti. Sodales ut etiam sit amet. Quam id leo in vitae turpis massa sed. Risus at ultrices mi tempus. Tempor nec feugiat nisl pretium. Mauris vitae ultricies leo integer malesuada nunc vel. Ultrices eros in cursus turpis massa tincidunt dui. Quam lacus suspendisse faucibus interdum posuere lorem. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Auctor eu augue ut lectus arcu. At lectus urna duis convallis convallis tellus id.Commodo nulla facilisi nullam vehicula ipsum. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Etiam sit amet nisl purus in mollis nunc. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Sem viverra aliquet eget sit amet tellus cras adipiscing. Lacus vel facilisis volutpat est. Sit amet aliquam id diam maecenas. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Ut aliquam purus sit amet luctus venenatis. In nisl nisi scelerisque eu ultrices. Facilisis volutpat est velit egestas dui id ornare arcu odio. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus.Pharetra sit amet aliquam id diam maecenas. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. At quis risus sed vulputate odio. In egestas erat imperdiet sed euismod nisi porta. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Consequat mauris nunc congue nisi vitae suscipit tellus. Lacinia at quis risus sed. Vitae suscipit tellus mauris a diam maecenas sed. Purus in mollis nunc sed id semper risus. Porttitor lacus luctus accumsan tortor. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Ullamcorper morbi tincidunt ornare massa eget.Consectetur purus ut faucibus pulvinar elementum. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Nec feugiat in fermentum posuere urna. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. Ut tortor pretium viverra suspendisse. Sagittis vitae et leo duis ut diam. Sit amet risus nullam eget felis. Mollis nunc sed id semper risus in hendrerit gravida rutrum. Felis imperdiet proin fermentum leo vel. Varius morbi enim nunc faucibus a. Non diam phasellus vestibulum lorem sed risus. Non enim praesent elementum facilisis leo.Volutpat diam ut venenatis tellus in metus. Vehicula ipsum a arcu cursus vitae. In vitae turpis massa sed elementum tempus. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Sit amet nisl suscipit adipiscing bibendum. Sit amet luctus venenatis lectus magna. Gravida dictum fusce ut placerat orci nulla pellentesque. Donec ac odio tempor orci dapibus. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. At quis risus sed vulputate odio ut enim blandit volutpat. Cras ornare arcu dui vivamus. Tempor orci eu lobortis elementum nibh tellus molestie nunc.Vel quam elementum pulvinar etiam non. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Cras sed felis eget velit aliquet sagittis id consectetur purus. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Etiam tempor orci eu lobortis. Commodo elit at imperdiet dui accumsan sit amet nulla. Et leo duis ut diam quam nulla. Adipiscing elit pellentesque habitant morbi. Ac ut consequat semper viverra nam libero justo. Mattis ullamcorper velit sed ullamcorper morbi. Arcu odio ut sem nulla pharetra diam sit. Sem viverra aliquet eget sit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Vitae semper quis lectus nulla. Quisque id diam vel quam elementum pulvinar etiam. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in. Semper quis lectus nulla at volutpat. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci."
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
const server=5500;        //runs on server 3000 only
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts=[];

app.get("/",function(req,res){
  // sendTitle=_.lowerCase(content.)
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
  // console.log(content.title); 

  // let reply=_.lowerCase(content.title);
  // console.log(reply);

  posts.push(content);
  res.redirect("/");
})

app.get("/posts/:postName",function(req,res){
  let str=_.lowerCase(req.params.postName);
  
  for(var i=0;i<posts.length;i++){

    if(str===_.lowerCase(posts[i].title)){
        res.render("post",{
          addTitle:posts[i].title,
          addContent:posts[i].contentBody
        })
    }
  }
});



app.listen(server, function() {
  console.log("Server started on port 3000");
});
