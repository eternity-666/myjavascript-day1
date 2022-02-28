var imgs = document.querySelectorAll('img');
for(var i = 0;i < imgs.length; i++){
    imgs[i].onclick =function(){
        document.body.style.backgroundImage = 'url('+this.src+')';
    }
}