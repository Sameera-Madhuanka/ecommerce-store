
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e093fe071e44f277135700510945b8aa5 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e757b2fc36726172c6f3d609568567806 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e648a04425d770d576e1108946353090d from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import eb5380451dff311aa1aa6c4cbb7ac1556 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import eaad5804c45c9e28c643e64a8fbc79a9b from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import e98adfab38d15edc8cb6c5c1e1685d2b6 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e1fbd4223450022e0244fc50ba3642bcd from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import ebacf9be0085bed7c092a49232abeb7c1 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e42bb8029b16a17bf7f3b37d19c818fd5 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import eb4664bbbc608c9754affe70ad22af94d from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import ef7bd8acfff12a24292425dc491e0d29c from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import ec28a67a6f1f797e3d0098307d1d60269 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import eda828f161ff7c07bc4984fc87c94e0b4 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ef7e751598fa1a599211ff6f3d67f4723 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import e943b9c947dbc1e0b22f403bd463508e8 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import ece4c0bc6e459536b205af1396142ff5c from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import ef25557f721c3f20bfaa972e09d10d2b2 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e432cd5d9abe7c0990e86f37f08e9e092 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import e38cffb762a5085f97cda8cc2a37b8a3b from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import ec6d0b9d797b2eda22ce7cf37ab15f3cf from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import ef2efac687887b3eb996206850bc03257 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e1d914bc72488d2655ec19b5d58cc6e26 from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/storeSetting/StoreSetting.js';
import e94adaab937cfd46fb4eb3d34647dc2fb from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///F:/NEW_BSNES/GitHubApp/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    e093fe071e44f277135700510945b8aa5: {
      id: 'e093fe071e44f277135700510945b8aa5',
      sortOrder: 50,
      component: { default: e093fe071e44f277135700510945b8aa5 }
    },
    ebacf9be0085bed7c092a49232abeb7c1: {
      id: 'ebacf9be0085bed7c092a49232abeb7c1',
      sortOrder: 10,
      component: { default: ebacf9be0085bed7c092a49232abeb7c1 }
    },
    eda828f161ff7c07bc4984fc87c94e0b4: {
      id: 'eda828f161ff7c07bc4984fc87c94e0b4',
      sortOrder: 20,
      component: { default: eda828f161ff7c07bc4984fc87c94e0b4 }
    }
  },
  adminMenu: {
    e757b2fc36726172c6f3d609568567806: {
      id: 'e757b2fc36726172c6f3d609568567806',
      sortOrder: 20,
      component: { default: e757b2fc36726172c6f3d609568567806 }
    },
    eaad5804c45c9e28c643e64a8fbc79a9b: {
      id: 'eaad5804c45c9e28c643e64a8fbc79a9b',
      sortOrder: 60,
      component: { default: eaad5804c45c9e28c643e64a8fbc79a9b }
    },
    ec28a67a6f1f797e3d0098307d1d60269: {
      id: 'ec28a67a6f1f797e3d0098307d1d60269',
      sortOrder: 10,
      component: { default: ec28a67a6f1f797e3d0098307d1d60269 }
    },
    e943b9c947dbc1e0b22f403bd463508e8: {
      id: 'e943b9c947dbc1e0b22f403bd463508e8',
      sortOrder: 40,
      component: { default: e943b9c947dbc1e0b22f403bd463508e8 }
    },
    ece4c0bc6e459536b205af1396142ff5c: {
      id: 'ece4c0bc6e459536b205af1396142ff5c',
      sortOrder: 30,
      component: { default: ece4c0bc6e459536b205af1396142ff5c }
    },
    ef25557f721c3f20bfaa972e09d10d2b2: {
      id: 'ef25557f721c3f20bfaa972e09d10d2b2',
      sortOrder: 50,
      component: { default: ef25557f721c3f20bfaa972e09d10d2b2 }
    },
    ec6d0b9d797b2eda22ce7cf37ab15f3cf: {
      id: 'ec6d0b9d797b2eda22ce7cf37ab15f3cf',
      sortOrder: 500,
      component: { default: ec6d0b9d797b2eda22ce7cf37ab15f3cf }
    }
  },
  quickLinks: {
    e648a04425d770d576e1108946353090d: {
      id: 'e648a04425d770d576e1108946353090d',
      sortOrder: 20,
      component: { default: e648a04425d770d576e1108946353090d }
    },
    e432cd5d9abe7c0990e86f37f08e9e092: {
      id: 'e432cd5d9abe7c0990e86f37f08e9e092',
      sortOrder: 30,
      component: { default: e432cd5d9abe7c0990e86f37f08e9e092 }
    }
  },
  settingPageMenu: {
    eb5380451dff311aa1aa6c4cbb7ac1556: {
      id: 'eb5380451dff311aa1aa6c4cbb7ac1556',
      sortOrder: 15,
      component: { default: eb5380451dff311aa1aa6c4cbb7ac1556 }
    },
    e38cffb762a5085f97cda8cc2a37b8a3b: {
      id: 'e38cffb762a5085f97cda8cc2a37b8a3b',
      sortOrder: 10,
      component: { default: e38cffb762a5085f97cda8cc2a37b8a3b }
    },
    ef2efac687887b3eb996206850bc03257: {
      id: 'ef2efac687887b3eb996206850bc03257',
      sortOrder: 5,
      component: { default: ef2efac687887b3eb996206850bc03257 }
    },
    e94adaab937cfd46fb4eb3d34647dc2fb: {
      id: 'e94adaab937cfd46fb4eb3d34647dc2fb',
      sortOrder: 20,
      component: { default: e94adaab937cfd46fb4eb3d34647dc2fb }
    }
  },
  footerLeft: {
    e98adfab38d15edc8cb6c5c1e1685d2b6: {
      id: 'e98adfab38d15edc8cb6c5c1e1685d2b6',
      sortOrder: 10,
      component: { default: e98adfab38d15edc8cb6c5c1e1685d2b6 }
    },
    ef7e751598fa1a599211ff6f3d67f4723: {
      id: 'ef7e751598fa1a599211ff6f3d67f4723',
      sortOrder: 20,
      component: { default: ef7e751598fa1a599211ff6f3d67f4723 }
    }
  },
  body: {
    e1fbd4223450022e0244fc50ba3642bcd: {
      id: 'e1fbd4223450022e0244fc50ba3642bcd',
      sortOrder: 10,
      component: { default: e1fbd4223450022e0244fc50ba3642bcd }
    },
    ef7bd8acfff12a24292425dc491e0d29c: {
      id: 'ef7bd8acfff12a24292425dc491e0d29c',
      sortOrder: 10,
      component: { default: ef7bd8acfff12a24292425dc491e0d29c }
    }
  },
  head: {
    e42bb8029b16a17bf7f3b37d19c818fd5: {
      id: 'e42bb8029b16a17bf7f3b37d19c818fd5',
      sortOrder: 5,
      component: { default: e42bb8029b16a17bf7f3b37d19c818fd5 }
    }
  },
  adminNavigation: {
    eb4664bbbc608c9754affe70ad22af94d: {
      id: 'eb4664bbbc608c9754affe70ad22af94d',
      sortOrder: 10,
      component: { default: eb4664bbbc608c9754affe70ad22af94d }
    }
  },
  content: {
    e1d914bc72488d2655ec19b5d58cc6e26: {
      id: 'e1d914bc72488d2655ec19b5d58cc6e26',
      sortOrder: 10,
      component: { default: e1d914bc72488d2655ec19b5d58cc6e26 }
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
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );