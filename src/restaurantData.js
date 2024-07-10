const min = 1,
  max = 5;
const random = () => (Math.random() * (max - min) + min).toFixed(1);

const data = [
  {
    id: 0,
    name: "Water can",
    rating: random(),
    average_cost: 350,
    average_time: 41,
    cuisines: ["clean", " pure Hydration ", " Less Cost", " Quality Service"],
    img_url:
      "https://5.imimg.com/data5/VS/FW/MY-25468795/551a4ab4b79981427786420pure-drinking-water-500x500.jpg",
    veg: false,
    
    items: [
      {
        id: 1,
        category: "Recommended",
        name: "Wednesday Strips Cane",
        price: 350.48,
        litre: 20,
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPfgHTC8_l7R-q4GCibYMxBi62Xfp6_t248V6rR_MPW9VeZ1qAIbxKt_pIaP8vvuKI3w&usqp=CAU",
        veg: false,
        best_seller: false,
      },
      {
        id: 2,
        category: "Recommended",
        name: "Wednesday Cane",
        price: 699.05,
        description:
          "Flat 39% off on this water cane",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57HSvagNhjTCWuRcdWhdRGSJq-E97fYnSmw&s",
        veg: false,
        best_seller: false,
      },
      {
        id: 3,
        category: "Recommended",
        name: "Super 6 Water cane combo offers",
        price: 931.43,
        description:
          "Save 21% on combo of 6 of water cane with 2 free water bottles and save 13 rupees",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57HSvagNhjTCWuRcdWhdRGSJq-E97fYnSmw&s",
        veg: false,
        best_seller: false,
      },
      {
        id: 4,
        category: "Recommended",
        name: "Super 4 Water cane with 1 water bottle combo ",
        price: 827.62,
        description:
          "Save up to 5% in this offer",
        img_url:
          "https://w1.pngwing.com/pngs/454/849/png-transparent-plastic-bottle-mineral-water-drinking-water-water-bottles-bottled-water-jar-water-supply-drink-can.png",
        veg: false,
        best_seller: false,
      },
    ],
  },
  {
    id: 1,
    name: "RO Service",
    rating: random(),
    average_cost: 200,
    average_time: 26,
    cuisines: ["Repair"],
    img_url:
      "https://webtk.sfastservices.com/blogimg/Sfastservices%20Ro%20Repair%20Service%20Near%20me.jpg",
    veg: false,
    items: [
      {
        id: 1,
        category: "Recommended",
        name: "Ro care and service",
        price: 350.48,
        description:
          "Flat 55% off on this RO service and provide 1 month warranty",
        img_url:
          "https://i.pinimg.com/originals/e3/69/2c/e3692c14ad737adf5a46e7ddad79027b.jpg",
        veg: false,
        best_seller: false,
      },
      {
        id: 2,
        category: "Recommended",
        name: "Service on doors",
        price: 699.05,
        description:
          "It provides door service and give 13% off plus warranty",
        img_url:
          "https://tse2.mm.bing.net/th/id/OIP.B5s5qR0nLzc46TdfxHBwpQHaHa?w=736&h=736&rs=1&pid=ImgDetMain",
        veg: false,
        best_seller: false,
      },
      {
        id: 3,
        category: "Recommended",
        name: "EUROGUARD",
        price: 931.43,
        description:
          "Provides door step service and give best combo offers.",
        img_url:
          "https://tse1.mm.bing.net/th/id/OIP.tB1SeCpZkMg-CGlgk4qedAHaHa?rs=1&pid=ImgDetMain",
        veg: false,
        best_seller: false,
      },
      
    ],
  },
  {
    id: 2,
    name: "Tracking",
    rating: random(),
    average_time: 27,
    cuisines: ["Water cane", " RO Service", " Water sump filling"],
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAlMeN-g2jljD19--bq1HhU3M5EZWJb_6diT_YSg2PPwh9tM-m5l3OxsjL5bkV8BkW1Y&usqp=CAU",
    veg: true,
    
    items: [
      {
        id: 1,
        category: "Recommended",
        name: "Water cane",
        description:
          " As soon as you place your order, you'll receive an order confirmation notification. At this point, our system begins processing your order and preparing it for delivery.",
        img_url:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/hmtzrrkltwyt1vltn8fu",
        veg: false,
        best_seller: false,
      },
      {
        id: 2,
        category: "Recommended",
        name: "RO service",
        description:
          "Once your order is prepared and handed over to our delivery partner, you'll receive another notification confirming that your order is on its way.",
        img_url:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/kubsukd1h9bu2uic6f1u",
        veg: false,
        best_seller: false,
      },
      {
        id: 3,
        category: "Recommended",
        name: "Water tank",
        description:
          "Will be reached in an hour",
        img_url:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/vh4o3u6ygyikf3uvneeq",
        veg: false,
        best_seller: false,
      },
      {
        id: 4,
        category: "Recommended",
        name: "Water Bottel",
        description:
          "Throughout the delivery process, you'll receive periodic updates on the status of your order. These updates will include the current location of your delivery partner, estimated time of arrival.",
        img_url:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
        veg: false,
        best_seller: false,
      },
    ],
  },
  {
    id: 3,
    name: "Videos",
    rating: 4.0,
    average_time: 30,
    cuisines: ["Awarness videos on water"],
    img_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMC9Zzoug-rhDJXxqSwSk3T6iHzZeIXHJOA_WJlfyTclI-lTO5xpJGC5sv_IK7Pfzf4jM&usqp=CAU",
    veg: false,
    promoted: true,
    items: [
      {
        id: 1,
        category: "Recommended",
        name: "Don't waste water",
        description:
          "Water is very essentail resource.Conserving water is crucial for environmental sustainability and ensuring a stable supply of this vital resource for future generations. ",
        img_url:
          "https://www.youtube.com/watch?v=ChUqRw3EPbE",
        veg: false,
        best_seller: false,
      },
      {
        id: 2,
        category: "Recommended",
        name: "Water scarcity",
        description:
          "the demand for water exceeds the available supply, leading to inadequate access to clean and safe water for drinking, sanitation, agriculture, and other essential uses. It is a significant global challenge that affects millions of people around the world and has far-reaching environmental, social, and economic implications.",
        img_url:
          "https://www.youtube.com/watch?v=E6pjj2gVnWA",
        veg: false,
        best_seller: false,
      },
      {
        id: 3,
        category: "Recommended",
        name: "Save water",
        description:
          "Saving water is essential for ensuring the availability of clean and safe water for current and future generations.",
        img_url:
          "https://www.youtube.com/watch?v=nTcFXJT0Fsc",
        veg: false,
        best_seller: false,
      },
    ],
  },
  {
    id: 4,
    name: "Water Supply",
    rating: random(),
    average_cost: 200,
    average_time: 34,
    cuisines: ["Will be reached in 5-10minutes"],
    img_url:
      "https://thumbs.dreamstime.com/b/blue-truck-carries-purified-drinking-water-tank-flat-vector-illustration-245561494.jpg",
    veg: true,
    items: [
      {
        id: 1,
        category: "Recommended",
        name: "RO water suplliers",
        price: 564.08,
        description:
          " We source our water from trusted suppliers and ensure that it meets the highest quality standards for purity and safety",
        img_url:
          "https://5.imimg.com/data5/SELLER/Default/2022/10/IS/DG/MS/124341314/ro-water-tanker-supply-services-500x500.png",
        veg: false,
        best_seller: false,
      },
      {
        id: 2,
        category: "Recommended",
        name: "Metro water",
        price: 459.12,
        description:
          "Whether you need a one-time delivery or regular water supply services, we can tailor our offerings to suit your needs.",
        img_url:
          "https://bsg-i.nbxc.com/product/8d/40/0f/3479ae2ae9714edec5363e6991.jpg",
        veg: false,
        best_seller: false,
      },
      {
        id: 3,
        category: "Recommended",
        name: "HNM & VDR",
        price: 350.24,
        description:
          "Our dedicated team works diligently to ensure that your water lorry supply arrives on schedule, so you can focus on your daily activities with peace of mind.",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl3l06bgMETYjIDNXNFlTKZY8fZ8STZOSKlJ6BRIP55zKxE_X0w55ajRIkV5LWAkG6fGc&usqp=CAU",
        veg: false,
        best_seller: false,
      },
      {
        id: 4,
        category: "Recommended",
        name: "HHK",
        price: 91.43,
        description:
          "We understand the importance of timely delivery, especially when it comes to essential resources like water.",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLl7krgCPHjchz-G-Oi4gLNa_Zl-Dz5t0l8jqVtDqSI_8Dv92HgL99LCbC9ZOFV45AJ7E&usqp=CAU",
        veg: false,
        best_seller: false,
      },
    ],
  },
  {
    id: 5,
    name: "Updates",
    rating: random(),
    average_cost: 200,
    average_time: 40,
    cuisines: ["Day today updates"],
    img_url:
      "https://tse1.mm.bing.net/th/id/OIP.lV2qMgSGWaCYfKoKO2ep6wHaCO?rs=1&pid=ImgDetMain",
    veg: false,
    promoted: true,
    items: [
      {
        id: 1,
        category: "Recommended",
        name: "Deccan Chronicle",
        description:
          "Today News",
        img_url:
          "https://imgv2-1-f.scribdassets.com/img/document/516300764/original/e44c62c91c/1669872454?v=1",
        veg: false,
        best_seller: false,
      },
      {
        id: 2,
        category: "Recommended",
        name: "Indian express",
        description:
          "Indian Express",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxVe5octLdIPC8howm3UzvJzvIWvJCjM-MfXWTVmYtNjmvc4DZLZdYgVLaVspBIhSQVE&usqp=CAU",
        veg: false,
        best_seller: false,
      },
      {
        id: 3,
        category: "Recommended",
        name: "Times of India",
        description:
          "Times Of India",
        img_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzFF5413nrdx6S0a2QCo-Xb2VfClcYnq1DWrSl_JNx05FOn0qN6FuGEyflJGDc-u4Xmuw&usqp=CAU",
        veg: false,
        best_seller: false,
      },
      {
        id: 4,
        category: "Recommended",
        name: "Chennai Express",
        description:
          "",
        img_url:
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ulnzlvmkllvii1peo9nz",
        veg: false,
        best_seller: false,
      },
    ],
  },
];
export { data };