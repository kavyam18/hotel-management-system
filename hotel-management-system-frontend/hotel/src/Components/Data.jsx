import Room1 from "./Assests/images/Room1.jpg";
import Image2 from "./Assests/images/Image2.jpg";
import Image3 from "./Assests/images/Image3.jpg";
import Person2 from "./Assests/images/Person2.jpg";
import Person3  from "./Assests/images/Person3.jpg";
import Person1 from "./Assests/images/Person1.jpg";
import Person5 from "./Assests/images/Person5.jpg";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import { Room, Phone, Mail, Language,} from '@mui/icons-material';




export const roomItems = [
  {
    id: 1,
    name: "Room 1",
    price: "$100",
    star: "⭐⭐⭐⭐",
    facilities: [
      { icon: "", quantity: 2, facility: "Beds" },
      { icon: "", quantity: 1, facility: "Bathroom" },
    ],
    description: "A room intended for one person to stay in. Choose from twin or single rooms, all of which are comfortable..",
    image: Image2, // Add the image path here
    yellowbtn: "Book Now",
    darkbtn: "Learn More",
  },
  {
    id: 2,
    name: "Room 2",
    price: "$120",
    star: "⭐⭐⭐⭐⭐",
    facilities: [
      { icon: "", quantity: 1, facility: "Bed" },
      { icon: "", quantity: 1, facility: "Bathroom" },
    ],
    description: " Each guest has her own single room, or shares a double room.",
    image: Room1, // Add the image path here
    yellowbtn: "Book Now",
    darkbtn: "Learn More",
  },
  {
    id: 3,
    name: "Room 3",
    price: "$150",
    star: "⭐⭐⭐",
    facilities: [
      { icon: "", quantity: 1, facility: "Bed" },
      { icon: "", quantity: 1, facility: "Bathroom" },
      { icon: "", quantity: 1, facility: "Balcony" },
    ],
    description: "A double occupancy room usually has two beds and more space than the single occupant option, making it ideal for couples or friends traveling together.",
    image: Image3, // Add the image path here
    yellowbtn: "Book Now",
    darkbtn: "Learn More",
  },
  // Add more rooms as needed
];
  
  export const facility = [
    { icon: "Icon1", quantity: 2, name: "Facility 1" },
    { icon: "Icon2", quantity: 1, name: "Facility 2" }
   
  ];
  
  export const getSocialIcons = () => [
    { icon: <Facebook />, url: "https://www.facebook.com/" },
    { icon: <Twitter />, url: "https://twitter.com/" },
    { icon: <LinkedIn />, url: "https://www.linkedin.com/" },
  ];

  export const team = [
    {
      image: Person2,
      name: "Mahendra",
      designation: "CEO",
    },
    {
      image: Person3,
      name: "Dhanush",
      designation: "Manager",
    },
    {
      image: Person1,
      name: "Manikanta",
      designation: "Admin",
    },
    {
      image: Person5,
      name: "Deelip",
      designation: "Staff",
    },
  ];
  
  export const socialIcons = [
    {
      icon: <i className="fab fa-facebook-f"></i>,
    },
    {
      icon: <i className="fab fa-twitter"></i>,
    },
    {
      icon: <i className="fab fa-instagram"></i>,
    },
    {
      icon: <i className="fab fa-linkedin-in"></i>,
    },
    {
      icon: <i className="fab fa-youtube"></i>,
    },
  ];

  export const contactItem = [
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Booking",
      email: "book@hotelier.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "Technical",
      email: "tech@hotelier.com",
    },
    {
      icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
      title: "General",
      email: "info@hotelier.com",
    },
  ];

 

  export const footerContact = [
    {
      icon: <Room className="me-3" />,
      name: "123 Street, METROPOLIAN, MYSORE",
    },
    {
      icon: <Phone className="me-3" />,
      name: "+9787457889",
    },
    {
      icon: <Mail className="me-3" />,
      name: "chandan@hotelier.com",
    },
    {
      icon: <Language className="me-3" />,
      name: "www.hotelier.com",
    },
    {
      icon: <Facebook className="me-3" />,
      name: "Hotelier Facebook",
    },
    {
      icon: <Twitter className="me-3" />,
      name: "@hotelier_twitter",
    },
];

 export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
        link: "/about",
        icon: <Facebook />
      },
      {
        name: "Contact Us",
        link: "/contact",
        icon: <Twitter />
      },
      {
        name: "Privacy Policy",
        link: "/privacy",
        icon: <Instagram />
      },
      {
        name: "Terms & Condition",
        link: "/terms",
        icon: <LinkedIn />
      },
      {
        name: "Support",
        link: "/support",
        icon: <Facebook />
      },
    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Food & Restaurant",
        link: "/food",
        icon: <Twitter />
      },
      {
        name: "Spa & Fitness",
        link: "/spa",
        icon: <Instagram />
      },
      {
        name: "Sports & Gaming",
        link: "/sports",
        icon: <LinkedIn />
      },
      {
        name: "Event & Party",
        link: "/event",
        icon: <Facebook />
      },
      {
        name: "GYM & Yoga",
        link: "/gym",
        icon: <Twitter />
      },
    ],
  },
];



  

 
  



 