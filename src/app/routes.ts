import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import EventTypes from './pages/EventTypes';
import IndividualEvent from './pages/IndividualEvent';
import Venues from './pages/Venues';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundPolicy from './pages/RefundPolicy';
import CancellationPolicy from './pages/CancellationPolicy';
import IndividualService from './pages/IndividualService';
import IndividualVenue from './pages/IndividualVenue';
import AuthPage from './pages/AuthPage';
import ProjectHub from './pages/ProjectHub';
import Wishlist from './pages/Wishlist';
import CartPage from './pages/Cart';
import CinematicPortfolio from './pages/CinematicPortfolio';
import ProjectDetail from './pages/ProjectDetail';
import ImmersiveGallery from './pages/ImmersiveGallery';
import DesignLab from './pages/DesignLab';
import SignatureWeddings from './pages/SignatureWeddings';
import PressMedia from './pages/PressMedia';
import EventProcess from './pages/EventProcess';
import QuoteBuilder from './pages/QuoteBuilder';
import VendorNetwork from './pages/VendorNetwork';
import ClientPortal from './pages/ClientPortal';
import EventTimeline from './pages/EventTimeline';
import MissionControl from './pages/MissionControl';
import SensoryBoard from './pages/SensoryBoard';
import ClientDashboard from './pages/ClientDashboard';
import GiftShop from './pages/GiftShop';
import CategoryGrid from './pages/CategoryGrid';
import ProductDetailView from './pages/ProductDetailView';
import GuestCollective from './pages/GuestCollective';
import CartPage from './pages/CartPage';
import SecureCheckout from './pages/SecureCheckout';
import SeamlessCheckout from './pages/SeamlessCheckout';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/login',
    Component: AuthPage,
  },
  {
    path: '/hub',
    Component: ProjectHub,
  },
  {
    path: '/wishlist',
    Component: Wishlist,
  },
  {
    path: '/cart',
    Component: CartPage,
  },
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: 'portfolio',
        Component: CinematicPortfolio,
      },
      {
        path: 'project-detail',
        Component: ProjectDetail,
      },
      {
        path: 'gallery',
        Component: ImmersiveGallery,
      },
      {
        path: 'design-lab',
        Component: DesignLab,
      },
      {
        path: 'signature-weddings',
        Component: SignatureWeddings,
      },
      {
        path: 'press-media',
        Component: PressMedia,
      },
      {
        path: 'event-process',
        Component: EventProcess,
      },
      {
        path: 'quote-builder',
        Component: QuoteBuilder,
      },
      {
        path: 'vendor-network',
        Component: VendorNetwork,
      },
      {
        path: 'client-portal',
        Component: ClientPortal,
      },
      {
        path: 'event-timeline',
        Component: EventTimeline,
      },
      {
        path: 'mission-control',
        Component: MissionControl,
      },
      {
        path: 'sensory-board',
        Component: SensoryBoard,
      },
      {
        path: 'client-dashboard',
        Component: ClientDashboard,
      },
      {
        path: 'gift-shop',
        Component: GiftShop,
      },
      {
        path: 'category-grid',
        Component: CategoryGrid,
      },
      {
        path: 'product-detail',
        Component: ProductDetailView,
      },
      {
        path: 'guest-collective',
        Component: GuestCollective,
      },
      {
        path: 'cart',
        Component: CartPage,
      },
      {
        path: 'checkout',
        Component: SecureCheckout,
      },
      {
        path: 'seamless-checkout',
        Component: SeamlessCheckout,
      },
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'services',
        Component: Services,
      },
      {
        path: 'services/:serviceSlug',
        Component: IndividualService,
      },
      {
        path: 'events',
        Component: EventTypes,
      },
      {
        path: 'events/:eventType',
        Component: IndividualEvent,
      },
      {
        path: 'venues',
        Component: Venues,
      },
      {
        path: 'venues/:venueId',
        Component: IndividualVenue,
      },
      {
        path: 'blog',
        Component: Blog,
      },
      {
        path: 'blog/:slug',
        Component: BlogArticle,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: 'quote',
        Component: Quote,
      },
      {
        path: 'privacy-policy',
        Component: PrivacyPolicy,
      },
      {
        path: 'terms-conditions',
        Component: TermsConditions,
      },
      {
        path: 'refund-policy',
        Component: RefundPolicy,
      },
      {
        path: 'cancellation-policy',
        Component: CancellationPolicy,
      },
    ],
  },
  {
    path: '*',
    Component: NotFound,
  },
]);