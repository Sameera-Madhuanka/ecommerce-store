import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { Area } from '@evershop/evershop/components/common';
import { renderHtml } from '@evershop/evershop/components/common';
import e986134b990b8bd45c88e06eebd1adaca from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e57856064968bc1c7b6d6eca455bf0129 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import e13f3f05beb7952d737eff6ac8d81cc29 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import e22a659041c15a9ba856be401f4bdf43e from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import e3cfba03a22f22423dac402f0914825a5 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e52a1925e59622502cac9d5c33b05399f from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import e49005dd3ca82d6e5f2c7a4dd34ccd11b from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import e2c54fa52056ec90dfb6deda60400c037 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import e2ce4246cc808bdac3315ad1541f1c2a1 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import eb50e2192ef7138d0148010377167a57d from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/paypal/pages/frontStore/paypalReturn/Error.js';
import collection_products from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
export default renderHtml;
Area.defaultProps.components = {
  'icon-wrapper': {
    e986134b990b8bd45c88e06eebd1adaca: {
      id: 'e986134b990b8bd45c88e06eebd1adaca',
      sortOrder: 5,
      component: { default: e986134b990b8bd45c88e06eebd1adaca }
    },
    e57856064968bc1c7b6d6eca455bf0129: {
      id: 'e57856064968bc1c7b6d6eca455bf0129',
      sortOrder: 10,
      component: { default: e57856064968bc1c7b6d6eca455bf0129 }
    },
    e2ce4246cc808bdac3315ad1541f1c2a1: {
      id: 'e2ce4246cc808bdac3315ad1541f1c2a1',
      sortOrder: 30,
      component: { default: e2ce4246cc808bdac3315ad1541f1c2a1 }
    }
  },
  content: {
    e13f3f05beb7952d737eff6ac8d81cc29: {
      id: 'e13f3f05beb7952d737eff6ac8d81cc29',
      sortOrder: 0,
      component: { default: e13f3f05beb7952d737eff6ac8d81cc29 }
    },
    eb50e2192ef7138d0148010377167a57d: {
      id: 'eb50e2192ef7138d0148010377167a57d',
      sortOrder: 10,
      component: { default: eb50e2192ef7138d0148010377167a57d }
    }
  },
  footer: {
    e22a659041c15a9ba856be401f4bdf43e: {
      id: 'e22a659041c15a9ba856be401f4bdf43e',
      sortOrder: 10,
      component: { default: e22a659041c15a9ba856be401f4bdf43e }
    }
  },
  head: {
    e3cfba03a22f22423dac402f0914825a5: {
      id: 'e3cfba03a22f22423dac402f0914825a5',
      sortOrder: 5,
      component: { default: e3cfba03a22f22423dac402f0914825a5 }
    }
  },
  body: {
    e52a1925e59622502cac9d5c33b05399f: {
      id: 'e52a1925e59622502cac9d5c33b05399f',
      sortOrder: 1,
      component: { default: e52a1925e59622502cac9d5c33b05399f }
    },
    e2c54fa52056ec90dfb6deda60400c037: {
      id: 'e2c54fa52056ec90dfb6deda60400c037',
      sortOrder: 10,
      component: { default: e2c54fa52056ec90dfb6deda60400c037 }
    }
  },
  header: {
    e49005dd3ca82d6e5f2c7a4dd34ccd11b: {
      id: 'e49005dd3ca82d6e5f2c7a4dd34ccd11b',
      sortOrder: 10,
      component: { default: e49005dd3ca82d6e5f2c7a4dd34ccd11b }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 