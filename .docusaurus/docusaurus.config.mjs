/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Seata",
  "favicon": "img/seata_logo_small.jpeg",
  "url": "https://seata.io",
  "baseUrl": "/",
  "organizationName": "alibaba",
  "projectName": "seata",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en",
      "zh-cn"
    ],
    "localeConfigs": {
      "en": {
        "label": "En",
        "htmlLang": "en-US",
        "direction": "ltr"
      },
      "zh-cn": {
        "label": "中",
        "htmlLang": "zh-CN",
        "direction": "ltr"
      }
    },
    "path": "i18n"
  },
  "scripts": [
    {
      "src": "//g.alicdn.com/mamba/assets/0.0.19/mse-arc-ui.min.js"
    },
    {
      "src": "//g.alicdn.com/alilog/mlog/aplus_v2.js",
      "id": "beacon-aplus",
      "exparams": "clog=o&aplus&sidx=aplusSidx&ckx=aplusCkx"
    },
    {
      "src": "//g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js,tracker-plugin-jserror/1.0.13/index.js,tracker-plugin-api/1.1.14/index.js,tracker-plugin-perf/1.1.8/index.js,tracker-plugin-eventTiming/1.0.4/index.js"
    },
    {
      "src": "https://www.googletagmanager.com/gtag/js?id=G-YHS75WKFBR",
      "async": true
    }
  ],
  "stylesheets": [
    {
      "href": "//g.alicdn.com/mamba/assets/0.0.19/mse-arc-ui.min.css"
    }
  ],
  "plugins": [
    "docusaurus-plugin-sass"
  ],
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/Users/chaixinyi/Documents/new/sidebars.js"
        },
        "blog": {
          "showReadingTime": true,
          "blogSidebarTitle": "全部博文",
          "blogSidebarCount": "ALL"
        },
        "theme": {
          "customCss": "/Users/chaixinyi/Documents/new/src/css/custom.scss"
        }
      }
    ]
  ],
  "themeConfig": {
    "metadata": [
      {
        "name": "keywords",
        "content": "Seata"
      }
    ],
    "image": "img/docusaurus-social-card.jpg",
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false
    },
    "navbar": {
      "title": "",
      "logo": {
        "alt": "Seata Logo",
        "src": "img/seata_logo.png"
      },
      "items": [
        {
          "label": "Home",
          "to": "/",
          "activeBaseRegex": "^/$",
          "position": "right"
        },
        {
          "label": "Docs",
          "type": "doc",
          "docId": "overview/what-is-seata",
          "position": "right"
        },
        {
          "label": "Solutions",
          "type": "dropdown",
          "position": "right",
          "items": [
            {
              "label": "Seata in Cloud",
              "href": "https://www.aliyun.com/product/aliware/mse?spm=seata-website.topbar.0.0.0"
            },
            {
              "label": "SOFA distributed transaction",
              "href": "https://help.aliyun.com/document_detail/132903.html?spm=seata-website.topbar.0.0.0"
            }
          ]
        },
        {
          "label": "Free trial",
          "href": "https://free.aliyun.com/?searchKey=nacos&spm=seata-website.topbar.0.0.0",
          "position": "right",
          "target": "_blank"
        },
        {
          "label": "Developers",
          "type": "doc",
          "docId": "developers/developers_dev",
          "position": "right"
        },
        {
          "label": "Recruitment",
          "to": "https://mp.weixin.qq.com/s/nvDmIJEuDaNEY3RfTA3UyA",
          "position": "right",
          "target": "_blank"
        },
        {
          "label": "Blog",
          "to": "/blog",
          "position": "right"
        },
        {
          "label": "Community",
          "to": "/community",
          "position": "right"
        },
        {
          "label": "Download",
          "type": "doc",
          "docId": "download",
          "position": "right"
        },
        {
          "label": "Console sample",
          "to": "http://demo.seata.io/",
          "position": "right",
          "target": "_blank"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        }
      ],
      "hideOnScroll": false
    },
    "docs": {
      "sidebar": {
        "autoCollapseCategories": true,
        "hideable": false
      },
      "versionPersistence": "localStorage"
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "headTags": [],
  "clientModules": [],
  "tagline": "",
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
