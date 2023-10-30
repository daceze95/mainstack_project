import AddPhoto from '../assets/add_a_photo.svg';
import Alarm from '../assets/alarm.svg';
import blessing from '../assets/blessing.png';
import Dashboard from '../assets/dashboard.svg';
import DeleteIcon from '../assets/delete.svg';
import Edit from '../assets/edit.svg';
import Facebook from '../assets/facebook.svg';
import FilePresent from '../assets/file_present.svg';
import Group from '../assets/group.svg';
import HourGlassEmpty from '../assets/hourglass_empty.svg';
import Info from '../assets/info.svg';
import Instagram from '../assets/Instagram.svg';
import Linkedin from '../assets/Linkedin.svg';
import MainStackLogo from '../assets/mainstack-logo.svg';
import Subscriptions from '../assets/subscriptions.svg';
import Twitter from '../assets/twitter.svg';
// import FetchData from '../api/api';

// console.log(FetchData());
export const siteLogo = MainStackLogo;
export const help = Info;
export const loggingUser = 'Blessing';
export const loggingUserImage = blessing;
export const numberOfDays = [1, 3, 7, 30, 'All Time', 'Custom Date'];
export const asideMenuItem = [
  {
    icon: Dashboard,
    text: 'Dashboard',
    url: '/dashboard'
  },
  {
    icon: Edit,
    text: 'Item 1',
    url: 'item_1'
  },
  {
    icon: Group,
    text: 'Item 2',
    url: 'item_2'
  },
  {
    icon: HourGlassEmpty,
    text: 'Item 3',
    url: 'item_3'
  },
];

export const OthersOne = [
  {
    icon: AddPhoto,
    text: 'Item 4',
    url: 'item_4'
  },
  {
    icon: DeleteIcon,
    text: 'Item 5',
    url: 'item_5'
  },
];
export const OthersTwo = [
  {
    icon: Subscriptions,
    text: 'Item 6',
    url: 'item_6'
  },
  {
    icon: FilePresent,
    text: 'Item 7',
    url: 'item_7'
  },
  {
    icon: Alarm,
    text: 'Item 8',
    url: 'item_8'
  },
];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6600'];


//external api
export const api_result = {
  top_locations: [
    {
      flag: '🇳🇬',
      country: 'Nigeria',
      count: 68,
      percent: 34,
      color: '#0088FE',
    },
    {
      flag: '🇩🇪',
      country: 'Germany',
      count: 37,
      percent: 19,
      color: '#00C49F',
    },
    {
      flag: '🇬🇭',
      country: 'Ghana',
      count: 50,
      percent: 25,
      color: '#FFBB28',
    },
    {
      flag: '🇫🇮',
      country: 'Finland',
      count: 40,
      percent: 20,
      color: '#FF8042',
    },
    {
      flag: '🇬🇧',
      country: 'United Kingdom',
      count: 4,
      percent: 2,
      color: '#FF6600',
    },
  ],
  top_sources: [
    {
      icon: Twitter,
      source: 'google',
      count: 50,
      percent: 25,
      color: '#0088FE',
    },
    {
      icon: Instagram,
      source: 'instagram',
      count: 68,
      percent: 34,
      color: '#00C49F',
    },
    {
      icon: Facebook,
      source: 'facebook',
      count: 40,
      percent: 20,
      color: '#FFBB28',
    },
    {
      icon: Linkedin,
      source: 'linkedin',
      count: 41,
      percent: 21,
      color: '#FF6600',
    },
  ],
};

export const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
