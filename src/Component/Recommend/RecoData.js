const recoData = [
  {
    "id": "0001",
    "name": "T-shirts with multiple",
    "img": "https://i.ibb.co/pz0yz6f/1.png",
    "price": 19.99,
    "cheta1": "color,for men",
    "cheta2": "value2",
    comment: [
      { user: "fashionista", text: "Love the variety of colors available!" },
      { user: "shopaholic", text: "Great value for stylish t-shirts!" },
      { user: "casualwear", text: "Perfect for everyday wear!" },
      { user: "comfortlover", text: "Soft and comfortable material!" },
      { user: "stylishguy", text: "Awesome addition to my wardrobe!" }
    ]
  },
  {
    "id": "0002",
    "name": "Jeans shorts for men",
    "img": "https://i.ibb.co/d6Xx1ry/7.png",
    "price": 29.99,
    "cheta1": "blue color",
    "cheta2": "value2",
    comment: [
      { user: "summerlover", text: "Perfect for summer outings!" },
      { user: "beachbum", text: "Comfortable and stylish beachwear!" },
      { user: "fashionforward", text: "Great fit and quality material!" },
      { user: "casualwear", text: "Ideal for casual days out!" },
      { user: "jeansfanatic", text: "Love the denim fabric and design!" }
    ]
  },
  {
    "id": "0003",
    "name": "Brown winter coat",
    "img": "https://i.ibb.co/p48H2v0/2-1.png",
    "price": 39.99,
    "cheta1": "medium size",
    "cheta2": "value2",
    comment: [
      { user: "winterlover", text: "Keeps me warm and cozy during winter!" },
      { user: "fashionista", text: "Stylish coat for cold weather!" },
      { user: "outdooradventurer", text: "Great for outdoor activities in winter!" },
      { user: "qualityconscious", text: "Excellent quality and craftsmanship!" },
      { user: "stylishguy", text: "Love the color and fit of this coat!" }
    ]
  },
  {
    "id": "0004",
    "name": "jeans bag for travel",
    "img": "https://i.ibb.co/zV4M0RR/5.png",
    "price": 24.99,
    "cheta1": "for men",
    "cheta2": "value2",
    comment: [
      { user: "traveler", text: "Spacious bag for all my travel essentials!" },
      { user: "adventurer", text: "Durable and reliable for all my adventures!" },
      { user: "stylishtraveler", text: "Looks stylish and functional for travel!" },
      { user: "organizer", text: "Great compartments for organization!" },
      { user: "frequentflyer", text: "Perfect carry-on bag for flights!" }
    ]
  },
  {
    "id": "0005",
    "name": "Leather wallet",
    "img": "https://i.ibb.co/BNfPmk8/6.png",
    "price": 49.99,
    "cheta1": "",
    "cheta2": "value2",
    comment: [
      { user: "leatherlover", text: "High-quality leather wallet with a classy look!" },
      { user: "stylishguy", text: "Perfect accessory for a sophisticated look!" },
      { user: "durabilityconscious", text: "Durable construction for long-lasting use!" },
      { user: "organized", text: "Keeps my cards and cash organized!" },
      { user: "fashionforward", text: "Matches well with any outfit!" }
    ]
  },
  {
    "id": "0006",
    "name": "Jeans Pant",
    "img": "https://i.ibb.co/7JFp5mH/4.png",
    "price": 14.99,
    "cheta1": "Color available",
    "cheta2": "value2",
    comment: [
      { user: "jeanslover", text: "Classic jeans pant with a comfortable fit!" },
      { user: "casualstyle", text: "Great for casual everyday wear!" },
      { user: "fashionable", text: "Versatile pant that goes well with any top!" },
      { user: "comfortlover", text: "Soft denim fabric for all-day comfort!" },
      { user: "styleconscious", text: "Love the style and affordability of these jeans!" }
    ]
  },
  {
    "id": "0007",
    "name": "Headset for gaming",
    "img": "https://i.ibb.co/XjVm6XG/9.png",
    "price": 12.99,
    "cheta1": "with mic",
    "cheta2": "value2",
    comment: [
      { user: "gamer", text: "Great sound quality for gaming sessions!" },
      { user: "comfortgamer", text: "Comfortable to wear for long gaming sessions!" },
      { user: "competitivegamer", text: "Enhances my gaming experience with clear audio!" },
      { user: "multitasker", text: "Perfect for gaming and video calls with the mic!" },
      { user: "valueconscious", text: "Affordable headset with good performance!" }
    ]
  },
  {
    "id": "0008",
    "name": "Jeans bag for travel",
    "img": "https://i.ibb.co/zV4M0RR/5.png",
    "price": 24.99,
    "cheta1": "",
    "cheta2": "value2",
    comment: [
      { user: "traveler", text: "Spacious bag for all my travel essentials!" },
      { user: "adventurer", text: "Durable and reliable for all my adventures!" },
      { user: "stylishtraveler", text: "Looks stylish and functional for travel!" },
      { user: "organizer", text: "Great compartments for organization!" },
      { user: "frequentflyer", text: "Perfect carry-on bag for flights!" }
    ]
  },
  {
    "id": "0009",
    "name": "Water Pot",
    "img": "https://i.ibb.co/gD6ZdPW/10.png",
    "price": 29.99,
    "cheta1": "Only 4 left",
    "cheta2": "value2",
    comment: [
      { user: "naturelover", text: "Perfect for outdoor adventures and camping trips!" },
      { user: "hiker", text: "Lightweight and portable for hikes!" },
      { user: "environmentalist", text: "Reusable alternative to single-use plastic bottles!" },
      { user: "outdoorenthusiast", text: "Convenient way to stay hydrated on the go!" },
      { user: "waterlover", text: "Great capacity for carrying water during workouts!" }
    ]
  },
  {
    "id": "0010",
    "name": "Soil Pot",
    "img": "https://i.ibb.co/yBpqd2D/3.png",
    "price": 34.99,
    "cheta1": "",
    "cheta2": "value2",
    comment: [
      { user: "gardener", text: "Perfect for planting herbs and small plants!" },
      { user: "plantlover", text: "Ideal for indoor gardening and decorating!" },
      { user: "greenthumb", text: "Durable pot for nurturing plant growth!" },
      { user: "environmentalist", text: "Eco-friendly option for planting!" },
      { user: "natureenthusiast", text: "Love the natural look and feel of these pots!" }
    ]
  }
];

export default recoData;
