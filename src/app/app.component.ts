import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to the Nintendo Game Store!';
  games = [
    {name:"Mario Kart 8",price:250, release: "28/04/2017", image:"https://upload.wikimedia.org/wikipedia/en/b/b5/MarioKart8Boxart.jpg"},
    {name:"The Sim City",price:100, release: "08/07/1993",image:"https://eaassets-a.akamaihd.net/origin-com-store-final-assets-prod/182555/PACKART_PRESET_LARGE_JPG_231x326/71480_LB_231_%5E_2012-12-11-15-22-07_855a1c429d099b6d5cf8c47259cd204d340d4e744f5837d193e39f180184d5ee.jpg"},
    {name:"Minecraft",price:120, release: "04/08/2006", image: "https://lh3.googleusercontent.com/30koN0eGl-LHqvUZrCj9HT4qVPQdvN508p2wuhaWUnqKeCp6nrs9QW8v6IVGvGNauA=w300"},
    {name:"Sonic Mania",price:200, release: "18/07/2002", image: "https://upload.wikimedia.org/wikipedia/en/d/d2/Sonic_Mania_%28artwork%29.jpg" },
    {name:"Splatoon 2",price:110, release: "21/04/2012", image: "https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_Splatoon2.jpg"},
    {name:"Ultra Street Fighter",price:220, release: "31/07/2003", image: "http://www.allkeyshop.com/blog/wp-content/uploads/buy-ultra-street-fighter-2-the-final-challengers-cd-key-pc-download-img1.jpg"},
  ];
  carts = [ {name:"",price:"" } ];
  billings = [ { } ];
  AddtoCart(game, price)
  {
      var var1 = game;
      var var2 = price;
      console.log(var1, var2);
      this.carts.push({name: var1, price: var2});
      console.log(this.carts.toLocaleString.name);
  }
  Checkout()
  {
      var var1 = "Total";
      var sum = 0;
     for (var i=0; i<this.carts.length; i++)
      {
          var price =  this.carts[i].price;
          sum = sum + Number(price);
      }
     this.billings.push({ price: sum});
  }
}
