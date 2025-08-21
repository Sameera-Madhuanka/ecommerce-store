
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e986134b990b8bd45c88e06eebd1adaca from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e57856064968bc1c7b6d6eca455bf0129 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import e01688a02c44c2c475ee9b293faf0d7e9 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/Checkout.js';
import e641c79e3c2e5a76a080f699e4215e736 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/PaymentStep.js';
import efc00edf419aaa2a0d39e9ecdaa9b77da from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/ShipmentStep.js';
import ef0cf947f6921715b9c86c42cf6fb833a from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/ShippingMethods.js';
import e2a334a45f4afd8c72c6d8d02e1f1ff66 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/ShippingNote.js';
import e3f9b28a6f5a7c901f23c2beb2c0f43e8 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/Summary.js';
import e721ee47b9d1fae9db1a1cdc2f5903361 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/checkout/SummaryMobile.js';
import e13f3f05beb7952d737eff6ac8d81cc29 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import e22a659041c15a9ba856be401f4bdf43e from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import e3cfba03a22f22423dac402f0914825a5 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e52a1925e59622502cac9d5c33b05399f from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import e49005dd3ca82d6e5f2c7a4dd34ccd11b from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import e2c54fa52056ec90dfb6deda60400c037 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import e369ae299fc68dafcffaef86262f24a81 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cod/pages/frontStore/checkout/CashOnDelivery.js';
import e2ce4246cc808bdac3315ad1541f1c2a1 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import e318781edf414c0a1515afba4dee04941 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/checkout/CustomerInfoStep.js';
import e04d40d0885a0a815e42f7831203bdbbf from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/paypal/pages/frontStore/checkout/Paypal.js';
import ec8c2e8248fef2da0666a5a0c7722417d from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/stripe/pages/frontStore/checkout/Stripe.js';
import collection_products from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
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
    e01688a02c44c2c475ee9b293faf0d7e9: {
      id: 'e01688a02c44c2c475ee9b293faf0d7e9',
      sortOrder: 10,
      component: { default: e01688a02c44c2c475ee9b293faf0d7e9 }
    },
    e13f3f05beb7952d737eff6ac8d81cc29: {
      id: 'e13f3f05beb7952d737eff6ac8d81cc29',
      sortOrder: 0,
      component: { default: e13f3f05beb7952d737eff6ac8d81cc29 }
    }
  },
  checkoutSteps: {
    e641c79e3c2e5a76a080f699e4215e736: {
      id: 'e641c79e3c2e5a76a080f699e4215e736',
      sortOrder: 20,
      component: { default: e641c79e3c2e5a76a080f699e4215e736 }
    },
    efc00edf419aaa2a0d39e9ecdaa9b77da: {
      id: 'efc00edf419aaa2a0d39e9ecdaa9b77da',
      sortOrder: 15,
      component: { default: efc00edf419aaa2a0d39e9ecdaa9b77da }
    },
    e318781edf414c0a1515afba4dee04941: {
      id: 'e318781edf414c0a1515afba4dee04941',
      sortOrder: 10,
      component: { default: e318781edf414c0a1515afba4dee04941 }
    }
  },
  checkoutShippingAddressForm: {
    ef0cf947f6921715b9c86c42cf6fb833a: {
      id: 'ef0cf947f6921715b9c86c42cf6fb833a',
      sortOrder: 60,
      component: { default: ef0cf947f6921715b9c86c42cf6fb833a }
    }
  },
  checkoutSummary: {
    e2a334a45f4afd8c72c6d8d02e1f1ff66: {
      id: 'e2a334a45f4afd8c72c6d8d02e1f1ff66',
      sortOrder: 50,
      component: { default: e2a334a45f4afd8c72c6d8d02e1f1ff66 }
    }
  },
  checkoutPageRight: {
    e3f9b28a6f5a7c901f23c2beb2c0f43e8: {
      id: 'e3f9b28a6f5a7c901f23c2beb2c0f43e8',
      sortOrder: 10,
      component: { default: e3f9b28a6f5a7c901f23c2beb2c0f43e8 }
    }
  },
  beforePlaceOrderButton: {
    e721ee47b9d1fae9db1a1cdc2f5903361: {
      id: 'e721ee47b9d1fae9db1a1cdc2f5903361',
      sortOrder: 10,
      component: { default: e721ee47b9d1fae9db1a1cdc2f5903361 }
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
  checkoutPaymentMethodcod: {
    e369ae299fc68dafcffaef86262f24a81: {
      id: 'e369ae299fc68dafcffaef86262f24a81',
      sortOrder: 10,
      component: { default: e369ae299fc68dafcffaef86262f24a81 }
    }
  },
  checkoutPaymentMethodpaypal: {
    e04d40d0885a0a815e42f7831203bdbbf: {
      id: 'e04d40d0885a0a815e42f7831203bdbbf',
      sortOrder: 10,
      component: { default: e04d40d0885a0a815e42f7831203bdbbf }
    }
  },
  checkoutPaymentMethodstripe: {
    ec8c2e8248fef2da0666a5a0c7722417d: {
      id: 'ec8c2e8248fef2da0666a5a0c7722417d',
      sortOrder: 10,
      component: { default: ec8c2e8248fef2da0666a5a0c7722417d }
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
ReactDOM.hydrate(
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );