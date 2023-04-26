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
import {fetchData} from '../api/api';

console.log(fetchData);

export const endPoint = 'https://fe-task-api.mainstack.io/';
export const siteLogo = MainStackLogo;
export const help = Info;
export const loggingUser = 'Blessing';
export const numberOfDays = [1, 3, 7, 30, 'All Time', 'Custom Date'];
export const asideMenuItem = [
  {
    icon: Dashboard,
    text: 'Dashboard',
  },
  {
    icon: Edit,
    text: 'Item 1',
  },
  {
    icon: Group,
    text: 'Item 2',
  },
  {
    icon: HourGlassEmpty,
    text: 'Item 3',
  },
];

export const OthersOne = [
  {
    icon: AddPhoto,
    text: 'Item 4',
  },
  {
    icon: DeleteIcon,
    text: 'Item 5',
  },
];
export const OthersTwo = [
  {
    icon: Subscriptions,
    text: 'Item 6',
  },
  {
    icon: FilePresent,
    text: 'Item 7',
  },
  {
    icon: Alarm,
    text: 'Item 8',
  },
];

//external api
export const api_result = {
  top_locations: [
    {
      flag: '🇳🇬',
      country: 'Nigeria',
      count: 68,
      percent: 34,
    },
    {
      flag: '🇩🇪',
      country: 'Germany',
      count: 37,
      percent: 19,
    },
    {
      flag: '🇬🇭',
      country: 'Ghana',
      count: 50,
      percent: 25,
    },
    {
      flag: '🇫🇮',
      country: 'Finland',
      count: 40,
      percent: 20,
    },
    {
      flag: '🇬🇧',
      country: 'United Kingdom',
      count: 4,
      percent: 2,
    },
  ],
  top_sources: [
    {
      icon: Twitter,
      source: 'google',
      count: 50,
      percent: 25,
    },
    {
      icon: Instagram,
      source: 'instagram',
      count: 68,
      percent: 34,
    },
    {
      icon: Facebook,
      source: 'facebook',
      count: 40,
      percent: 20,
    },
    {
      icon: Linkedin,
      source: 'linkedin',
      count: 41,
      percent: 21,
    },
  ],
};
