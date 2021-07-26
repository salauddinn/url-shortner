const express=require('express');
const app = express();
const mongoose=require('mongoose');
const ShortUrl=require("./models/shorturl");

mongoose.connect("mongodb://localhost/urlShortner",{
    useNewUrlParser:true ,useUnifiedTopology:true
})
app.use(express.urlencoded({extends: false}))
app.set('view engine','ejs');

app.get("/",async(req,res)=>{
   const shorturls = await ShortUrl.find();
    res.render('index',{shortUrls:shorturls})
})
app.post('/shortUrls',async (req,res)=>{
await ShortUrl.create({full:req.body.fullUrl})
res.redirect('/')
})
app.get('/:short',async (req,res)=>{
const shortUrl = await ShortUrl.findOne({short:req.params.short});
console.log("")
await shortUrl.clicks++;
shortUrl.save();
res.redirect(shortUrl.full);

})
app.listen(process.env.port || 8080)

