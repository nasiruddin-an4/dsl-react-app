import { 
  RiPhoneFill, 
  RiFacebookFill, 
  RiTwitterFill, 
  RiYoutubeFill,
  RiLinkedinFill,
  RiInstagramLine
} from 'react-icons/ri';

export const navigationItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#" },
    {
      title: "Products",
      items: [
        {
          label: "Analytics",
          children: [
            { label: "Real-time", href: "#" },
            { label: "Reports", href: "#" },
            { label: "Dashboard", href: "#" },
          ],
        },
        {
          label: "Engagement",
          children: [
            { label: "Messaging", href: "#" },
            { label: "Live Chat", href: "#" },
            { label: "Email", href: "#" },
          ],
        },
        { label: "Security", href: "#" },
        { label: "Automation", href: "#" },
      ],
    },
    { label: "Portfolio", href: "#" },
    { label: "Company", href: "#" },
    { label: "Insight", href: "#" },
  ];

export const sectionData = {
    title: "We Develop Mission Critical Software For Our Clients",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    stats: [
        { label: "Years of Operation", value: 20 },
        { label: "Project Completed", value: 300 },
        { label: "Professionals", value: 70 },
        { label: "Happy Clients", value: 200 },
    ],
};

export const socialLinks = [
  { icon: RiFacebookFill, href: 'https://facebook.com', color: 'bg-blue-950' },
  { icon: RiTwitterFill, href: 'https://twitter.com', color: 'bg-blue-950' },
  { icon: RiYoutubeFill, href: 'https://youtube.com', color: 'bg-blue-950' },
  { icon: RiLinkedinFill, href: 'https://linkedin.com', color: 'bg-blue-950' },
  { icon: RiInstagramLine, href: 'https://instagram.com', color: 'bg-blue-950' }
];